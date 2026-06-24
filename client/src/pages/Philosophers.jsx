import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { philosophers as api } from '../api';
import { staticPeople } from '../data/staticPartyHistoryData';

const PERIOD_FILTERS = [
  { id: 'all', label: 'Tất cả giai đoạn' },
  { id: '1930-1945', label: '1930-1945' },
  { id: '1945-1975', label: '1945-1975' },
  { id: 'Từ 1975', label: 'Từ 1975' },
];

const PERIOD_META = {
  '1930-1945': {
    title: 'Đảng ra đời và giành chính quyền',
    icon: '★',
    description:
      'Những nhân vật gắn với quá trình chuẩn bị thành lập Đảng, xác lập đường lối cách mạng và giành chính quyền.',
  },
  '1945-1975': {
    title: 'Kháng chiến và thống nhất đất nước',
    icon: '⚑',
    description:
      'Những nhân vật gắn với kháng chiến chống thực dân Pháp, chống Mỹ và sự nghiệp thống nhất đất nước.',
  },
  'Từ 1975': {
    title: 'Xây dựng đất nước và đổi mới',
    icon: '📈',
    description:
      'Những nhân vật gắn với xây dựng đất nước, đổi mới tư duy và hội nhập quốc tế.',
  },
};

function normalizeText(value = '') {
  return value
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd');
}

function getPeriodKey(person) {
  const school = person.school || '';

  if (school.includes('1930')) return '1930-1945';
  if (school.includes('1945')) return '1945-1975';
  if (school.includes('1975')) return 'Từ 1975';

  return 'Khác';
}

function getInitials(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();

  const first = parts[0].charAt(0);
  const last = parts[parts.length - 1].charAt(0);

  return `${first}${last}`.toUpperCase();
}

function getPersonRole(person) {
  const text = normalizeText(
    [person.name, person.nameVi, person.summary, person.era, person.school]
      .filter(Boolean)
      .join(' ')
  );

  if (text.includes('tong bi thu')) return 'Tổng Bí thư';

  if (
    text.includes('chu tich ho chi minh') ||
    text.includes('nguyen ai quoc') ||
    text.includes('ho chi minh')
  ) {
    return 'Lãnh tụ cách mạng';
  }

  if (text.includes('dai tuong') || text.includes('tong tu lenh')) {
    return 'Lãnh đạo quân sự';
  }

  if (text.includes('doi moi')) return 'Lãnh đạo đổi mới';
  if (text.includes('ngoai giao')) return 'Ngoại giao cách mạng';
  if (text.includes('khang chien')) return 'Lãnh đạo kháng chiến';
  if (text.includes('mat tran') || text.includes('cong doan')) {
    return 'Công tác Mặt trận';
  }

  return 'Nhân vật lịch sử';
}

function getShortSummary(summary = '') {
  if (!summary) return '';

  if (summary.length <= 155) return summary;

  return `${summary.slice(0, 155)}...`;
}

