import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { concepts as api } from '../api';
import { staticConcepts } from '../data/staticPartyHistoryData';

const PERIOD_FILTERS = [
  { id: 'all', label: 'Tất cả giai đoạn', shortLabel: 'Tất cả' },
  { id: '1930-1945', label: '1930-1945', shortLabel: '1930-1945' },
  { id: '1945-1975', label: '1945-1975', shortLabel: '1945-1975' },
  { id: 'Từ 1975', label: 'Từ 1975', shortLabel: 'Từ 1975' },
];

const PERIOD_META = {
  '1930-1945': {
    title: 'Đảng ra đời và giành chính quyền',
    badge: 'Chương 1',
    icon: '★',
    description:
      'Các chủ đề về sự ra đời của Đảng, Cương lĩnh đầu tiên, chuyển hướng chiến lược và Cách mạng Tháng Tám.',
  },
  '1945-1975': {
    title: 'Kháng chiến và thống nhất đất nước',
    badge: 'Chương 2',
    icon: '⚑',
    description:
      'Các chủ đề về kháng chiến chống Pháp, chống Mỹ, chiến tranh nhân dân, ngoại giao và thống nhất đất nước.',
  },
  'Từ 1975': {
    title: 'Xây dựng đất nước và đổi mới',
    badge: 'Chương 3',
    icon: '📈',
    description:
      'Các chủ đề về đổi mới, kinh tế thị trường định hướng xã hội chủ nghĩa, công nghiệp hóa và hội nhập quốc tế.',
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

function getPeriodKey(concept) {
  const school = concept.school || '';

  if (school.includes('1930')) return '1930-1945';
  if (school.includes('1945')) return '1945-1975';
  if (school.includes('1975')) return 'Từ 1975';

  return 'Khác';
}

function getConceptIcon(concept) {
  const period = getPeriodKey(concept);
  return PERIOD_META[period]?.icon || '📄';
}

export default function Concepts() {
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [activePeriod, setActivePeriod] = useState('all');
  const [loading, setLoading] = useState(true);
  const [usedFallback, setUsedFallback] = useState(false);

  useEffect(() => {
    setLoading(true);
    setUsedFallback(false);

    api.list()
      .then(({ concepts: c }) => {
        const nextList = c?.length ? c : staticConcepts;
        setList(nextList);
        setUsedFallback(!c?.length);
        setLoading(false);
      })
      .catch(() => {
        setList(staticConcepts);
        setUsedFallback(true);
        setLoading(false);
      });
  }, []);

  const summary = useMemo(() => {
    return {
      total: list.length,
      early: list.filter((item) => getPeriodKey(item) === '1930-1945').length,
      resistance: list.filter((item) => getPeriodKey(item) === '1945-1975')
        .length,
      renewal: list.filter((item) => getPeriodKey(item) === 'Từ 1975').length,
    };
  }, [list]);

  const filteredConcepts = useMemo(() => {
    const q = normalizeText(keyword.trim());

    return list.filter((concept) => {
      const period = getPeriodKey(concept);
      const matchesPeriod = activePeriod === 'all' || period === activePeriod;

      const searchableText = normalizeText(
        [
          concept.title,
          concept.school,
          concept.description,
          period,
          PERIOD_META[period]?.title,
        ]
          .filter(Boolean)
          .join(' ')
      );

      const matchesKeyword = !q || searchableText.includes(q);

      return matchesPeriod && matchesKeyword;
    });
  }, [list, keyword, activePeriod]);

  const groupedConcepts = useMemo(() => {
    return filteredConcepts.reduce((groups, concept) => {
      const period = getPeriodKey(concept);
      if (!groups[period]) groups[period] = [];
      groups[period].push(concept);
      return groups;
    }, {});
  }, [filteredConcepts]);

  const clearFilters = () => {
    setKeyword('');
    setActivePeriod('all');
  };

  if (loading) {
    return (
      <div className="page page--narrow">
        <div className="loading-wrap">
          <div className="loading-spinner" aria-label="Đang tải" />
          <span className="loading-text">Đang tải chủ đề...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="page page--wide concepts-page">
      <header className="concepts-hero">
        <div className="concepts-hero-content">
          <span className="badge badge-school">Chủ đề - Văn kiện</span>

          <h1 className="page-title">Thư viện chủ đề và văn kiện</h1>

          <p className="page-desc">
            Tra cứu các khái niệm, đường lối, sự kiện và văn kiện cốt lõi theo
            tiến trình Lịch sử Đảng Cộng sản Việt Nam.
          </p>

          <div className="concepts-hero-actions">
            <Link to="/bai-hoc" className="btn btn-primary">
              Học theo bài
            </Link>
            <Link to="/nguon-hoc-lieu" className="btn btn-outline">
              Xem nguồn học liệu
            </Link>
          </div>

          {usedFallback && (
            <div className="concepts-fallback-note">
              Đang dùng dữ liệu dự phòng vì API chưa trả dữ liệu hoặc đang tạm
              thời không khả dụng.
            </div>
          )}
        </div>
      </header>

      <section className="concepts-summary">
        <SummaryCard label="Tổng chủ đề" value={summary.total} />
        <SummaryCard label="1930-1945" value={summary.early} />
        <SummaryCard label="1945-1975" value={summary.resistance} />
        <SummaryCard label="Từ 1975" value={summary.renewal} />
      </section>

      <section className="concepts-toolbar">
        <div className="concepts-toolbar-main">
          <label className="concepts-search">
            <span>Tìm kiếm chủ đề</span>
            <input
              type="search"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="Ví dụ: Cương lĩnh, Điện Biên Phủ, đổi mới..."
            />
          </label>

          <label className="concepts-filter">
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

        <div className="concepts-period-tabs" aria-label="Lọc theo giai đoạn">
          {PERIOD_FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={activePeriod === filter.id ? 'active' : ''}
              onClick={() => setActivePeriod(filter.id)}
            >
              {filter.shortLabel}
            </button>
          ))}
        </div>
      </section>

      <section className="concepts-results">
        <div className="concepts-result-header">
          <div>
            <h2>
              Hiển thị {filteredConcepts.length}/{list.length} chủ đề
            </h2>
            <p>
              Chọn một chủ đề để xem nội dung trọng tâm, mốc cần nhớ, gợi ý ôn
              thi và nguồn nên đối chiếu.
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

        {filteredConcepts.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon" aria-hidden="true">
              📄
            </div>
            <p>Không tìm thấy chủ đề phù hợp với bộ lọc hiện tại.</p>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={clearFilters}
            >
              Hiển thị tất cả
            </button>
          </div>
        ) : (
          <div className="concepts-sections">
            {Object.entries(groupedConcepts).map(([period, concepts]) => {
              const meta = PERIOD_META[period] || {
                title: 'Chủ đề khác',
                badge: 'Khác',
                icon: '📄',
                description: 'Các chủ đề bổ sung chưa phân loại theo giai đoạn.',
              };

              return (
                <section key={period} className="concept-period-section">
                  <div className="concept-period-header">
                    <div className="concept-period-icon" aria-hidden="true">
                      {meta.icon}
                    </div>

                    <div>
                      <span className="concept-period-badge">
                        {meta.badge}
                      </span>
                      <h2>{meta.title}</h2>
                      <p>{meta.description}</p>
                    </div>

                    <span className="concept-period-count">
                      {concepts.length} chủ đề
                    </span>
                  </div>

                  <div className="concepts-grid">
                    {concepts.map((concept, index) => (
                      <Link
                        key={concept._id || concept.slug}
                        to={`/khai-niem/${concept.slug}`}
                        className={`concept-card stagger-${(index % 6) + 1}`}
                      >
                        <div className="concept-card-icon" aria-hidden="true">
                          {getConceptIcon(concept)}
                        </div>

                        <div className="concept-card-body">
                          <div className="concept-card-topline">
                            {concept.school && (
                              <span className="badge badge-school">
                                {concept.school}
                              </span>
                            )}
                          </div>

                          <h3>{concept.title}</h3>

                          {concept.description && (
                            <p>
                              {concept.description.length > 150
                                ? `${concept.description.slice(0, 150)}...`
                                : concept.description}
                            </p>
                          )}

                          <span className="concept-card-link">
                            Xem chi tiết →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </section>

      <style>{`
        .concepts-page {
          padding-bottom: 4rem;
        }

        .concepts-hero {
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

        .concepts-hero::before {
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

        .concepts-hero-content {
          position: relative;
          z-index: 1;
        }

        .concepts-hero .page-desc {
          margin-left: auto;
          margin-right: auto;
        }

        .concepts-hero-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.25rem;
        }

        .concepts-fallback-note {
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

        .concepts-summary {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .concept-summary-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1rem;
          box-shadow: var(--shadow-xs);
        }

        .concept-summary-card strong {
          display: block;
          color: var(--accent);
          font-family: var(--font-serif);
          font-size: 1.7rem;
          line-height: 1;
          margin-bottom: 0.35rem;
        }

        .concept-summary-card span {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 700;
        }

        .concepts-toolbar {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 1.25rem;
          margin-bottom: 1.5rem;
          box-shadow: var(--shadow-xs);
        }

        .concepts-toolbar-main {
          display: grid;
          grid-template-columns: 1fr minmax(220px, 300px);
          gap: 1rem;
          align-items: end;
          margin-bottom: 1rem;
        }

        .concepts-search,
        .concepts-filter {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .concepts-search span,
        .concepts-filter span {
          color: var(--text-light);
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .concepts-search input,
        .concepts-filter select {
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

        .concepts-search input:focus,
        .concepts-filter select:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(44, 82, 130, 0.12);
        }

        .concepts-period-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .concepts-period-tabs button {
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

        .concepts-period-tabs button:hover,
        .concepts-period-tabs button.active {
          color: white;
          background: var(--accent);
          border-color: var(--accent);
          box-shadow: var(--shadow-accent);
        }

        .concepts-result-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .concepts-result-header h2 {
          margin: 0 0 0.35rem;
          color: var(--text);
          font-family: var(--font-serif);
          font-size: 1.45rem;
        }

        .concepts-result-header p {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.65;
        }

        .concepts-sections {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .concept-period-section {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 1.35rem;
          box-shadow: var(--shadow-xs);
        }

        .concept-period-header {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 1rem;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }

        .concept-period-icon {
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

        .concept-period-badge {
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

        .concept-period-header h2 {
          margin: 0 0 0.35rem;
          color: var(--text);
          font-family: var(--font-serif);
          font-size: 1.35rem;
        }

        .concept-period-header p {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.65;
        }

        .concept-period-count {
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

        .concepts-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .concept-card {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0.85rem;
          min-height: 100%;
          background: var(--bg-alt);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1.1rem;
          color: var(--text);
          text-decoration: none;
          transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
        }

        .concept-card:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow);
          transform: translateY(-3px);
          text-decoration: none;
        }

        .concept-card-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: white;
          border: 1px solid var(--border-light);
          color: var(--accent);
          border-radius: var(--radius);
          font-size: 1.1rem;
          font-weight: 800;
        }

        .concept-card-body {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .concept-card-topline {
          min-height: 24px;
        }

        .concept-card h3 {
          margin: 0;
          color: var(--text);
          font-size: 1.02rem;
          line-height: 1.35;
          font-weight: 800;
        }

        .concept-card p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.65;
        }

        .concept-card-link {
          margin-top: auto;
          color: var(--accent);
          font-size: 0.86rem;
          font-weight: 800;
        }

        @media (max-width: 980px) {
          .concepts-summary {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .concepts-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .concepts-hero {
            padding: 1.5rem 1rem;
          }

          .concepts-toolbar-main {
            grid-template-columns: 1fr;
          }

          .concepts-result-header {
            flex-direction: column;
          }

          .concept-period-header {
            grid-template-columns: 1fr;
          }

          .concept-period-count {
            width: fit-content;
          }

          .concepts-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 520px) {
          .concepts-summary {
            grid-template-columns: 1fr;
          }

          .concepts-hero-actions .btn {
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
    <article className="concept-summary-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}