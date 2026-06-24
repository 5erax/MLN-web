const STORAGE_KEY = 'party_history_learning_progress_v1';

function safeParse(json, fallback) {
  try {
    return JSON.parse(json) || fallback;
  } catch {
    return fallback;
  }
}

export function getLearningProgress() {
  if (typeof window === 'undefined') {
    return {};
  }

  return safeParse(localStorage.getItem(STORAGE_KEY), {});
}

export function saveLearningProgress(progress) {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function getLessonProgress(slug) {
  const progress = getLearningProgress();

  return progress[slug] || {
    read: false,
    readAt: null,
    quizCompleted: false,
    bestScore: 0,
    bestPercentage: 0,
    passed: false,
    needsReview: false,
    lastQuizAt: null,
  };
}

export function markLessonAsRead(slug) {
  const progress = getLearningProgress();
  const current = getLessonProgress(slug);

  progress[slug] = {
    ...current,
    read: true,
    readAt: current.readAt || new Date().toISOString(),
  };

  saveLearningProgress(progress);
  return progress[slug];
}

export function saveLessonQuizResult(slug, result) {
  const progress = getLearningProgress();
  const current = getLessonProgress(slug);

  const bestScore = Math.max(current.bestScore || 0, result.score);
  const bestPercentage = Math.max(current.bestPercentage || 0, result.percentage);

  progress[slug] = {
    ...current,
    quizCompleted: true,
    bestScore,
    bestPercentage,
    passed: current.passed || result.passed,
    needsReview: !result.passed,
    lastQuizAt: new Date().toISOString(),
  };

  saveLearningProgress(progress);
  return progress[slug];
}

export function resetLessonProgress(slug) {
  const progress = getLearningProgress();
  delete progress[slug];
  saveLearningProgress(progress);
}

export function resetAllLearningProgress() {
  saveLearningProgress({});
}

export function getLearningSummary(lessons) {
  const progress = getLearningProgress();

  const totalLessons = lessons.length;
  const readLessons = lessons.filter((lesson) => progress[lesson.slug]?.read).length;
  const completedQuizzes = lessons.filter(
    (lesson) => progress[lesson.slug]?.quizCompleted
  ).length;
  const passedQuizzes = lessons.filter(
    (lesson) => progress[lesson.slug]?.passed
  ).length;
  const needsReview = lessons.filter(
    (lesson) => progress[lesson.slug]?.needsReview
  ).length;

  const completionPercentage =
    totalLessons > 0 ? Math.round((readLessons / totalLessons) * 100) : 0;

  return {
    totalLessons,
    readLessons,
    completedQuizzes,
    passedQuizzes,
    needsReview,
    completionPercentage,
  };
}