import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    examChapters,
    examDifficulties,
    examQuestionBank,
} from '../data/examQuestionBank';
import {
    clearWrongQuestions,
    getWrongQuestionRecords,
    getWrongQuestionSummary,
    markWrongQuestionResolved,
    removeWrongQuestion,
    reopenWrongQuestion,
    saveWrongQuestionAttempt,
} from '../utils/wrongQuestionStore';

const STATUS_FILTERS = [
    { id: 'active', label: 'Đang cần ôn' },
    { id: 'resolved', label: 'Đã xử lý' },
    { id: 'all', label: 'Tất cả' },
];

function shuffle(list) {
    return [...list].sort(() => Math.random() - 0.5);
}

function getDifficultyLabel(id) {
    return examDifficulties.find((item) => item.id === id)?.label || id;
}

function getChapterLabel(id) {
    return examChapters.find((item) => item.id === id)?.label || id;
}

export default function WrongQuestionPractice() {
    const [version, setVersion] = useState(0);
    const [chapterId, setChapterId] = useState('all');
    const [difficulty, setDifficulty] = useState('all');
    const [statusFilter, setStatusFilter] = useState('active');
    const [sessionQuestions, setSessionQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOptionId, setSelectedOptionId] = useState(null);

    const records = useMemo(() => getWrongQuestionRecords(), [version]);
    const summary = useMemo(
        () => getWrongQuestionSummary(examQuestionBank),
        [version]
    );

    const wrongQuestions = useMemo(() => {
        return examQuestionBank
            .filter((question) => records[question.id])
            .map((question) => ({
                ...question,
                wrongRecord: records[question.id],
            }))
            .filter((question) => {
                const matchesChapter =
                    chapterId === 'all' || question.chapterId === chapterId;

                const matchesDifficulty =
                    difficulty === 'all' || question.difficulty === difficulty;

                const matchesStatus =
                    statusFilter === 'all' ||
                    (statusFilter === 'active' && !question.wrongRecord.resolved) ||
                    (statusFilter === 'resolved' && question.wrongRecord.resolved);

                return matchesChapter && matchesDifficulty && matchesStatus;
            });
    }, [records, chapterId, difficulty, statusFilter]);

    const currentQuestion = sessionQuestions[currentIndex];
    const hasSession = sessionQuestions.length > 0;
    const answered = Boolean(selectedOptionId);
    const isCorrect =
        answered && selectedOptionId === currentQuestion?.correctAnswer;

    const startPractice = () => {
        const selected = shuffle(wrongQuestions).map((question) => ({
            ...question,
            options: shuffle(question.options),
        }));

        setSessionQuestions(selected);
        setCurrentIndex(0);
        setSelectedOptionId(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const resetPractice = () => {
        setSessionQuestions([]);
        setCurrentIndex(0);
        setSelectedOptionId(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleAnswer = (optionId) => {
        if (!currentQuestion || selectedOptionId) return;

        setSelectedOptionId(optionId);

        if (optionId === currentQuestion.correctAnswer) {
            markWrongQuestionResolved(currentQuestion.id);
        } else {
            saveWrongQuestionAttempt(currentQuestion, optionId);
        }

        setVersion((value) => value + 1);
    };

    const goNext = () => {
        if (currentIndex + 1 >= sessionQuestions.length) {
            resetPractice();
            setVersion((value) => value + 1);
            return;
        }

        setCurrentIndex((value) => value + 1);
        setSelectedOptionId(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleClearAll = () => {
        const confirmed = window.confirm(
            'Bạn có chắc muốn xóa toàn bộ danh sách câu sai trên trình duyệt này không?'
        );

        if (!confirmed) return;

        clearWrongQuestions();
        resetPractice();
        setVersion((value) => value + 1);
    };

    const handleRemoveQuestion = (questionId) => {
        removeWrongQuestion(questionId);
        setVersion((value) => value + 1);
    };

    const handleReopenQuestion = (questionId) => {
        reopenWrongQuestion(questionId);
        setVersion((value) => value + 1);
    };

    if (hasSession && currentQuestion) {
        return (
            <div className="page page--wide wrong-page">
                <header className="wrong-session-header">
                    <div>
                        <span className="badge badge-school">Luyện lại câu sai</span>
                        <h1 className="page-title">Câu {currentIndex + 1}/{sessionQuestions.length}</h1>
                        <p className="page-desc">
                            Trả lời đúng để chuyển câu này sang trạng thái đã xử lý.
                        </p>
                    </div>

                    <button type="button" className="btn btn-outline" onClick={resetPractice}>
                        Thoát phiên luyện
                    </button>
                </header>

                <section className={`wrong-question-card ${answered ? (isCorrect ? 'is-correct' : 'is-wrong') : ''}`}>
                    <div className="wrong-question-top">
                        <div>
                            <div className="wrong-question-tags">
                                <span>{currentQuestion.chapterLabel}</span>
                                <span>{getDifficultyLabel(currentQuestion.difficulty)}</span>
                                <span>Sai {currentQuestion.wrongRecord?.wrongCount || 1} lần</span>
                            </div>

                            <h2>{currentQuestion.question}</h2>
                        </div>
                    </div>

                    <div className="wrong-options">
                        {currentQuestion.options.map((option, optionIndex) => {
                            const isSelected = selectedOptionId === option.id;
                            const isRightOption =
                                answered && option.id === currentQuestion.correctAnswer;
                            const isWrongSelected =
                                answered && isSelected && option.id !== currentQuestion.correctAnswer;

                            return (
                                <button
                                    key={option.id}
                                    type="button"
                                    className={`wrong-option ${isSelected ? 'is-selected' : ''} ${isRightOption ? 'is-right' : ''
                                        } ${isWrongSelected ? 'is-wrong' : ''}`}
                                    onClick={() => handleAnswer(option.id)}
                                >
                                    <span className="wrong-option-letter">
                                        {String.fromCharCode(65 + optionIndex)}
                                    </span>
                                    <span>{option.text}</span>
                                </button>
                            );
                        })}
                    </div>

                    {answered && (
                        <div className="wrong-feedback">
                            <h3>{isCorrect ? 'Đúng rồi — câu này đã được xử lý' : 'Chưa đúng — hãy đọc kỹ giải thích'}</h3>
                            <p>{currentQuestion.explanation}</p>

                            {currentQuestion.relatedLessonSlug && (
                                <Link
                                    to={`/bai-hoc/${currentQuestion.relatedLessonSlug}`}
                                    className="wrong-related-link"
                                >
                                    Xem lại bài học liên quan
                                </Link>
                            )}
                        </div>
                    )}
                </section>

                <div className="wrong-submit-bar">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={goNext}
                        disabled={!answered}
                    >
                        {currentIndex + 1 >= sessionQuestions.length
                            ? 'Hoàn thành phiên luyện'
                            : 'Câu tiếp theo'}
                    </button>
                </div>

                <WrongQuestionStyle />
            </div>
        );
    }

    return (
        <div className="page page--wide wrong-page">
            <header className="wrong-hero">
                <span className="badge badge-school">Luyện sai để nhớ lâu</span>
                <h1 className="page-title">Luyện lại câu sai</h1>
                <p className="page-desc">
                    Những câu bạn làm sai ở trang ôn thi sẽ được lưu tại đây. Khi trả lời đúng lại,
                    câu đó sẽ được chuyển sang trạng thái đã xử lý.
                </p>

                <div className="wrong-hero-actions">
                    <Link to="/on-thi" className="btn btn-primary">
                        Làm đề ôn thi
                    </Link>
                    <Link to="/bai-hoc" className="btn btn-outline">
                        Xem bài học
                    </Link>
                    <button
                        type="button"
                        className="btn btn-ghost"
                        onClick={handleClearAll}
                        disabled={summary.totalRecords === 0}
                    >
                        Xóa danh sách câu sai
                    </button>
                </div>
            </header>

            <section className="wrong-summary-grid">
                <SummaryCard label="Câu từng sai" value={summary.totalRecords} />
                <SummaryCard label="Đang cần ôn" value={summary.activeCount} />
                <SummaryCard label="Đã xử lý" value={summary.resolvedCount} />
                <SummaryCard label="Tổng lượt sai" value={summary.totalWrongAttempts} />
            </section>

            <section className="wrong-toolbar">
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

                <label>
                    <span>Trạng thái</span>
                    <select
                        value={statusFilter}
                        onChange={(event) => setStatusFilter(event.target.value)}
                    >
                        {STATUS_FILTERS.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                </label>

                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={startPractice}
                    disabled={wrongQuestions.length === 0}
                >
                    Bắt đầu luyện {wrongQuestions.length} câu
                </button>
            </section>

            {wrongQuestions.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon" aria-hidden="true">
                        🎯
                    </div>
                    <p>
                        Chưa có câu sai phù hợp với bộ lọc hiện tại. Hãy làm đề ở trang ôn thi trước.
                    </p>
                    <Link to="/on-thi" className="btn btn-primary btn-sm">
                        Đi tới ôn thi
                    </Link>
                </div>
            ) : (
                <section className="wrong-list">
                    {wrongQuestions.map((question) => (
                        <article key={question.id} className="wrong-list-card">
                            <div className="wrong-list-main">
                                <div className="wrong-question-tags">
                                    <span>{getChapterLabel(question.chapterId)}</span>
                                    <span>{getDifficultyLabel(question.difficulty)}</span>
                                    <span>
                                        {question.wrongRecord.resolved ? 'Đã xử lý' : 'Đang cần ôn'}
                                    </span>
                                </div>

                                <h2>{question.question}</h2>

                                <p>
                                    Sai <strong>{question.wrongRecord.wrongCount}</strong> lần.
                                    Lần sai gần nhất:{' '}
                                    <strong>
                                        {question.wrongRecord.lastWrongAt
                                            ? new Date(question.wrongRecord.lastWrongAt).toLocaleString('vi-VN')
                                            : 'Chưa rõ'}
                                    </strong>
                                </p>
                            </div>

                            <div className="wrong-list-actions">
                                {question.wrongRecord.resolved ? (
                                    <button
                                        type="button"
                                        className="btn btn-outline btn-sm"
                                        onClick={() => handleReopenQuestion(question.id)}
                                    >
                                        Đưa vào ôn lại
                                    </button>
                                ) : (
                                    <Link
                                        to={`/bai-hoc/${question.relatedLessonSlug}`}
                                        className="btn btn-outline btn-sm"
                                    >
                                        Xem bài học
                                    </Link>
                                )}

                                <button
                                    type="button"
                                    className="btn btn-ghost btn-sm"
                                    onClick={() => handleRemoveQuestion(question.id)}
                                >
                                    Xóa
                                </button>
                            </div>
                        </article>
                    ))}
                </section>
            )}

            <WrongQuestionStyle />
        </div>
    );
}

function SummaryCard({ label, value }) {
    return (
        <article className="wrong-summary-card">
            <strong>{value}</strong>
            <span>{label}</span>
        </article>
    );
}

function WrongQuestionStyle() {
    return (
        <style>{`
      .wrong-page {
        padding-bottom: 4rem;
      }

      .wrong-hero,
      .wrong-session-header,
      .wrong-question-card,
      .wrong-toolbar,
      .wrong-summary-card,
      .wrong-list-card {
        background: var(--bg-card);
        border: 1px solid var(--border-light);
        box-shadow: var(--shadow);
      }

      .wrong-hero {
        text-align: center;
        padding: 2.5rem 1.5rem;
        border-radius: var(--radius-2xl);
        background: var(--gradient-hero);
        margin-bottom: 1.5rem;
      }

      .wrong-hero .page-desc {
        margin-left: auto;
        margin-right: auto;
      }

      .wrong-hero-actions {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        flex-wrap: wrap;
        margin-top: 1.25rem;
      }

      .wrong-summary-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1rem;
        margin-bottom: 1.5rem;
      }

      .wrong-summary-card {
        border-radius: var(--radius-lg);
        padding: 1.25rem;
        text-align: center;
      }

      .wrong-summary-card strong {
        display: block;
        font-family: var(--font-serif);
        color: var(--accent);
        font-size: 2rem;
        line-height: 1;
        margin-bottom: 0.4rem;
      }

      .wrong-summary-card span {
        color: var(--text-muted);
        font-size: 0.85rem;
        font-weight: 700;
      }

      .wrong-toolbar {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr)) auto;
        gap: 1rem;
        align-items: end;
        border-radius: var(--radius-lg);
        padding: 1.25rem;
        margin-bottom: 1.5rem;
      }

      .wrong-toolbar label {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }

      .wrong-toolbar label span {
        color: var(--text-light);
        font-size: 0.75rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }

      .wrong-toolbar select {
        min-height: 44px;
        border: 1px solid var(--border);
        background: var(--bg-alt);
        color: var(--text);
        border-radius: var(--radius);
        padding: 0.7rem 0.85rem;
        font: inherit;
        outline: none;
      }

      .wrong-toolbar select:focus {
        border-color: var(--accent);
        box-shadow: 0 0 0 3px rgba(44, 82, 130, 0.12);
      }

      .wrong-list {
        display: grid;
        gap: 1rem;
      }

      .wrong-list-card {
        border-radius: var(--radius-lg);
        padding: 1.25rem;
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 1rem;
        align-items: center;
      }

      .wrong-list-main h2 {
        margin: 0.5rem 0;
        color: var(--text);
        font-family: var(--font-serif);
        font-size: 1.08rem;
        line-height: 1.45;
      }

      .wrong-list-main p {
        margin: 0;
        color: var(--text-muted);
        line-height: 1.55;
      }

      .wrong-list-main strong {
        color: var(--accent);
      }

      .wrong-list-actions {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        justify-content: flex-end;
      }

      .wrong-session-header {
        border-radius: var(--radius-2xl);
        padding: 1.5rem;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        align-items: flex-start;
      }

      .wrong-question-card {
        border-radius: var(--radius-lg);
        padding: 1.5rem;
      }

      .wrong-question-card.is-correct {
        border-color: var(--accent-green);
      }

      .wrong-question-card.is-wrong {
        border-color: #f87171;
      }

      .wrong-question-top {
        margin-bottom: 1rem;
      }

      .wrong-question-top h2 {
        margin: 0.75rem 0 0;
        color: var(--text);
        font-family: var(--font-serif);
        font-size: 1.25rem;
        line-height: 1.45;
      }

      .wrong-question-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
      }

      .wrong-question-tags span {
        border-radius: 999px;
        background: var(--bg-alt);
        border: 1px solid var(--border-light);
        color: var(--text-muted);
        padding: 0.22rem 0.6rem;
        font-size: 0.75rem;
        font-weight: 700;
      }

      .wrong-options {
        display: grid;
        gap: 0.65rem;
      }

      .wrong-option {
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

      .wrong-option:hover,
      .wrong-option.is-selected {
        border-color: var(--accent);
        background: var(--accent-light);
      }

      .wrong-option.is-right {
        border-color: var(--accent-green);
        background: var(--accent-green-light);
      }

      .wrong-option.is-wrong {
        border-color: #f87171;
        background: #fef2f2;
      }

      .wrong-option-letter {
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

      .wrong-feedback {
        margin-top: 1rem;
        border-left: 4px solid var(--accent);
        background: var(--accent-light);
        border-radius: 0 var(--radius) var(--radius) 0;
        padding: 1rem;
      }

      .wrong-feedback h3 {
        margin: 0 0 0.4rem;
        color: var(--accent);
        font-size: 1rem;
      }

      .wrong-feedback p {
        margin: 0;
        color: var(--text-muted);
        line-height: 1.65;
      }

      .wrong-related-link {
        display: inline-flex;
        margin-top: 0.6rem;
        font-weight: 700;
      }

      .wrong-submit-bar {
        position: sticky;
        bottom: 1rem;
        display: flex;
        justify-content: center;
        margin-top: 1.5rem;
        padding: 1rem;
        border-radius: var(--radius-lg);
        background: rgba(255, 255, 255, 0.92);
        border: 1px solid var(--border-light);
        backdrop-filter: blur(10px);
        box-shadow: var(--shadow-md);
      }

      @media (max-width: 920px) {
        .wrong-summary-grid,
        .wrong-toolbar {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .wrong-list-card,
        .wrong-session-header {
          grid-template-columns: 1fr;
          flex-direction: column;
        }

        .wrong-list-actions {
          justify-content: flex-start;
        }
      }

      @media (max-width: 600px) {
        .wrong-summary-grid,
        .wrong-toolbar {
          grid-template-columns: 1fr;
        }

        .wrong-hero {
          padding: 1.75rem 1rem;
        }
      }
    `}</style>
    );
}