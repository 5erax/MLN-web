import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { lessons } from '../data/lessonsData';
import {
    getLearningProgress,
    getLearningSummary,
    resetAllLearningProgress,
} from '../utils/learningProgress';

export default function LearningProgress() {
    const [version, setVersion] = useState(0);

    const progress = useMemo(() => getLearningProgress(), [version]);
    const summary = useMemo(() => getLearningSummary(lessons), [version]);

    const handleReset = () => {
        const confirmed = window.confirm(
            'Bạn có chắc muốn xóa toàn bộ tiến độ học tập trên trình duyệt này không?'
        );

        if (!confirmed) return;

        resetAllLearningProgress();
        setVersion((value) => value + 1);
    };

    return (
        <div className="page page--wide progress-page">
            <header className="progress-hero">
                <span className="badge badge-school">Tiến độ học tập</span>
                <h1 className="page-title">Theo dõi quá trình học Lịch sử Đảng</h1>
                <p className="page-desc">
                    Theo dõi những bài đã học, quiz đã hoàn thành và các nội dung cần ôn lại để
                    bạn biết nên học gì tiếp theo.
                </p>

                <div className="progress-actions">
                    <Link to="/bai-hoc" className="btn btn-primary">
                        Tiếp tục học
                    </Link>
                    <button type="button" className="btn btn-outline" onClick={handleReset}>
                        Xóa tiến độ
                    </button>
                </div>
            </header>

            <section className="progress-summary-grid">
                <SummaryCard label="Tổng bài học" value={summary.totalLessons} />
                <SummaryCard label="Đã đọc" value={summary.readLessons} />
                <SummaryCard label="Quiz đã làm" value={summary.completedQuizzes} />
                <SummaryCard label="Quiz đã đạt" value={summary.passedQuizzes} />
                <SummaryCard label="Cần ôn lại" value={summary.needsReview} />
            </section>

            <section className="progress-meter-card">
                <div className="progress-meter-top">
                    <h2>Tiến độ hoàn thành bài học</h2>
                    <strong>{summary.completionPercentage}%</strong>
                </div>
                <div className="progress-meter">
                    <div
                        className="progress-meter-fill"
                        style={{ width: `${summary.completionPercentage}%` }}
                    />
                </div>
            </section>

            <section className="progress-lessons">
                <div className="progress-section-heading">
                    <h2>Chi tiết từng bài</h2>
                    <p>
                        Bài chưa đạt quiz sẽ được gợi ý ôn lại để tránh học qua loa nhưng không nắm chắc kiến thức.
                    </p>
                </div>

                <div className="progress-lesson-list">
                    {lessons.map((lesson) => {
                        const item = progress[lesson.slug] || {};
                        const status = getStatus(item);

                        return (
                            <article key={lesson.slug} className="progress-lesson-card">
                                <div className="progress-lesson-main">
                                    <span className={`progress-status ${status.className}`}>
                                        {status.label}
                                    </span>
                                    <h3>{lesson.title}</h3>
                                    <p>{lesson.description}</p>

                                    <div className="progress-lesson-meta">
                                        <span>{lesson.sections.length} phần học</span>
                                        <span>
                                            Điểm cao nhất:{' '}
                                            <strong>
                                                {item.bestPercentage ? `${item.bestPercentage}%` : 'Chưa có'}
                                            </strong>
                                        </span>
                                    </div>
                                </div>

                                <div className="progress-lesson-actions">
                                    <Link to={`/bai-hoc/${lesson.slug}`} className="btn btn-outline btn-sm">
                                        Đọc bài
                                    </Link>
                                    <Link to={`/bai-hoc/${lesson.slug}/quiz`} className="btn btn-primary btn-sm">
                                        Làm quiz
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <style>{`
        .progress-page {
          padding-bottom: 4rem;
        }

        .progress-hero {
          text-align: center;
          margin-bottom: 2rem;
          padding: 2.5rem 1.5rem;
          border-radius: var(--radius-2xl);
          background: var(--gradient-hero);
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow);
        }

        .progress-hero .page-desc {
          margin-left: auto;
          margin-right: auto;
        }

        .progress-actions {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1.25rem;
        }

        .progress-summary-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .progress-summary-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          box-shadow: var(--shadow-xs);
          text-align: center;
        }

        .progress-summary-card strong {
          display: block;
          font-family: var(--font-serif);
          font-size: 2rem;
          color: var(--accent);
          line-height: 1;
          margin-bottom: 0.4rem;
        }

        .progress-summary-card span {
          color: var(--text-muted);
          font-size: 0.86rem;
          font-weight: 600;
        }

        .progress-meter-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          box-shadow: var(--shadow-xs);
          margin-bottom: 2rem;
        }

        .progress-meter-top {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .progress-meter-top h2 {
          margin: 0;
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--text);
        }

        .progress-meter-top strong {
          color: var(--accent);
          font-size: 1.1rem;
        }

        .progress-meter {
          height: 10px;
          border-radius: 999px;
          background: var(--border-light);
          overflow: hidden;
        }

        .progress-meter-fill {
          height: 100%;
          background: var(--gradient-accent);
          border-radius: 999px;
          transition: width 0.4s ease;
        }

        .progress-section-heading {
          margin-bottom: 1rem;
        }

        .progress-section-heading h2 {
          margin: 0 0 0.35rem;
          color: var(--text);
          font-family: var(--font-serif);
          font-size: 1.45rem;
        }

        .progress-section-heading p {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .progress-lesson-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .progress-lesson-card {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          align-items: center;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          box-shadow: var(--shadow-xs);
        }

        .progress-status {
          display: inline-flex;
          width: fit-content;
          border-radius: 999px;
          padding: 0.22rem 0.65rem;
          font-size: 0.74rem;
          font-weight: 700;
          margin-bottom: 0.55rem;
        }

        .progress-status--passed {
          background: var(--accent-green-light);
          color: var(--accent-green);
        }

        .progress-status--review {
          background: #fef2f2;
          color: #b91c1c;
        }

        .progress-status--read {
          background: var(--accent-light);
          color: var(--accent);
        }

        .progress-status--new {
          background: var(--bg-alt);
          color: var(--text-light);
        }

        .progress-lesson-main h3 {
          margin: 0 0 0.4rem;
          color: var(--text);
          font-family: var(--font-serif);
          font-size: 1.15rem;
        }

        .progress-lesson-main p {
          margin: 0 0 0.75rem;
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 0.92rem;
        }

        .progress-lesson-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          color: var(--text-light);
          font-size: 0.85rem;
        }

        .progress-lesson-meta strong {
          color: var(--accent);
        }

        .progress-lesson-actions {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        @media (max-width: 900px) {
          .progress-summary-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .progress-lesson-card {
            grid-template-columns: 1fr;
          }

          .progress-lesson-actions {
            justify-content: flex-start;
          }
        }

        @media (max-width: 560px) {
          .progress-summary-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
}

function SummaryCard({ label, value }) {
    return (
        <article className="progress-summary-card">
            <strong>{value}</strong>
            <span>{label}</span>
        </article>
    );
}

function getStatus(progress) {
    if (progress.passed) {
        return {
            label: 'Đã đạt quiz',
            className: 'progress-status--passed',
        };
    }

    if (progress.needsReview) {
        return {
            label: 'Cần ôn lại',
            className: 'progress-status--review',
        };
    }

    if (progress.read) {
        return {
            label: 'Đã đọc',
            className: 'progress-status--read',
        };
    }

    return {
        label: 'Chưa học',
        className: 'progress-status--new',
    };
}