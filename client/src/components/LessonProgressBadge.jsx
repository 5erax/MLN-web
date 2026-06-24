import { getLessonProgress } from '../utils/learningProgress';

export default function LessonProgressBadge({ slug }) {
  const progress = getLessonProgress(slug);

  if (progress.passed) {
    return (
      <span className="lesson-progress-badge lesson-progress-badge--passed">
        Đã đạt quiz
      </span>
    );
  }

  if (progress.needsReview) {
    return (
      <span className="lesson-progress-badge lesson-progress-badge--review">
        Cần ôn lại
      </span>
    );
  }

  if (progress.read) {
    return (
      <span className="lesson-progress-badge lesson-progress-badge--read">
        Đã đọc
      </span>
    );
  }

  return (
    <span className="lesson-progress-badge lesson-progress-badge--new">
      Chưa học
    </span>
  );
}

export const lessonProgressBadgeStyle = `
  .lesson-progress-badge {
    display: inline-flex;
    width: fit-content;
    align-items: center;
    border-radius: 999px;
    padding: 0.22rem 0.65rem;
    font-size: 0.74rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .lesson-progress-badge--passed {
    background: var(--accent-green-light);
    color: var(--accent-green);
  }

  .lesson-progress-badge--review {
    background: #fef2f2;
    color: #b91c1c;
  }

  .lesson-progress-badge--read {
    background: var(--accent-light);
    color: var(--accent);
  }

  .lesson-progress-badge--new {
    background: var(--bg-alt);
    color: var(--text-light);
  }
`;