import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { user as userApi, auth } from '../api';
import { lessons } from '../data/lessonsData';
import { examQuestionBank, examBankStats } from '../data/examQuestionBank';
import {
  getLearningProgress,
  getLearningSummary,
} from '../utils/learningProgress';
import { getWrongQuestionSummary } from '../utils/wrongQuestionStore';

function formatDate(value) {
  if (!value) return '--';

  try {
    return new Date(value).toLocaleDateString('vi-VN');
  } catch {
    return '--';
  }
}

function getLessonStatus(lesson, progress) {
  const item = progress[lesson.slug];

  if (!item) return 'Chưa học';
  if (item.passed) return 'Đã hoàn thành';
  if (item.quizCompleted && item.needsReview) return 'Cần ôn lại';
  if (item.read) return 'Đã đọc';

  return 'Đang học';
}

function getLessonStatusClass(lesson, progress) {
  const item = progress[lesson.slug];

  if (!item) return 'not-started';
  if (item.passed) return 'done';
  if (item.quizCompleted && item.needsReview) return 'review';
  if (item.read) return 'reading';

  return 'reading';
}

function getRecentLessons(progress) {
  return lessons
    .map((lesson) => {
      const item = progress[lesson.slug];

      return {
        ...lesson,
        progress: item || null,
        lastActivityAt: item?.lastQuizAt || item?.readAt || null,
      };
    })
    .filter((lesson) => lesson.lastActivityAt)
    .sort(
      (a, b) =>
        new Date(b.lastActivityAt).getTime() -
        new Date(a.lastActivityAt).getTime()
    )
    .slice(0, 3);
}

function getNextLesson(progress) {
  const reviewLesson = lessons.find((lesson) => progress[lesson.slug]?.needsReview);

  if (reviewLesson) {
    return {
      ...reviewLesson,
      reason: 'Bài này đang cần ôn lại vì kết quả quiz chưa đạt.',
      cta: 'Ôn lại bài',
      to: `/bai-hoc/${reviewLesson.slug}`,
      tone: 'review',
    };
  }

  const unreadLesson = lessons.find((lesson) => !progress[lesson.slug]?.read);

  if (unreadLesson) {
    return {
      ...unreadLesson,
      reason: 'Đây là bài tiếp theo bạn nên học để hoàn thiện lộ trình.',
      cta: 'Bắt đầu học',
      to: `/bai-hoc/${unreadLesson.slug}`,
      tone: 'next',
    };
  }

  return {
    title: 'Bạn đã đọc toàn bộ bài học hiện có',
    description:
      'Hãy chuyển sang luyện đề tổng hợp hoặc ôn lại các câu sai để củng cố kiến thức.',
    reason: 'Lộ trình bài học đã hoàn tất.',
    cta: 'Luyện đề ôn thi',
    to: '/on-thi',
    tone: 'done',
  };
}

function getStudyAdvice(summary, wrongSummary) {
  if (wrongSummary.activeCount > 0) {
    return {
      title: 'Ưu tiên hôm nay: luyện lại câu sai',
      desc: `Bạn còn ${wrongSummary.activeCount} câu sai chưa xử lý. Nên luyện lại trước khi làm đề mới.`,
      to: '/on-lai-cau-sai',
      cta: 'Luyện câu sai',
      icon: '🎯',
    };
  }

  if (summary.completionPercentage < 50) {
    return {
      title: 'Ưu tiên hôm nay: học thêm bài mới',
      desc: 'Bạn mới hoàn thành dưới 50% lộ trình đọc bài. Nên học thêm ít nhất một bài trước khi luyện đề.',
      to: '/bai-hoc',
      cta: 'Học bài',
      icon: '📖',
    };
  }

  if (summary.completedQuizzes < summary.totalLessons) {
    return {
      title: 'Ưu tiên hôm nay: làm quiz cuối bài',
      desc: 'Bạn đã đọc một số bài nhưng chưa hoàn tất toàn bộ quiz. Hãy kiểm tra lại mức độ ghi nhớ.',
      to: '/tien-do',
      cta: 'Xem tiến độ',
      icon: '✅',
    };
  }

  return {
    title: 'Ưu tiên hôm nay: luyện đề tổng hợp',
    desc: 'Bạn đã có nền tảng tốt. Hãy luyện đề để kiểm tra khả năng tổng hợp kiến thức.',
    to: '/on-thi',
    cta: 'Luyện đề',
    icon: '📝',
  };
}

