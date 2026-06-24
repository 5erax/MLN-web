import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  examChapters,
  examDifficulties,
  examQuestionBank,
} from '../data/examQuestionBank';

const EXAM_SIZE_OPTIONS = [10, 20, 40];

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

function getDifficultyLabel(id) {
  return examDifficulties.find((item) => item.id === id)?.label || id;
}

function getChapterLabel(id) {
  return examChapters.find((item) => item.id === id)?.label || id;
}

export default function ExamPractice() {
  const [chapterId, setChapterId] = useState('all');
  const [difficulty, setDifficulty] = useState('all');
  const [examSize, setExamSize] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const availableQuestions = useMemo(() => {
    return examQuestionBank.filter((question) => {
      const matchesChapter = chapterId === 'all' || question.chapterId === chapterId;
      const matchesDifficulty =
        difficulty === 'all' || question.difficulty === difficulty;

      return matchesChapter && matchesDifficulty;
    });
  }, [chapterId, difficulty]);

  const canStart = availableQuestions.length > 0;

  const startExam = () => {
    const selectedQuestions = shuffle(availableQuestions)
      .slice(0, Math.min(examSize, availableQuestions.length))
      .map((question) => ({
        ...question,
        options: shuffle(question.options),
      }));

    setQuestions(selectedQuestions);
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetExam = () => {
    setQuestions([]);
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const chooseAnswer = (questionId, optionId) => {
    if (submitted) return;

    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const score = questions.reduce((total, question) => {
    return total + (answers[question.id] === question.correctAnswer ? 1 : 0);
  }, 0);

  const total = questions.length;
  const answeredCount = Object.keys(answers).length;
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const passed = submitted && percentage >= 70;

  if (questions.length > 0) {
    return (
      <ExamSession
        questions={questions}
        answers={answers}
        submitted={submitted}
        score={score}
        total={total}
        percentage={percentage}
        passed={passed}
        answeredCount={answeredCount}
        chooseAnswer={chooseAnswer}
        setSubmitted={setSubmitted}
        resetExam={resetExam}
      />
    );
  }

  return (
    <div className="page page--wide exam-page">
      <header className="exam-hero">
        <span className="badge badge-school">Luyện thi tổng hợp</span>
        <h1 className="page-title">Ôn thi Lịch sử Đảng theo chương</h1>
        <p className="page-desc">
          Chọn chương, độ khó và số lượng câu hỏi để tạo đề luyện tập. Mỗi câu có giải thích
          đáp án để người học hiểu sai ở đâu và cần ôn lại phần nào.
        </p>

        <div className="exam-hero-actions">
          <Link to="/bai-hoc" className="btn btn-primary">
            Xem bài học
          </Link>
          <Link to="/tro-choi-on-tap" className="btn btn-outline">
            Ôn tập tương tác
          </Link>
          <Link to="/tien-do" className="btn btn-ghost">
            Tiến độ học
          </Link>
        </div>
      </header>

      <section className="exam-builder">
        <div className="exam-builder-main">
          <h2>Tạo đề luyện tập</h2>
          <p>
            Hệ thống sẽ lấy ngẫu nhiên câu hỏi phù hợp với bộ lọc. Nếu ngân hàng câu hỏi
            chưa đủ 20 hoặc 40 câu, đề sẽ lấy tối đa số câu hiện có.
          </p>

          <div className="exam-form-grid">
            <label>
              <span>Chương</span>
              <select
                value={chapterId}
                onChange={(event) => setChapterId(event.target.value)}
              >
                {examChapters.map((chapter) => (
                  <option key={chapter.id} value={chapter.id}>
                    {chapter.label}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Độ khó</span>
              <select
                value={difficulty}
                onChange={(event) => setDifficulty(event.target.value)}
              >
                {examDifficulties.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="exam-size-options">
            <span>Số câu hỏi</span>
            <div>
              {EXAM_SIZE_OPTIONS.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={examSize === size ? 'active' : ''}
                  onClick={() => setExamSize(size)}
                >
                  {size} câu
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={startExam}
            disabled={!canStart}
          >
            Bắt đầu luyện tập
          </button>
        </div>

        <aside className="exam-builder-side">
          <h3>Thông tin bộ lọc</h3>

          <dl>
            <div>
              <dt>Chương</dt>
              <dd>{getChapterLabel(chapterId)}</dd>
            </div>
            <div>
              <dt>Độ khó</dt>
              <dd>{getDifficultyLabel(difficulty)}</dd>
            </div>
            <div>
              <dt>Câu phù hợp</dt>
              <dd>{availableQuestions.length} câu</dd>
            </div>
            <div>
              <dt>Đề sẽ tạo</dt>
              <dd>{Math.min(examSize, availableQuestions.length)} câu</dd>
            </div>
          </dl>

          {!canStart && (
            <p className="exam-warning">
              Không có câu hỏi phù hợp. Hãy đổi chương hoặc độ khó.
            </p>
          )}
        </aside>
      </section>

      <section className="exam-bank-overview">
        <h2>Tổng quan ngân hàng câu hỏi</h2>

        <div className="exam-overview-grid">
          <OverviewCard label="Tổng câu hỏi" value={examQuestionBank.length} />
          <OverviewCard
            label="1930-1945"
            value={examQuestionBank.filter((q) => q.chapterId === '1930-1945').length}
          />
          <OverviewCard
            label="1945-1975"
            value={examQuestionBank.filter((q) => q.chapterId === '1945-1975').length}
          />
          <OverviewCard
            label="Từ 1975"
            value={examQuestionBank.filter((q) => q.chapterId === '1975-now').length}
          />
        </div>
      </section>

      <ExamStyle />
    </div>
  );
}

function ExamSession({
  questions,
  answers,
  submitted,
  score,
  total,
  percentage,
  passed,
  answeredCount,
  chooseAnswer,
  setSubmitted,
  resetExam,
}) {
  return (
    <div className="page page--wide exam-page">
      <header className="exam-session-header">
        <div>
          <span className="badge badge-school">Đề luyện tập</span>
          <h1 className="page-title">Bài ôn thi tổng hợp</h1>
          <p className="page-desc">
            Trả lời toàn bộ câu hỏi, sau đó bấm nộp bài để xem điểm và giải thích.
          </p>
        </div>

        <button type="button" className="btn btn-outline" onClick={resetExam}>
          Tạo đề khác
        </button>
      </header>

      <section className="exam-progress-card">
        <div className="exam-progress-top">
          <span>
            Đã trả lời <strong>{answeredCount}</strong>/{total} câu
          </span>
          {submitted && (
            <span>
              Kết quả: <strong>{score}/{total}</strong> — {percentage}%
            </span>
          )}
        </div>

        <div className="exam-progress-bar">
          <div
            className="exam-progress-fill"
            style={{ width: `${(answeredCount / total) * 100}%` }}
          />
        </div>
      </section>

      {submitted && (
        <section className={`exam-result ${passed ? 'exam-result--passed' : 'exam-result--review'}`}>
          <h2>{passed ? 'Đạt yêu cầu' : 'Cần ôn thêm'}</h2>
          <p>
            Bạn trả lời đúng {score}/{total} câu ({percentage}%).
            {passed
              ? ' Bạn đã nắm tương đối tốt phần kiến thức được kiểm tra.'
              : ' Hãy xem lại các câu sai và quay lại bài học liên quan.'}
          </p>
        </section>
      )}

      <section className="exam-question-list">
        {questions.map((question, index) => {
          const selected = answers[question.id];
          const isCorrect = selected === question.correctAnswer;

          return (
            <article
              key={question.id}
              className={`exam-question-card ${
                submitted ? (isCorrect ? 'is-correct' : 'is-wrong') : ''
              }`}
            >
              <div className="exam-question-top">
                <div>
                  <span className="exam-question-number">
                    Câu {index + 1}
                  </span>
                  <h2>{question.question}</h2>
                </div>

                <div className="exam-question-tags">
                  <span>{question.chapterLabel}</span>
                  <span>{getDifficultyLabel(question.difficulty)}</span>
                </div>
              </div>

              <div className="exam-options">
                {question.options.map((option) => {
                  const isSelected = selected === option.id;
                  const isRightOption = submitted && option.id === question.correctAnswer;
                  const isWrongSelected =
                    submitted && isSelected && option.id !== question.correctAnswer;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      className={`exam-option ${
                        isSelected ? 'is-selected' : ''
                      } ${isRightOption ? 'is-right' : ''} ${
                        isWrongSelected ? 'is-wrong' : ''
                      }`}
                      onClick={() => chooseAnswer(question.id, option.id)}
                    >
                      <span className="exam-option-letter">
                        {option.id.toUpperCase()}
                      </span>
                      <span>{option.text}</span>
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="exam-explanation">
                  <strong>Giải thích:</strong> {question.explanation}
                  {question.relatedLessonSlug && (
                    <div className="exam-related-lesson">
                      <Link to={`/bai-hoc/${question.relatedLessonSlug}`}>
                        Xem lại bài học liên quan
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </section>

      <div className="exam-submit-bar">
        {!submitted ? (
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => setSubmitted(true)}
            disabled={answeredCount < total}
          >
            {answeredCount < total
              ? `Còn ${total - answeredCount} câu chưa trả lời`
              : 'Nộp bài'}
          </button>
        ) : (
          <>
            <button type="button" className="btn btn-primary" onClick={resetExam}>
              Tạo đề mới
            </button>
            <Link to="/bai-hoc" className="btn btn-outline">
              Xem lại bài học
            </Link>
          </>
        )}
      </div>

      <ExamStyle />
    </div>
  );
}

function OverviewCard({ label, value }) {
  return (
    <article className="exam-overview-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}

function ExamStyle() {
  return (
    <style>{`
      .exam-page {
        padding-bottom: 4rem;
      }

      .exam-hero,
      .exam-builder,
      .exam-bank-overview,
      .exam-session-header,
      .exam-progress-card,
      .exam-result {
        border: 1px solid var(--border-light);
        border-radius: var(--radius-2xl);
        background: var(--bg-card);
        box-shadow: var(--shadow);
      }

      .exam-hero {
        text-align: center;
        padding: 2.5rem 1.5rem;
        margin-bottom: 1.5rem;
        background: var(--gradient-hero);
      }

      .exam-hero .page-desc {
        margin-left: auto;
        margin-right: auto;
      }

      .exam-hero-actions {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        flex-wrap: wrap;
        margin-top: 1.25rem;
      }

      .exam-builder {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 320px;
        gap: 1.25rem;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
      }

      .exam-builder-main h2,
      .exam-bank-overview h2,
      .exam-builder-side h3,
      .exam-result h2 {
        margin: 0 0 0.5rem;
        color: var(--text);
        font-family: var(--font-serif);
      }

      .exam-builder-main p {
        margin: 0 0 1.25rem;
        color: var(--text-muted);
        line-height: 1.65;
      }

      .exam-form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-bottom: 1.25rem;
      }

      .exam-form-grid label {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }

      .exam-form-grid span,
      .exam-size-options > span {
        color: var(--text-light);
        font-size: 0.75rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }

      .exam-form-grid select {
        min-height: 44px;
        border: 1px solid var(--border);
        background: var(--bg-alt);
        color: var(--text);
        border-radius: var(--radius);
        padding: 0.7rem 0.85rem;
        font: inherit;
        outline: none;
      }

      .exam-form-grid select:focus {
        border-color: var(--accent);
        box-shadow: 0 0 0 3px rgba(44, 82, 130, 0.12);
      }

      .exam-size-options {
        margin-bottom: 1.25rem;
      }

      .exam-size-options div {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.5rem;
      }

      .exam-size-options button {
        border: 1px solid var(--border);
        background: var(--bg-alt);
        color: var(--text-muted);
        border-radius: 999px;
        padding: 0.55rem 0.9rem;
        font: inherit;
        font-weight: 700;
        cursor: pointer;
      }

      .exam-size-options button.active,
      .exam-size-options button:hover {
        background: var(--accent);
        color: white;
        border-color: var(--accent);
      }

      .exam-builder-side {
        background: var(--bg-alt);
        border: 1px solid var(--border-light);
        border-radius: var(--radius-lg);
        padding: 1rem;
      }

      .exam-builder-side dl {
        margin: 0;
        display: grid;
        gap: 0.75rem;
      }

      .exam-builder-side div {
        border-bottom: 1px solid var(--border-light);
        padding-bottom: 0.65rem;
      }

      .exam-builder-side div:last-child {
        border-bottom: 0;
        padding-bottom: 0;
      }

      .exam-builder-side dt {
        color: var(--text-light);
        font-size: 0.75rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        margin-bottom: 0.2rem;
      }

      .exam-builder-side dd {
        margin: 0;
        color: var(--text);
        line-height: 1.45;
      }

      .exam-warning {
        margin: 1rem 0 0;
        color: #b91c1c;
        background: #fef2f2;
        border-radius: var(--radius);
        padding: 0.75rem;
        line-height: 1.5;
      }

      .exam-bank-overview {
        padding: 1.5rem;
      }

      .exam-overview-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1rem;
        margin-top: 1rem;
      }

      .exam-overview-card {
        background: var(--bg-alt);
        border: 1px solid var(--border-light);
        border-radius: var(--radius-lg);
        padding: 1rem;
        text-align: center;
      }

      .exam-overview-card strong {
        display: block;
        color: var(--accent);
        font-family: var(--font-serif);
        font-size: 1.8rem;
        line-height: 1;
        margin-bottom: 0.35rem;
      }

      .exam-overview-card span {
        color: var(--text-muted);
        font-size: 0.85rem;
        font-weight: 700;
      }

      .exam-session-header {
        padding: 1.5rem;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        align-items: flex-start;
      }

      .exam-progress-card {
        padding: 1rem;
        margin-bottom: 1rem;
      }

      .exam-progress-top {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        color: var(--text-muted);
        font-size: 0.92rem;
        margin-bottom: 0.65rem;
      }

      .exam-progress-top strong {
        color: var(--accent);
      }

      .exam-progress-bar {
        height: 8px;
        background: var(--border-light);
        border-radius: 999px;
        overflow: hidden;
      }

      .exam-progress-fill {
        height: 100%;
        background: var(--gradient-accent);
        border-radius: 999px;
        transition: width 0.3s ease;
      }

      .exam-result {
        padding: 1.25rem;
        margin-bottom: 1rem;
      }

      .exam-result p {
        margin: 0;
        color: var(--text-muted);
        line-height: 1.65;
      }

      .exam-result--passed {
        background: var(--accent-green-light);
        border-color: var(--accent-green);
      }

      .exam-result--review {
        background: #fef2f2;
        border-color: #f87171;
      }

      .exam-question-list {
        display: grid;
        gap: 1rem;
      }

      .exam-question-card {
        background: var(--bg-card);
        border: 1px solid var(--border-light);
        border-radius: var(--radius-lg);
        padding: 1.25rem;
        box-shadow: var(--shadow-xs);
      }

      .exam-question-card.is-correct {
        border-color: var(--accent-green);
      }

      .exam-question-card.is-wrong {
        border-color: #f87171;
      }

      .exam-question-top {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        align-items: flex-start;
        margin-bottom: 1rem;
      }

      .exam-question-number {
        display: inline-flex;
        color: var(--accent);
        background: var(--accent-light);
        border-radius: 999px;
        padding: 0.22rem 0.65rem;
        font-size: 0.78rem;
        font-weight: 800;
        margin-bottom: 0.5rem;
      }

      .exam-question-top h2 {
        margin: 0;
        color: var(--text);
        font-size: 1.08rem;
        line-height: 1.45;
      }

      .exam-question-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.35rem;
        justify-content: flex-end;
      }

      .exam-question-tags span {
        border-radius: 999px;
        background: var(--bg-alt);
        border: 1px solid var(--border-light);
        color: var(--text-muted);
        padding: 0.22rem 0.55rem;
        font-size: 0.75rem;
        font-weight: 700;
        white-space: nowrap;
      }

      .exam-options {
        display: grid;
        gap: 0.65rem;
      }

      .exam-option {
        display: flex;
        gap: 0.75rem;
        align-items: flex-start;
        text-align: left;
        border: 1px solid var(--border);
        background: var(--bg-alt);
        color: var(--text);
        border-radius: var(--radius);
        padding: 0.85rem;
        font: inherit;
        cursor: pointer;
        line-height: 1.5;
      }

      .exam-option:hover,
      .exam-option.is-selected {
        border-color: var(--accent);
        background: var(--accent-light);
      }

      .exam-option.is-right {
        border-color: var(--accent-green);
        background: var(--accent-green-light);
      }

      .exam-option.is-wrong {
        border-color: #f87171;
        background: #fef2f2;
      }

      .exam-option-letter {
        width: 28px;
        height: 28px;
        border-radius: 999px;
        background: white;
        color: var(--accent);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        flex-shrink: 0;
      }

      .exam-explanation {
        margin-top: 1rem;
        border-left: 4px solid var(--accent);
        background: var(--accent-light);
        border-radius: 0 var(--radius) var(--radius) 0;
        padding: 0.9rem 1rem;
        color: var(--text-muted);
        line-height: 1.65;
      }

      .exam-explanation strong {
        color: var(--accent);
      }

      .exam-related-lesson {
        margin-top: 0.5rem;
        font-weight: 700;
      }

      .exam-submit-bar {
        position: sticky;
        bottom: 1rem;
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        flex-wrap: wrap;
        margin-top: 1.5rem;
        padding: 1rem;
        border-radius: var(--radius-lg);
        background: rgba(255, 255, 255, 0.92);
        border: 1px solid var(--border-light);
        backdrop-filter: blur(10px);
        box-shadow: var(--shadow-md);
      }

      @media (max-width: 900px) {
        .exam-builder,
        .exam-form-grid,
        .exam-overview-grid {
          grid-template-columns: 1fr;
        }

        .exam-session-header,
        .exam-question-top,
        .exam-progress-top {
          flex-direction: column;
        }

        .exam-question-tags {
          justify-content: flex-start;
        }
      }
    `}</style>
  );
}