export default function Philosophers() {
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [activePeriod, setActivePeriod] = useState('all');
  const [loading, setLoading] = useState(true);
  const [usedFallback, setUsedFallback] = useState(false);

  useEffect(() => {
    setLoading(true);
    setUsedFallback(false);

    api
      .list()
      .then(({ philosophers }) => {
        const nextList = philosophers?.length ? philosophers : staticPeople;

        setList(nextList);
        setUsedFallback(!philosophers?.length);
        setLoading(false);
      })
      .catch(() => {
        setList(staticPeople);
        setUsedFallback(true);
        setLoading(false);
      });
  }, []);

  const summary = useMemo(() => {
    return {
      total: list.length,
      early: list.filter((person) => getPeriodKey(person) === '1930-1945')
        .length,
      resistance: list.filter((person) => getPeriodKey(person) === '1945-1975')
        .length,
      renewal: list.filter((person) => getPeriodKey(person) === 'Từ 1975')
        .length,
    };
  }, [list]);

  const filteredPeople = useMemo(() => {
    const q = normalizeText(keyword.trim());

    return list.filter((person) => {
      const period = getPeriodKey(person);
      const matchesPeriod = activePeriod === 'all' || activePeriod === period;

      const searchableText = normalizeText(
        [
          person.name,
          person.nameVi,
          person.birthDeath,
          person.school,
          person.era,
          person.summary,
          getPersonRole(person),
        ]
          .filter(Boolean)
          .join(' ')
      );

      const matchesKeyword = !q || searchableText.includes(q);

      return matchesPeriod && matchesKeyword;
    });
  }, [list, keyword, activePeriod]);

  const groupedPeople = useMemo(() => {
    return filteredPeople.reduce((groups, person) => {
      const period = getPeriodKey(person);

      if (!groups[period]) groups[period] = [];
      groups[period].push(person);

      return groups;
    }, {});
  }, [filteredPeople]);

  const clearFilters = () => {
    setKeyword('');
    setActivePeriod('all');
  };

  if (loading) {
    return (
      <div className="page page--wide">
        <div className="loading-wrap">
          <div className="loading-spinner" aria-label="Đang tải" />
          <span className="loading-text">Đang tải nhân vật...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="page page--wide phil-page">
      <header className="phil-hero">
        <div className="phil-hero-content">
          <span className="badge badge-school">Nhân vật lịch sử</span>

          <h1 className="page-title">Thư viện nhân vật Lịch sử Đảng</h1>

          <p className="page-desc">
            Tìm hiểu các nhân vật tiêu biểu theo từng giai đoạn: từ quá trình
            thành lập Đảng, đấu tranh giành chính quyền, kháng chiến, thống
            nhất đất nước đến đổi mới và hội nhập.
          </p>

          <div className="phil-hero-actions">
            <Link to="/so-sanh" className="btn btn-primary">
              Đối chiếu nhân vật
            </Link>
            <Link to="/khai-niem" className="btn btn-outline">
              Xem chủ đề - văn kiện
            </Link>
          </div>

          {usedFallback && (
            <div className="phil-fallback-note">
              Đang dùng dữ liệu dự phòng vì API chưa trả dữ liệu hoặc đang tạm
              thời không khả dụng.
            </div>
          )}
        </div>
      </header>

      <section className="phil-summary-grid">
        <SummaryCard label="Tổng nhân vật" value={summary.total} />
        <SummaryCard label="1930-1945" value={summary.early} />
        <SummaryCard label="1945-1975" value={summary.resistance} />
        <SummaryCard label="Từ 1975" value={summary.renewal} />
      </section>

      <section className="phil-toolbar">
        <div className="phil-toolbar-main">
          <label className="phil-search">
            <span>Tìm kiếm nhân vật</span>
            <input
              type="search"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="Ví dụ: Hồ Chí Minh, Tổng Bí thư, đổi mới..."
            />
          </label>

          <label className="phil-filter">
            <span>Giai đoạn</span>
            <select
              value={activePeriod}
              onChange={(event) => setActivePeriod(event.target.value)}
            >
              {PERIOD_FILTERS.map((filter) => (
                <option key={filter.id} value={filter.id}>
                  {filter.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div
          className="phil-period-tabs"
          aria-label="Lọc nhân vật theo giai đoạn"
        >
          {PERIOD_FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={activePeriod === filter.id ? 'active' : ''}
              onClick={() => setActivePeriod(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      <section className="phil-results">
        <div className="phil-result-header">
          <div>
            <h2>
              Hiển thị {filteredPeople.length}/{list.length} nhân vật
            </h2>
            <p>
              Chọn một nhân vật để xem vai trò, đóng góp, văn kiện liên quan và
              các điểm cần nhớ khi ôn thi.
            </p>
          </div>

          {(keyword || activePeriod !== 'all') && (
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={clearFilters}
            >
              Xóa bộ lọc
            </button>
          )}
        </div>

        {filteredPeople.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon" aria-hidden="true">
              ★
            </div>
            <p>Không tìm thấy nhân vật phù hợp với bộ lọc hiện tại.</p>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={clearFilters}
            >
              Hiển thị tất cả
            </button>
          </div>
        ) : (
          <div className="phil-sections">
            {Object.entries(groupedPeople).map(([period, people]) => {
              const meta = PERIOD_META[period] || {
                title: 'Nhân vật khác',
                icon: '★',
                description:
                  'Các nhân vật bổ sung chưa phân loại rõ theo giai đoạn.',
              };

              return (
                <section key={period} className="phil-period-section">
                  <div className="phil-period-header">
                    <div className="phil-period-icon" aria-hidden="true">
                      {meta.icon}
                    </div>

                    <div>
                      <span className="phil-period-badge">{period}</span>
                      <h2>{meta.title}</h2>
                      <p>{meta.description}</p>
                    </div>

                    <span className="phil-period-count">
                      {people.length} nhân vật
                    </span>
                  </div>

                  <div className="phil-grid">
                    {people.map((person, index) => (
                      <PersonCard
                        key={person._id || person.slug}
                        person={person}
                        index={index}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </section>

      <style>{`
        .phil-page {
          padding-bottom: 4rem;
        }

        .phil-hero {
          position: relative;
          overflow: hidden;
          text-align: center;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-2xl);
          background: var(--gradient-hero);
          box-shadow: var(--shadow);
          padding: 2.5rem 1.5rem;
          margin-bottom: 1.5rem;
        }

        .phil-hero::before {
          content: '';
          position: absolute;
          width: 280px;
          height: 280px;
          right: -90px;
          bottom: -140px;
          border-radius: 50%;
          background: rgba(197, 165, 90, 0.18);
          pointer-events: none;
        }

        .phil-hero-content {
          position: relative;
          z-index: 1;
        }

        .phil-hero .page-desc {
          margin-left: auto;
          margin-right: auto;
        }

        .phil-hero-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.25rem;
        }

        .phil-fallback-note {
          max-width: 720px;
          margin: 1rem auto 0;
          border: 1px solid #fed7aa;
          background: #fff7ed;
          color: #c2410c;
          border-radius: var(--radius);
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .phil-summary-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .phil-summary-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1rem;
          box-shadow: var(--shadow-xs);
        }

        .phil-summary-card strong {
          display: block;
          color: var(--accent);
          font-family: var(--font-serif);
          font-size: 1.7rem;
          line-height: 1;
          margin-bottom: 0.35rem;
        }

        .phil-summary-card span {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 700;
        }

        .phil-toolbar {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 1.25rem;
          margin-bottom: 1.5rem;
          box-shadow: var(--shadow-xs);
        }

        .phil-toolbar-main {
          display: grid;
          grid-template-columns: 1fr minmax(220px, 300px);
          gap: 1rem;
          align-items: end;
          margin-bottom: 1rem;
        }

        .phil-search,
        .phil-filter {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .phil-search span,
        .phil-filter span {
          color: var(--text-light);
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .phil-search input,
        .phil-filter select {
          width: 100%;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          background: var(--bg-alt);
          color: var(--text);
          padding: 0.75rem 0.9rem;
          font: inherit;
          outline: none;
          transition: border-color var(--transition), box-shadow var(--transition);
        }

        .phil-search input:focus,
        .phil-filter select:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(44, 82, 130, 0.12);
        }

        .phil-period-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .phil-period-tabs button {
          border: 1px solid var(--border);
          background: var(--bg-alt);
          color: var(--text-muted);
          border-radius: 999px;
          padding: 0.52rem 0.85rem;
          cursor: pointer;
          font: inherit;
          font-weight: 800;
          transition: all var(--transition);
        }

        .phil-period-tabs button:hover,
        .phil-period-tabs button.active {
          color: white;
          background: var(--accent);
          border-color: var(--accent);
          box-shadow: var(--shadow-accent);
        }

        .phil-result-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .phil-result-header h2 {
          margin: 0 0 0.35rem;
          color: var(--text);
          font-family: var(--font-serif);
          font-size: 1.45rem;
        }

        .phil-result-header p {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.65;
        }

        .phil-sections {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .phil-period-section {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 1.35rem;
          box-shadow: var(--shadow-xs);
        }

        .phil-period-header {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 1rem;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }

        .phil-period-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-lg);
          background: var(--accent-light);
          color: var(--accent);
          font-size: 1.35rem;
          font-weight: 800;
        }

        .phil-period-badge {
          display: inline-flex;
          width: fit-content;
          margin-bottom: 0.35rem;
          border-radius: 999px;
          background: #c53030;
          color: white;
          padding: 0.2rem 0.6rem;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .phil-period-header h2 {
          margin: 0 0 0.35rem;
          color: var(--text);
          font-family: var(--font-serif);
          font-size: 1.35rem;
        }

        .phil-period-header p {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.65;
        }

        .phil-period-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 34px;
          border-radius: 999px;
          background: var(--bg-alt);
          color: var(--text-light);
          padding: 0.35rem 0.75rem;
          font-size: 0.82rem;
          font-weight: 800;
          white-space: nowrap;
        }

        .phil-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
        }

        .phil-card {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 100%;
          background: var(--bg-alt);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          color: var(--text);
          text-decoration: none;
          transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
        }

        .phil-card:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow);
          transform: translateY(-3px);
          text-decoration: none;
        }

        .phil-image-wrap {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background:
            radial-gradient(circle at 30% 20%, rgba(197, 165, 90, 0.22), transparent 35%),
            linear-gradient(135deg, var(--accent-light), #ffffff);
        }

        .phil-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform var(--transition-slow);
        }

        .phil-card:hover .phil-image-wrap img {
          transform: scale(1.04);
        }

        .phil-avatar-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          font-family: var(--font-serif);
          font-size: 2.3rem;
          font-weight: 900;
        }

        .phil-role-badge {
          position: absolute;
          left: 0.75rem;
          bottom: 0.75rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.92);
          color: var(--accent);
          padding: 0.28rem 0.65rem;
          font-size: 0.72rem;
          font-weight: 900;
          box-shadow: var(--shadow-xs);
          backdrop-filter: blur(10px);
        }

        .phil-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          flex: 1;
          padding: 1rem;
        }

        .phil-card h3 {
          margin: 0;
          color: var(--text);
          font-size: 1.08rem;
          line-height: 1.28;
          font-weight: 900;
        }

        .phil-name-vi {
          color: var(--text-muted);
          font-size: 0.84rem;
          line-height: 1.4;
        }

        .phil-meta-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .phil-dates {
          display: inline-flex;
          width: fit-content;
          color: var(--text-light);
          background: white;
          border: 1px solid var(--border-light);
          border-radius: 999px;
          padding: 0.22rem 0.55rem;
          font-size: 0.76rem;
          font-weight: 800;
        }

        .phil-card-summary {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.87rem;
          line-height: 1.65;
        }

        .phil-card-link {
          margin-top: auto;
          color: var(--accent);
          font-weight: 900;
          font-size: 0.86rem;
        }

        @media (max-width: 1120px) {
          .phil-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 920px) {
          .phil-summary-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .phil-toolbar-main {
            grid-template-columns: 1fr;
          }

          .phil-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .phil-hero {
            padding: 1.5rem 1rem;
          }

          .phil-result-header {
            flex-direction: column;
          }

          .phil-period-header {
            grid-template-columns: 1fr;
          }

          .phil-period-count {
            width: fit-content;
          }
        }

        @media (max-width: 560px) {
          .phil-summary-grid,
          .phil-grid {
            grid-template-columns: 1fr;
          }

          .phil-hero-actions .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

function SummaryCard({ label, value }) {
  return (
    <article className="phil-summary-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}

function PersonCard({ person, index }) {
  const [imageFailed, setImageFailed] = useState(false);
  const hasValidImage = Boolean(person.imageUrl) && !imageFailed;

  return (
    <Link
      to={`/triet-gia/${person.slug}`}
      className={`phil-card stagger-${(index % 6) + 1}`}
    >
      <div className="phil-image-wrap">
        {hasValidImage ? (
          <img
            src={person.imageUrl}
            alt={person.imageAlt || person.name}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="phil-avatar-fallback" aria-hidden="true">
            {getInitials(person.name)}
          </div>
        )}

        <span className="phil-role-badge">{getPersonRole(person)}</span>
      </div>

      <div className="phil-card-body">
        <h3>{person.name}</h3>

        {person.nameVi && person.nameVi !== person.name && (
          <span className="phil-name-vi">{person.nameVi}</span>
        )}

        <div className="phil-meta-row">
          {person.birthDeath && (
            <span className="phil-dates">{person.birthDeath}</span>
          )}

          {person.school && (
            <span className="badge badge-school">{person.school}</span>
          )}
        </div>

        {person.summary && (
          <p className="phil-card-summary">
            {getShortSummary(person.summary)}
          </p>
        )}

        <span className="phil-card-link">Xem hồ sơ →</span>
      </div>
    </Link>
  );
}