export default function Dashboard({ user }) {
  const [profile, setProfile] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [localProgress, setLocalProgress] = useState({});

  useEffect(() => {
    setLocalProgress(getLearningProgress());
  }, []);

  useEffect(() => {
    if (!user) return;

    setLoadingProfile(true);

    userApi
      .profile()
      .then((p) => {
        setProfile(p);
        setLoadingProfile(false);
      })
      .catch(() => setLoadingProfile(false));
  }, [user]);

  const learningSummary = useMemo(() => {
    return getLearningSummary(lessons);
  }, [localProgress]);

  const wrongSummary = useMemo(() => {
    return getWrongQuestionSummary(examQuestionBank);
  }, [localProgress]);

  const nextLesson = useMemo(() => {
    return getNextLesson(localProgress);
  }, [localProgress]);

  const recentLessons = useMemo(() => {
    return getRecentLessons(localProgress);
  }, [localProgress]);

  const studyAdvice = useMemo(() => {
    return getStudyAdvice(learningSummary, wrongSummary);
  }, [learningSummary, wrongSummary]);

  const chapterStats = examBankStats.byChapter || {};
  const difficultyStats = examBankStats.byDifficulty || {};

  if (!user) {
    return (
      <div className="page page--narrow">
        <div className="dash-login-prompt">
          <div className="dash-login-icon" aria-hidden="true">
            🔐
          </div>

          <h2>Đăng nhập để mở Dashboard học tập</h2>

          <p>
            Dashboard giúp bạn theo dõi tiến độ học, câu sai, bài cần ôn lại và
            gợi ý lộ trình học tiếp.
          </p>

          <a href={auth.loginUrl()} className="btn btn-primary">
            Đăng nhập bằng Google
          </a>

          <div className="dash-login-preview">
            <Link to="/bai-hoc">Xem bài học</Link>
            <Link to="/on-thi">Luyện đề</Link>
            <Link to="/nguon-hoc-lieu">Nguồn học liệu</Link>
          </div>
        </div>

        <style>{dashboardStyles}</style>
      </div>
    );
  }

  return (
    <div className="page page--wide dash-page">
      <header className="dash-hero">
        <div className="dash-profile-mini">
          <img
            src={user.avatar || '/avatar.svg'}
            alt={user.name || 'Người dùng'}
            className="dash-avatar"
          />

          <div>
            <span className="dash-kicker">Dashboard học tập</span>
            <h1>Xin chào, {user.name || 'bạn'}!</h1>

            <p>
              Theo dõi tiến độ học, câu sai cần luyện lại và gợi ý nội dung nên
              học tiếp hôm nay.
            </p>

            {profile?.email && <span className="dash-email">{profile.email}</span>}
          </div>
        </div>

        <div className="dash-hero-actions">
          <Link to="/bai-hoc" className="btn btn-primary">
            Học bài
          </Link>
          <Link to="/on-thi" className="btn btn-outline">
            Luyện đề
          </Link>
        </div>
      </header>

      {loadingProfile && (
        <div className="dash-small-loading">
          <div className="loading-spinner" aria-label="Đang tải" />
          <span>Đang đồng bộ thông tin tài khoản...</span>
        </div>
      )}

      <section className="dash-stat-grid">
        <StatCard
          icon="📖"
          label="Đã đọc bài"
          value={`${learningSummary.readLessons}/${learningSummary.totalLessons}`}
          desc={`${learningSummary.completionPercentage}% lộ trình đọc`}
        />

        <StatCard
          icon="✅"
          label="Quiz đã làm"
          value={`${learningSummary.completedQuizzes}/${learningSummary.totalLessons}`}
          desc={`${learningSummary.passedQuizzes} bài đã đạt`}
        />

        <StatCard
          icon="🎯"
          label="Câu sai cần ôn"
          value={wrongSummary.activeCount}
          desc={`${wrongSummary.resolvedCount} câu đã xử lý`}
          tone={wrongSummary.activeCount > 0 ? 'warning' : 'success'}
        />

        <StatCard
          icon="📝"
          label="Ngân hàng câu hỏi"
          value={examBankStats.total}
          desc="Câu luyện đề tổng hợp"
        />
      </section>

      <section className="dash-main-grid">
        <article className={`dash-next-card ${nextLesson.tone || ''}`}>
          <div className="dash-card-heading">
            <span className="dash-card-icon">
              {nextLesson.tone === 'review'
                ? '🔁'
                : nextLesson.tone === 'done'
                  ? '🏁'
                  : '📌'}
            </span>

            <div>
              <span className="dash-kicker">Gợi ý học tiếp</span>
              <h2>{nextLesson.title}</h2>
            </div>
          </div>

          {nextLesson.subtitle && (
            <p className="dash-next-subtitle">{nextLesson.subtitle}</p>
          )}

          <p className="dash-next-desc">
            {nextLesson.reason || nextLesson.description}
          </p>

          <div className="dash-next-actions">
            <Link to={nextLesson.to} className="btn btn-primary btn-sm">
              {nextLesson.cta}
            </Link>

            <Link to="/tien-do" className="btn btn-outline btn-sm">
              Xem tiến độ
            </Link>
          </div>
        </article>

        <article className="dash-advice-card">
          <div className="dash-card-heading">
            <span className="dash-card-icon">{studyAdvice.icon}</span>

            <div>
              <span className="dash-kicker">Kế hoạch hôm nay</span>
              <h2>{studyAdvice.title}</h2>
            </div>
          </div>

          <p>{studyAdvice.desc}</p>

          <Link to={studyAdvice.to} className="btn btn-outline btn-sm">
            {studyAdvice.cta}
          </Link>
        </article>
      </section>

      <section className="dash-section-grid">
        <article className="dash-panel">
          <div className="dash-panel-header">
            <div>
              <span className="dash-kicker">Tiến độ bài học</span>
              <h2>Lộ trình hiện tại</h2>
            </div>

            <Link to="/tien-do" className="dash-panel-link">
              Xem tất cả →
            </Link>
          </div>

          <div className="dash-progress-bar">
            <span style={{ width: `${learningSummary.completionPercentage}%` }} />
          </div>

          <div className="dash-lesson-list">
            {lessons.slice(0, 5).map((lesson) => (
              <Link
                key={lesson.slug}
                to={`/bai-hoc/${lesson.slug}`}
                className="dash-lesson-row"
              >
                <div className="dash-lesson-icon" aria-hidden="true">
                  {lesson.icon || '📖'}
                </div>

                <div className="dash-lesson-body">
                  <h3>{lesson.title}</h3>
                  <span
                    className={`dash-status ${getLessonStatusClass(
                      lesson,
                      localProgress
                    )}`}
                  >
                    {getLessonStatus(lesson, localProgress)}
                  </span>
                </div>

                <span className="dash-row-arrow">→</span>
              </Link>
            ))}
          </div>
        </article>

        <article className="dash-panel">
          <div className="dash-panel-header">
            <div>
              <span className="dash-kicker">Ôn thi</span>
              <h2>Tình trạng luyện tập</h2>
            </div>

            <Link to="/on-thi" className="dash-panel-link">
              Làm đề →
            </Link>
          </div>

          <div className="dash-exam-breakdown">
            <MiniStat label="1930-1945" value={chapterStats['1930-1945'] || 0} />
            <MiniStat label="1945-1975" value={chapterStats['1945-1975'] || 0} />
            <MiniStat label="Từ 1975" value={chapterStats['1975-now'] || 0} />
          </div>

          <div className="dash-difficulty-list">
            <DifficultyRow
              label="Dễ"
              value={difficultyStats.easy || 0}
              total={examBankStats.total}
            />
            <DifficultyRow
              label="Trung bình"
              value={difficultyStats.medium || 0}
              total={examBankStats.total}
            />
            <DifficultyRow
              label="Khó"
              value={difficultyStats.hard || 0}
              total={examBankStats.total}
            />
          </div>

          <div className="dash-wrong-box">
            <div>
              <strong>{wrongSummary.activeCount}</strong>
              <span>Câu sai chưa xử lý</span>
            </div>

            <Link to="/on-lai-cau-sai" className="btn btn-primary btn-sm">
              Luyện lại
            </Link>
          </div>
        </article>
      </section>

      <section className="dash-section-grid">
        <article className="dash-panel">
          <div className="dash-panel-header">
            <div>
              <span className="dash-kicker">Hoạt động gần đây</span>
              <h2>Bài đã học gần nhất</h2>
            </div>
          </div>

          {recentLessons.length === 0 ? (
            <div className="dash-empty-box">
              <p>Bạn chưa có hoạt động học nào được lưu.</p>
              <Link to="/bai-hoc" className="btn btn-outline btn-sm">
                Bắt đầu học
              </Link>
            </div>
          ) : (
            <div className="dash-recent-list">
              {recentLessons.map((lesson) => (
                <Link
                  key={lesson.slug}
                  to={`/bai-hoc/${lesson.slug}`}
                  className="dash-recent-item"
                >
                  <div>
                    <h3>{lesson.title}</h3>
                    <span>
                      Hoạt động gần nhất: {formatDate(lesson.lastActivityAt)}
                    </span>
                  </div>

                  <span className="dash-row-arrow">→</span>
                </Link>
              ))}
            </div>
          )}
        </article>

        <article className="dash-panel">
          <div className="dash-panel-header">
            <div>
              <span className="dash-kicker">Truy cập nhanh</span>
              <h2>Công cụ học tập</h2>
            </div>
          </div>

          <div className="dash-action-grid">
            <QuickAction
              to="/bai-hoc"
              icon="📖"
              title="Bài học"
              desc="Học theo tiến trình"
            />
            <QuickAction
              to="/on-thi"
              icon="📝"
              title="Ôn thi"
              desc="Làm đề tổng hợp"
            />
            <QuickAction
              to="/on-lai-cau-sai"
              icon="🎯"
              title="Câu sai"
              desc="Luyện lại điểm yếu"
            />
            <QuickAction
              to="/tro-choi-on-tap"
              icon="🎮"
              title="Ôn tập"
              desc="Flashcard và trò chơi"
            />
            <QuickAction
              to="/triet-gia"
              icon="👤"
              title="Nhân vật"
              desc="Tra cứu nhân vật"
            />
            <QuickAction
              to="/nguon-hoc-lieu"
              icon="📚"
              title="Nguồn học liệu"
              desc="Đối chiếu tài liệu"
            />
          </div>
        </article>
      </section>

      <section className="dash-account-strip">
        <div>
          <span className="dash-kicker">Tài khoản</span>
          <h2>Thông tin sử dụng</h2>
        </div>

        <div className="dash-account-stats">
          <MiniStat label="Lần truy cập" value={profile?.visitCount ?? 0} />
          <MiniStat label="Phiên hoạt động" value={profile?.sessionCount ?? 0} />
          <MiniStat
            label="Đăng nhập gần nhất"
            value={formatDate(profile?.lastLoginAt)}
          />
        </div>
      </section>

      <style>{dashboardStyles}</style>
    </div>
  );
}

