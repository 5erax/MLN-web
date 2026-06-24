import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { lessons, lessonQuizzes } from '../data/lessonsData';
import LessonProgressBadge, {
  lessonProgressBadgeStyle,
} from '../components/LessonProgressBadge';
import {
  getLearningProgress,
  getLearningSummary,
} from '../utils/learningProgress';

const PERIOD_FILTERS = [
  { id: 'all', label: 'Tất cả giai đoạn' },
  { id: '1930-1945', label: '1930-1945' },
  { id: '1945-1975', label: '1945-1975' },
  { id: '1975-now', label: '1975 đến nay' },
];

const STATUS_FILTERS = [
  { id: 'all', label: 'Tất cả trạng thái' },
  { id: 'new', label: 'Chưa học' },
  { id: 'read', label: 'Đã đọc' },
  { id: 'passed', label: 'Đã đạt quiz' },
  { id: 'review', label: 'Cần ôn lại' },
];

export default function Lessons() {
  const [keyword, setKeyword] = useState('');
  const [periodFilter, setPeriodFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const progress = getLearningProgress();
  const summary = getLearningSummary(lessons);

  const lessonsWithMeta = useMemo(() => {
    return lessons.map((lesson) => {
      const lessonProgress = progress[lesson.slug] || {};
      const period = getLessonPeriod(lesson);
      const status = getLessonStatus(lessonProgress);
      const hasQuiz = Boolean(lessonQuizzes[lesson.slug]);

      return {
        ...lesson,
        period,
        status,
        hasQuiz,
        progress: lessonProgress,
      };
    });
  }, [progress]);

  const filteredLessons = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase();

    return lessonsWithMeta.filter((lesson) => {
      const searchableText = [
        lesson.title,
        lesson.subtitle,
        lesson.description,
        lesson.category,
        lesson.period.label,
        lesson.slug,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      const matchesKeyword =
        !normalizedKeyword || searchableText.includes(normalizedKeyword);

      const matchesPeriod =
        periodFilter === 'all' || lesson.period.id === periodFilter;

      const matchesStatus =
        statusFilter === 'all' || lesson.status.id === statusFilter;

      return matchesKeyword && matchesPeriod && matchesStatus;
    });
  }, [keyword, periodFilter, statusFilter, lessonsWithMeta]);

  const clearFilters = () => {
    setKeyword('');
    setPeriodFilter('all');
    setStatusFilter('all');
  };

  return (
    <div className="page page--wide lessons-page">
      <section className="lessons-hero stagger-1">
        <div className="lessons-hero-content">
          <span className="badge badge-school">Lộ trình học tập</span>
          <h1 className="page-title">Bài học Lịch sử Đảng</h1>
          <p className="page-desc">
            Học theo tiến trình lịch sử, nắm vững bối cảnh, đường lối, văn kiện,
            sự kiện trọng tâm và tự kiểm tra bằng quiz theo từng bài.
          </p>

          <div className="lessons-hero-actions">
            <Link to="/tien-do" className="btn btn-primary">
              Xem tiến độ
            </Link>
            <Link to="/tro-choi-on-tap" className="btn btn-outline">
              Ôn tập tương tác
            </Link>
            <Link to="/on-thi" className="btn btn-outline">
              Luyện đề ôn thi
            </Link>
            <Link to="/nguon-hoc-lieu" className="btn btn-ghost">
              Nguồn học liệu
            </Link>
          </div>
        </div>

        <div className="lessons-hero-panel" aria-label="Tổng quan tiến độ">
          <SummaryItem label="Tổng bài" value={summary.totalLessons} />
          <SummaryItem label="Đã đọc" value={summary.readLessons} />
          <SummaryItem label="Quiz đã đạt" value={summary.passedQuizzes} />
          <SummaryItem label="Cần ôn" value={summary.needsReview} />
        </div>
      </section>

      <section className="lessons-progress-overview stagger-2">
        <div className="lessons-progress-top">
          <div>
            <h2>Mức hoàn thành bài đọc</h2>
            <p>
              Dữ liệu được lưu trên trình duyệt bằng localStorage, phù hợp cho bản frontend
              không cần đăng nhập.
            </p>
          </div>
          <strong>{summary.completionPercentage}%</strong>
        </div>

        <div className="lessons-progress-bar">
          <div
            className="lessons-progress-fill"
            style={{ width: `${summary.completionPercentage}%` }}
          />
        </div>
      </section>

      <section className="lessons-toolbar stagger-3">
        <label className="lessons-search">
          <span>Tìm bài học</span>
          <input
            type="search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="Ví dụ: Cương lĩnh, Cách mạng Tháng Tám, đổi mới..."
          />
        </label>

        <div className="lessons-filter-group">
          <label>
            <span>Giai đoạn</span>
            <select
              value={periodFilter}
              onChange={(event) => setPeriodFilter(event.target.value)}
            >
              {PERIOD_FILTERS.map((item) => (
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
        </div>
      </section>

      <section className="lessons-result-heading stagger-4">
        <div>
          <h2>Danh sách bài học</h2>
          <p>
            Hiển thị <strong>{filteredLessons.length}</strong>/{lessons.length} bài học.
          </p>
        </div>

        {(keyword || periodFilter !== 'all' || statusFilter !== 'all') && (
          <button type="button" className="btn btn-outline btn-sm" onClick={clearFilters}>
            Xóa bộ lọc
          </button>
        )}
      </section>

      {filteredLessons.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon" aria-hidden="true">
            📚
          </div>
          <p>Không tìm thấy bài học phù hợp với bộ lọc hiện tại.</p>
          <button type="button" className="btn btn-primary btn-sm" onClick={clearFilters}>
            Xem tất cả bài học
          </button>
        </div>
      ) : (
        <div className="lessons-grid">
          {filteredLessons.map((lesson, index) => (
            <article
              key={lesson.id}
              className={`lesson-card card stagger-${(index % 6) + 1}`}
            >
              <Link to={`/bai-hoc/${lesson.slug}`} className="lesson-card-main">
                <div className="lesson-card-icon" aria-hidden="true">
                  {lesson.icon}
                </div>

                <div className="lesson-card-body">
                  <div className="lesson-card-badges">
                    <span className="badge badge-school">{lesson.category}</span>
                    <span className="lesson-period-badge">{lesson.period.label}</span>
                    <LessonProgressBadge slug={lesson.slug} />
                  </div>

                  <h3 className="lesson-card-title">{lesson.title}</h3>

                  {lesson.subtitle && (
                    <p className="lesson-card-subtitle">{lesson.subtitle}</p>
                  )}

                  <p className="lesson-card-desc">{lesson.description}</p>

                  <div className="lesson-card-meta">
                    <span>{lesson.sections.length} phần học</span>
                    <span>{lesson.hasQuiz ? 'Có quiz theo bài' : 'Chưa có quiz'}</span>
                    {lesson.progress?.bestPercentage ? (
                      <span>Điểm cao nhất: {lesson.progress.bestPercentage}%</span>
                    ) : (
                      <span>Chưa có điểm quiz</span>
                    )}
                  </div>
                </div>
              </Link>

              <div className="lesson-card-actions">
                <Link to={`/bai-hoc/${lesson.slug}`} className="btn btn-outline btn-sm">
                  Đọc bài
                </Link>

                {lesson.hasQuiz && (
                  <Link
                    to={`/bai-hoc/${lesson.slug}/quiz`}
                    className="btn btn-primary btn-sm"
                  >
                    Làm quiz
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      <style>{`
        .lessons-page {
          padding-bottom: 4rem;
        }

        .lessons-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.8fr);
          gap: 1.5rem;
          align-items: stretch;
          margin-bottom: 1.5rem;
        }

        .lessons-hero-content,
        .lessons-hero-panel,
        .lessons-progress-overview,
        .lessons-toolbar {
          border: 1px solid var(--border-light);
          border-radius: var(--radius-2xl);
          background: var(--bg-card);
          box-shadow: var(--shadow);
        }

        .lessons-hero-content {
          padding: 2rem;
          background: var(--gradient-hero);
        }

        .lessons-hero-content .page-desc {
          margin-bottom: 0;
        }

        .lessons-hero-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1.25rem;
        }

        .lessons-hero-panel {
          padding: 1.25rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
        }

        .lessons-summary-item {
          background: var(--bg-alt);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1rem;
          text-align: center;
        }

        .lessons-summary-item strong {
          display: block;
          font-family: var(--font-serif);
          color: var(--accent);
          font-size: 1.8rem;
          line-height: 1;
          margin-bottom: 0.35rem;
        }

        .lessons-summary-item span {
          color: var(--text-muted);
          font-size: 0.82rem;
          font-weight: 700;
        }

        .lessons-progress-overview {
          padding: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .lessons-progress-top {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;
          margin-bottom: 0.85rem;
        }

        .lessons-progress-top h2 {
          margin: 0 0 0.35rem;
          color: var(--text);
          font-family: var(--font-serif);
          font-size: 1.2rem;
        }

        .lessons-progress-top p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .lessons-progress-top strong {
          color: var(--accent);
          font-size: 1.25rem;
          white-space: nowrap;
        }

        .lessons-progress-bar {
          height: 10px;
          background: var(--border-light);
          border-radius: 999px;
          overflow: hidden;
        }

        .lessons-progress-fill {
          height: 100%;
          background: var(--gradient-accent);
          border-radius: 999px;
          transition: width 0.4s ease;
        }

        .lessons-toolbar {
          padding: 1.25rem;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 1rem;
          align-items: end;
          margin-bottom: 1.5rem;
        }

        .lessons-search,
        .lessons-filter-group label {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .lessons-search span,
        .lessons-filter-group span {
          color: var(--text-light);
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .lessons-search input,
        .lessons-filter-group select {
          min-height: 44px;
          border: 1px solid var(--border);
          background: var(--bg-alt);
          color: var(--text);
          border-radius: var(--radius);
          padding: 0.7rem 0.85rem;
          font: inherit;
          outline: none;
          transition: border-color var(--transition), box-shadow var(--transition);
        }

        .lessons-search input:focus,
        .lessons-filter-group select:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(44, 82, 130, 0.12);
        }

        .lessons-filter-group {
          display: grid;
          grid-template-columns: 170px 170px;
          gap: 0.75rem;
        }

        .lessons-result-heading {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;
          margin-bottom: 1rem;
        }

        .lessons-result-heading h2 {
          margin: 0 0 0.25rem;
          font-family: var(--font-serif);
          color: var(--text);
          font-size: 1.35rem;
        }

        .lessons-result-heading p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.92rem;
        }

        .lessons-result-heading strong {
          color: var(--accent);
        }

        .lessons-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        .lesson-card {
          padding: 0;
          overflow: hidden;
        }

        .lesson-card-main {
          display: flex;
          gap: 1.25rem;
          padding: 1.5rem;
          text-decoration: none;
          color: inherit;
        }

        .lesson-card-main:hover {
          text-decoration: none;
        }

        .lesson-card-icon {
          font-size: 2.2rem;
          flex-shrink: 0;
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-light);
          border-radius: var(--radius);
        }

        .lesson-card-body {
          flex: 1;
          min-width: 0;
        }

        .lesson-card-badges {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          flex-wrap: wrap;
          margin-bottom: 0.55rem;
        }

        .lesson-period-badge {
          display: inline-flex;
          width: fit-content;
          align-items: center;
          border-radius: 999px;
          padding: 0.22rem 0.65rem;
          font-size: 0.74rem;
          font-weight: 700;
          background: var(--accent-gold-light);
          color: var(--accent-gold);
        }

        .lesson-card-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 0.35rem;
          color: var(--text);
          line-height: 1.3;
        }

        .lesson-card-subtitle {
          margin: 0 0 0.45rem;
          color: var(--accent);
          font-size: 0.9rem;
          font-weight: 700;
        }

        .lesson-card-desc {
          color: var(--text-muted);
          font-size: 0.94rem;
          line-height: 1.6;
          margin: 0 0 0.9rem;
        }

        .lesson-card-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .lesson-card-meta span {
          color: var(--text-light);
          background: var(--bg-alt);
          border: 1px solid var(--border-light);
          border-radius: 999px;
          padding: 0.22rem 0.6rem;
          font-size: 0.78rem;
          font-weight: 600;
        }

        .lesson-card-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.6rem;
          flex-wrap: wrap;
          padding: 1rem 1.5rem;
          border-top: 1px solid var(--border-light);
          background: var(--bg-alt);
        }

        ${lessonProgressBadgeStyle}

        @media (max-width: 900px) {
          .lessons-hero {
            grid-template-columns: 1fr;
          }

          .lessons-toolbar {
            grid-template-columns: 1fr;
          }

          .lessons-filter-group {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .lessons-hero-content {
            padding: 1.4rem;
          }

          .lessons-hero-panel,
          .lessons-filter-group {
            grid-template-columns: 1fr;
          }

          .lessons-progress-top,
          .lessons-result-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .lesson-card-main {
            flex-direction: column;
            gap: 1rem;
          }

          .lesson-card-icon {
            width: 50px;
            height: 50px;
            font-size: 1.8rem;
          }

          .lesson-card-actions {
            justify-content: flex-start;
          }
        }
      `}</style>
    </div>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div className="lessons-summary-item">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function getLessonPeriod(lesson) {
  const text = [
    lesson.title,
    lesson.subtitle,
    lesson.description,
    lesson.slug,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  if (
    text.includes('1930') ||
    text.includes('1945') ||
    text.includes('cách mạng tháng tám') ||
    text.includes('cuong-linh') ||
    text.includes('dang-ra-doi')
  ) {
    if (!text.includes('1954') && !text.includes('1975')) {
      return {
        id: '1930-1945',
        label: '1930-1945',
      };
    }
  }

  if (
    text.includes('1951') ||
    text.includes('1954') ||
    text.includes('kháng chiến') ||
    text.includes('chống pháp') ||
    text.includes('1945-1975')
  ) {
    return {
      id: '1945-1975',
      label: '1945-1975',
    };
  }

  if (
    text.includes('1986') ||
    text.includes('đổi mới') ||
    text.includes('doi-moi') ||
    text.includes('1975')
  ) {
    return {
      id: '1975-now',
      label: '1975 đến nay',
    };
  }

  return {
    id: 'all',
    label: 'Khác',
  };
}

function getLessonStatus(progress = {}) {
  if (progress.passed) {
    return {
      id: 'passed',
      label: 'Đã đạt quiz',
    };
  }

  if (progress.needsReview) {
    return {
      id: 'review',
      label: 'Cần ôn lại',
    };
  }

  if (progress.read) {
    return {
      id: 'read',
      label: 'Đã đọc',
    };
  }

  return {
    id: 'new',
    label: 'Chưa học',
  };
}