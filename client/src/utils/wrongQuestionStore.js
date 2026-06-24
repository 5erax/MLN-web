const STORAGE_KEY = 'party_history_wrong_questions_v1';

function safeParse(json, fallback) {
  try {
    return JSON.parse(json) || fallback;
  } catch {
    return fallback;
  }
}

function now() {
  return new Date().toISOString();
}

export function getWrongQuestionRecords() {
  if (typeof window === 'undefined') {
    return {};
  }

  return safeParse(localStorage.getItem(STORAGE_KEY), {});
}

export function saveWrongQuestionRecords(records) {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

export function saveWrongQuestionAttempt(question, selectedOptionId) {
  const records = getWrongQuestionRecords();
  const current = records[question.id] || {
    questionId: question.id,
    wrongCount: 0,
    firstWrongAt: now(),
    lastWrongAt: null,
    lastSelectedOptionId: null,
    resolved: false,
    resolvedAt: null,
  };

  records[question.id] = {
    ...current,
    wrongCount: current.wrongCount + 1,
    lastWrongAt: now(),
    lastSelectedOptionId: selectedOptionId,
    resolved: false,
    resolvedAt: null,
    chapterId: question.chapterId,
    difficulty: question.difficulty,
    relatedLessonSlug: question.relatedLessonSlug,
  };

  saveWrongQuestionRecords(records);
  return records[question.id];
}

export function saveExamMistakes(questions, answers) {
  let savedCount = 0;

  questions.forEach((question) => {
    const selectedOptionId = answers[question.id];

    if (selectedOptionId && selectedOptionId !== question.correctAnswer) {
      saveWrongQuestionAttempt(question, selectedOptionId);
      savedCount += 1;
    }
  });

  return savedCount;
}

export function markWrongQuestionResolved(questionId) {
  const records = getWrongQuestionRecords();

  if (!records[questionId]) {
    return null;
  }

  records[questionId] = {
    ...records[questionId],
    resolved: true,
    resolvedAt: now(),
  };

  saveWrongQuestionRecords(records);
  return records[questionId];
}

export function reopenWrongQuestion(questionId) {
  const records = getWrongQuestionRecords();

  if (!records[questionId]) {
    return null;
  }

  records[questionId] = {
    ...records[questionId],
    resolved: false,
    resolvedAt: null,
  };

  saveWrongQuestionRecords(records);
  return records[questionId];
}

export function removeWrongQuestion(questionId) {
  const records = getWrongQuestionRecords();
  delete records[questionId];
  saveWrongQuestionRecords(records);
}

export function clearWrongQuestions() {
  saveWrongQuestionRecords({});
}

export function getWrongQuestionSummary(questionBank) {
  const records = getWrongQuestionRecords();
  const validQuestionIds = new Set(questionBank.map((question) => question.id));

  const validRecords = Object.values(records).filter((record) =>
    validQuestionIds.has(record.questionId)
  );

  const activeRecords = validRecords.filter((record) => !record.resolved);
  const resolvedRecords = validRecords.filter((record) => record.resolved);

  const totalWrongAttempts = validRecords.reduce(
    (total, record) => total + (record.wrongCount || 0),
    0
  );

  return {
    totalRecords: validRecords.length,
    activeCount: activeRecords.length,
    resolvedCount: resolvedRecords.length,
    totalWrongAttempts,
  };
}