function StatCard({ icon, label, value, desc, tone = '' }) {
  return (
    <article className={`dash-stat-card ${tone}`}>
      <span className="dash-stat-icon" aria-hidden="true">
        {icon}
      </span>

      <div>
        <strong>{value}</strong>
        <span>{label}</span>
        <p>{desc}</p>
      </div>
    </article>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="dash-mini-stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function DifficultyRow({ label, value, total }) {
  const percentage = total > 0 ? Math.round((value / total) * 100) : 0;

  return (
    <div className="dash-difficulty-row">
      <div>
        <span>{label}</span>
        <strong>{value} câu</strong>
      </div>

      <div className="dash-difficulty-bar">
        <span style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

function QuickAction({ to, icon, title, desc }) {
  return (
    <Link to={to} className="dash-action-card">
      <span className="dash-action-icon" aria-hidden="true">
        {icon}
      </span>

      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>

      <span className="dash-action-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}

const dashboardStyles = `
  .dash-page {
    padding-bottom: 4rem;
  }

  .dash-login-prompt {
    text-align: center;
    padding: 3.5rem 1.5rem;
    background: var(--gradient-warm);
    border-radius: var(--radius-xl);
    border: 1px solid rgba(197, 165, 90, 0.15);
  }

  .dash-login-icon {
    width: 74px;
    height: 74px;
    margin: 0 auto 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--accent-light);
    color: var(--accent);
    border-radius: 50%;
    font-size: 2rem;
  }

  .dash-login-prompt h2 {
    font-family: var(--font-serif);
    font-size: 1.6rem;
    margin: 0 0 0.5rem;
  }

  .dash-login-prompt p {
    color: var(--text-muted);
    margin: 0 auto 1.5rem;
    max-width: 520px;
    line-height: 1.7;
  }

  .dash-login-preview {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1.25rem;
  }

  .dash-login-preview a {
    color: var(--accent);
    font-weight: 800;
  }

  .dash-hero {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.25rem;
    background: var(--gradient-hero);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-2xl);
    padding: 1.75rem;
    box-shadow: var(--shadow);
    margin-bottom: 1.5rem;
  }

  .dash-hero::after {
    content: '';
    position: absolute;
    width: 280px;
    height: 280px;
    right: -100px;
    bottom: -150px;
    border-radius: 999px;
    background: rgba(197, 165, 90, 0.18);
    pointer-events: none;
  }

  .dash-profile-mini {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 1rem;
    min-width: 0;
  }

  .dash-avatar {
    width: 76px;
    height: 76px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid rgba(255, 255, 255, 0.85);
    box-shadow: var(--shadow);
    flex-shrink: 0;
  }

  .dash-profile-mini h1 {
    margin: 0 0 0.35rem;
    font-family: var(--font-serif);
    color: var(--text);
    line-height: 1.2;
    font-size: clamp(1.55rem, 4vw, 2.2rem);
  }

  .dash-profile-mini p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.65;
    max-width: 680px;
  }

  .dash-email {
    display: inline-flex;
    margin-top: 0.5rem;
    color: var(--text-light);
    font-size: 0.88rem;
    font-weight: 700;
  }

  .dash-kicker {
    display: inline-flex;
    width: fit-content;
    margin-bottom: 0.35rem;
    color: var(--accent);
    font-size: 0.72rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .dash-hero-actions {
    position: relative;
    z-index: 1;
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    flex-shrink: 0;
  }

  .dash-small-loading {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    color: var(--text-muted);
    background: var(--bg-card);
    border: 1px solid var(--border-light);
    border-radius: var(--radius);
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
  }

  .dash-stat-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .dash-stat-card {
    display: flex;
    gap: 0.85rem;
    align-items: flex-start;
    background: var(--bg-card);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-xl);
    padding: 1.1rem;
    box-shadow: var(--shadow-xs);
  }

  .dash-stat-card.warning {
    border-color: #fed7aa;
    background: #fff7ed;
  }

  .dash-stat-card.success {
    border-color: rgba(47, 133, 90, 0.22);
    background: var(--accent-green-light);
  }

  .dash-stat-icon {
    width: 42px;
    height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    background: var(--accent-light);
    color: var(--accent);
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  .dash-stat-card strong {
    display: block;
    color: var(--text);
    font-family: var(--font-serif);
    font-size: 1.55rem;
    line-height: 1;
    margin-bottom: 0.3rem;
  }

  .dash-stat-card span:not(.dash-stat-icon) {
    display: block;
    color: var(--text);
    font-weight: 900;
    margin-bottom: 0.2rem;
  }

  .dash-stat-card p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.5;
    font-size: 0.86rem;
  }

  .dash-main-grid,
  .dash-section-grid {
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .dash-next-card,
  .dash-advice-card,
  .dash-panel,
  .dash-account-strip {
    background: var(--bg-card);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-xl);
    padding: 1.35rem;
    box-shadow: var(--shadow-xs);
  }

  .dash-next-card.review {
    border-color: #fed7aa;
    background: #fff7ed;
  }

  .dash-next-card.done {
    border-color: rgba(47, 133, 90, 0.2);
    background: var(--accent-green-light);
  }

  .dash-card-heading {
    display: flex;
    align-items: flex-start;
    gap: 0.85rem;
    margin-bottom: 0.85rem;
  }

  .dash-card-icon {
    width: 44px;
    height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    background: var(--accent-light);
    color: var(--accent);
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  .dash-card-heading h2,
  .dash-panel-header h2,
  .dash-account-strip h2 {
    margin: 0;
    color: var(--text);
    font-family: var(--font-serif);
    line-height: 1.25;
    font-size: 1.35rem;
  }

  .dash-next-subtitle {
    margin: 0 0 0.65rem;
    color: var(--text-light);
    font-weight: 800;
  }

  .dash-next-desc,
  .dash-advice-card p {
    margin: 0 0 1rem;
    color: var(--text-muted);
    line-height: 1.7;
  }

  .dash-next-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .dash-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .dash-panel-link {
    color: var(--accent);
    font-weight: 900;
    white-space: nowrap;
    font-size: 0.9rem;
  }

  .dash-progress-bar {
    height: 10px;
    overflow: hidden;
    border-radius: 999px;
    background: var(--bg-alt);
    margin-bottom: 1rem;
  }

  .dash-progress-bar span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: var(--accent);
  }

  .dash-lesson-list,
  .dash-recent-list {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  .dash-lesson-row,
  .dash-recent-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.8rem;
    border: 1px solid var(--border-light);
    border-radius: var(--radius);
    background: var(--bg-alt);
    color: var(--text);
    text-decoration: none;
    transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
  }

  .dash-lesson-row:hover,
  .dash-recent-item:hover {
    transform: translateY(-2px);
    border-color: var(--accent);
    box-shadow: var(--shadow-xs);
    text-decoration: none;
  }

  .dash-lesson-icon {
    width: 38px;
    height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    background: white;
    color: var(--accent);
    flex-shrink: 0;
  }

  .dash-lesson-body {
    min-width: 0;
    flex: 1;
  }

  .dash-lesson-body h3,
  .dash-recent-item h3,
  .dash-action-card h3 {
    margin: 0 0 0.25rem;
    color: var(--text);
    font-size: 0.95rem;
    line-height: 1.35;
  }

  .dash-status {
    display: inline-flex;
    width: fit-content;
    border-radius: 999px;
    padding: 0.18rem 0.52rem;
    font-size: 0.72rem;
    font-weight: 900;
  }

  .dash-status.not-started {
    background: white;
    color: var(--text-light);
    border: 1px solid var(--border-light);
  }

  .dash-status.reading {
    background: var(--accent-light);
    color: var(--accent);
  }

  .dash-status.review {
    background: #fff7ed;
    color: #c2410c;
    border: 1px solid #fed7aa;
  }

  .dash-status.done {
    background: var(--accent-green-light);
    color: var(--accent-green);
  }

  .dash-row-arrow {
    color: var(--accent);
    font-weight: 900;
    flex-shrink: 0;
  }

  .dash-exam-breakdown {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.65rem;
    margin-bottom: 1rem;
  }

  .dash-mini-stat {
    background: var(--bg-alt);
    border: 1px solid var(--border-light);
    border-radius: var(--radius);
    padding: 0.8rem;
  }

  .dash-mini-stat strong {
    display: block;
    color: var(--accent);
    font-family: var(--font-serif);
    font-size: 1.25rem;
    line-height: 1;
    margin-bottom: 0.35rem;
  }

  .dash-mini-stat span {
    color: var(--text-muted);
    font-size: 0.78rem;
    font-weight: 800;
  }

  .dash-difficulty-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .dash-difficulty-row {
    display: grid;
    grid-template-columns: minmax(120px, 160px) 1fr;
    gap: 0.85rem;
    align-items: center;
  }

  .dash-difficulty-row span {
    display: block;
    color: var(--text-light);
    font-size: 0.8rem;
    font-weight: 800;
  }

  .dash-difficulty-row strong {
    color: var(--text);
    font-size: 0.9rem;
  }

  .dash-difficulty-bar {
    height: 9px;
    overflow: hidden;
    border-radius: 999px;
    background: var(--bg-alt);
  }

  .dash-difficulty-bar span {
    display: block;
    height: 100%;
    background: var(--accent-gold);
    border-radius: inherit;
  }

  .dash-wrong-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    border-radius: var(--radius-lg);
    background: var(--gradient-warm);
    border: 1px solid rgba(197, 165, 90, 0.16);
    padding: 1rem;
  }

  .dash-wrong-box strong {
    display: block;
    color: var(--text);
    font-family: var(--font-serif);
    font-size: 1.45rem;
  }

  .dash-wrong-box span {
    color: var(--text-muted);
    font-weight: 800;
    font-size: 0.86rem;
  }

  .dash-empty-box {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    align-items: flex-start;
    background: var(--bg-alt);
    border: 1px dashed var(--border);
    border-radius: var(--radius);
    padding: 1rem;
  }

  .dash-empty-box p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.65;
  }

  .dash-recent-item {
    justify-content: space-between;
  }

  .dash-recent-item span:not(.dash-row-arrow) {
    color: var(--text-light);
    font-size: 0.82rem;
    font-weight: 700;
  }

  .dash-action-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
  }

  .dash-action-card {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: var(--bg-alt);
    border: 1px solid var(--border-light);
    border-radius: var(--radius);
    padding: 0.85rem;
    color: var(--text);
    text-decoration: none;
    transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
  }

  .dash-action-card:hover {
    transform: translateY(-2px);
    border-color: var(--accent);
    box-shadow: var(--shadow-xs);
    text-decoration: none;
  }

  .dash-action-icon {
    width: 38px;
    height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    background: white;
    flex-shrink: 0;
  }

  .dash-action-card div {
    min-width: 0;
    flex: 1;
  }

  .dash-action-card p {
    margin: 0;
    color: var(--text-muted);
    font-size: 0.82rem;
    line-height: 1.45;
  }

  .dash-action-arrow {
    color: var(--accent);
    font-weight: 900;
  }

  .dash-account-strip {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: flex-start;
  }

  .dash-account-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(120px, 1fr));
    gap: 0.75rem;
  }

  @media (max-width: 1120px) {
    .dash-stat-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .dash-main-grid,
    .dash-section-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 780px) {
    .dash-hero,
    .dash-account-strip {
      flex-direction: column;
      align-items: flex-start;
    }

    .dash-hero-actions,
    .dash-hero-actions .btn {
      width: 100%;
    }

    .dash-hero-actions .btn {
      justify-content: center;
    }

    .dash-profile-mini {
      align-items: flex-start;
    }

    .dash-stat-grid,
    .dash-exam-breakdown,
    .dash-action-grid,
    .dash-account-stats {
      grid-template-columns: 1fr;
    }

    .dash-panel-header {
      flex-direction: column;
    }

    .dash-difficulty-row {
      grid-template-columns: 1fr;
      gap: 0.4rem;
    }
  }

  @media (max-width: 560px) {
    .dash-hero {
      padding: 1.25rem;
    }

    .dash-profile-mini {
      flex-direction: column;
    }

    .dash-avatar {
      width: 68px;
      height: 68px;
    }

    .dash-next-actions,
    .dash-next-actions .btn,
    .dash-wrong-box,
    .dash-wrong-box .btn {
      width: 100%;
    }

    .dash-next-actions .btn,
    .dash-wrong-box .btn {
      justify-content: center;
    }

    .dash-wrong-box {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;