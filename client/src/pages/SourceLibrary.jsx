import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    sourceCategories,
    sourceUsageRules,
} from '../data/sourceLibraryData';

export default function SourceLibrary() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [keyword, setKeyword] = useState('');

    const allSources = useMemo(() => {
        return sourceCategories.flatMap((category) =>
            category.sources.map((source) => ({
                ...source,
                categoryId: category.id,
                categoryTitle: category.title,
                categoryIcon: category.icon,
            }))
        );
    }, []);

    const filteredSources = useMemo(() => {
        const normalizedKeyword = keyword.trim().toLowerCase();

        return allSources.filter((source) => {
            const matchesCategory =
                activeCategory === 'all' || source.categoryId === activeCategory;

            const searchableText = [
                source.title,
                source.publisher,
                source.type,
                source.sourceType,
                source.reliabilityLevel,
                source.usage,
                source.reliability,
                source.categoryTitle,
                ...(source.relatedLessons || []),
            ]
                .join(' ')
                .toLowerCase();

            const matchesKeyword =
                !normalizedKeyword || searchableText.includes(normalizedKeyword);

            return matchesCategory && matchesKeyword;
        });
    }, [activeCategory, keyword, allSources]);

    return (
        <div className="page page--wide source-page">
            <header className="source-hero">
                <span className="badge badge-school">Học liệu đáng tin cậy</span>
                <h1 className="page-title">Nguồn học liệu Lịch sử Đảng</h1>
                <p className="page-desc">
                    Tập hợp các nhóm giáo trình, văn kiện và tài liệu tham khảo để xây dựng bài học,
                    quiz và trò chơi ôn tập có cơ sở kiểm chứng rõ ràng.
                </p>

                <div className="source-hero-actions">
                    <Link to="/bai-hoc" className="btn btn-primary">
                        Xem bài học
                    </Link>
                    <Link to="/tro-choi-on-tap" className="btn btn-outline">
                        Ôn tập tương tác
                    </Link>
                </div>
            </header>

            <section className="source-rules">
                <div className="source-section-heading">
                    <h2>Quy tắc sử dụng nguồn</h2>
                    <p>
                        Dùng các nguyên tắc này khi thêm bài mới, sửa nội dung hoặc tạo câu hỏi ôn tập.
                    </p>
                </div>

                <div className="source-rules-grid">
                    {sourceUsageRules.map((rule) => (
                        <article key={rule.title} className="source-rule-card">
                            <h3>{rule.title}</h3>
                            <p>{rule.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="source-filter-panel">
                <div className="source-filter-top">
                    <div>
                        <h2>Thư viện nguồn</h2>
                        <p>
                            Lọc theo nhóm tài liệu hoặc tìm kiếm theo tên văn kiện, giáo trình, bài học liên quan.
                        </p>
                    </div>

                    <label className="source-search">
                        <span>Tìm kiếm</span>
                        <input
                            type="search"
                            value={keyword}
                            onChange={(event) => setKeyword(event.target.value)}
                            placeholder="Ví dụ: Cương lĩnh, đổi mới, Đại hội VI..."
                        />
                    </label>
                </div>

                <div className="source-tabs" aria-label="Lọc nguồn học liệu">
                    <button
                        type="button"
                        className={activeCategory === 'all' ? 'active' : ''}
                        onClick={() => setActiveCategory('all')}
                    >
                        Tất cả
                    </button>

                    {sourceCategories.map((category) => (
                        <button
                            key={category.id}
                            type="button"
                            className={activeCategory === category.id ? 'active' : ''}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <span aria-hidden="true">{category.icon}</span>
                            {category.title}
                        </button>
                    ))}
                </div>
            </section>

            <section className="source-results">
                <div className="source-result-count">
                    Hiển thị <strong>{filteredSources.length}</strong> nguồn học liệu
                </div>

                {filteredSources.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-icon" aria-hidden="true">
                            📚
                        </div>
                        <p>Không tìm thấy nguồn phù hợp với bộ lọc hiện tại.</p>
                    </div>
                ) : (
                    <div className="source-grid">
                        {filteredSources.map((source) => (
                            <article key={source.id} className="source-card">
                                <div className="source-card-top">
                                    <span className="source-card-icon" aria-hidden="true">
                                        {source.categoryIcon}
                                    </span>
                                    <div>
                                        <span className="source-card-category">
                                            {source.categoryTitle}
                                        </span>
                                        <h3>{source.title}</h3>
                                        {source.reliabilityLevel && (
                                            <span className="source-reliability-badge">
                                                {source.reliabilityLevel}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <dl className="source-meta">
                                    <div>
                                        <dt>Loại tài liệu</dt>
                                        <dd>{source.type}</dd>
                                    </div>
                                    <div>
                                        <dt>Nguồn / đơn vị</dt>
                                        <dd>{source.publisher}</dd>
                                    </div>
                                    {source.sourceType && (
                                        <div>
                                            <dt>Nhóm nguồn</dt>
                                            <dd>{source.sourceType}</dd>
                                        </div>
                                    )}
                                </dl>

                                <div className="source-info-block">
                                    <h4>Cách dùng trong web</h4>
                                    <p>{source.usage}</p>
                                </div>

                                <div className="source-info-block">
                                    <h4>Độ tin cậy</h4>
                                    <p>{source.reliability}</p>
                                </div>

                                <div className="source-related">
                                    <h4>Bài học liên quan</h4>
                                    <div className="source-related-tags">
                                        {(source.relatedLessons || []).map((lesson) => (
                                            <span key={lesson}>{lesson}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="source-card-actions">
                                    {source.url ? (
                                        <a
                                            href={source.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="source-open-link"
                                        >
                                            Mở nguồn chính thống ↗
                                        </a>
                                    ) : (
                                        <span className="source-no-link">
                                            Tài liệu nội bộ / cần upload riêng
                                        </span>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>

            <style>{`
        .source-page {
          padding-bottom: 4rem;
        }

        .source-hero {
          text-align: center;
          margin-bottom: 2.5rem;
          padding: 2.5rem 1.5rem;
          border-radius: var(--radius-2xl);
          background: var(--gradient-hero);
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow);
        }

        .source-hero .page-desc {
          margin-left: auto;
          margin-right: auto;
        }

        .source-hero-actions {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1.25rem;
        }

        .source-section-heading {
          margin-bottom: 1.25rem;
        }

.source-section-heading h2,
.source-filter-top h2 {
          font-family: var(--font-serif);
          color: var(--text);
          margin: 0 0 0.35rem;
          font-size: 1.45rem;
        }

.source-section-heading p,
.source-filter-top p {
          color: var(--text-muted);
          margin: 0;
          line-height: 1.65;
        }

        .source-rules {
          margin-bottom: 2.5rem;
        }

        .source-rules-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 1rem;
        }

        .source-rule-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1rem;
          box-shadow: var(--shadow-xs);
        }

        .source-rule-card h3 {
          margin: 0 0 0.5rem;
          font-size: 0.98rem;
          color: var(--accent);
        }

        .source-rule-card p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.6;
        }

        .source-filter-panel {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          margin-bottom: 1.5rem;
          box-shadow: var(--shadow-xs);
        }

        .source-filter-top {
          display: grid;
          grid-template-columns: 1fr minmax(240px, 360px);
          gap: 1rem;
          align-items: end;
          margin-bottom: 1rem;
        }

        .source-search {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .source-search span {
          font-size: 0.78rem;
          color: var(--text-light);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .source-search input {
          width: 100%;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 0.75rem 0.9rem;
          font: inherit;
          color: var(--text);
          background: var(--bg-alt);
          outline: none;
          transition: border-color var(--transition), box-shadow var(--transition);
        }

        .source-search input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(44, 82, 130, 0.12);
        }

        .source-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .source-tabs button {
          border: 1px solid var(--border);
          background: var(--bg-alt);
          color: var(--text-muted);
          border-radius: 99px;
          padding: 0.55rem 0.85rem;
          font-family: inherit;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          transition: all var(--transition);
        }

        .source-tabs button:hover,
        .source-tabs button.active {
          color: white;
          background: var(--accent);
          border-color: var(--accent);
          box-shadow: var(--shadow-accent);
        }

        .source-result-count {
          color: var(--text-muted);
          margin-bottom: 1rem;
          font-size: 0.92rem;
        }

        .source-result-count strong {
          color: var(--accent);
        }

        .source-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.25rem;
        }

        .source-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          box-shadow: var(--shadow);
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .source-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .source-card-top {
          display: flex;
          gap: 0.9rem;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .source-card-icon {
          width: 46px;
          height: 46px;
          border-radius: var(--radius);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-light);
          font-size: 1.35rem;
          flex-shrink: 0;
        }

        .source-card-category {
          color: var(--text-light);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .source-card h3 {
          margin: 0.2rem 0 0;
          font-family: var(--font-serif);
          color: var(--text);
          font-size: 1.15rem;
          line-height: 1.35;
        }

        .source-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin: 0 0 1rem;
        }

        .source-meta div {
          background: var(--bg-alt);
          border: 1px solid var(--border-light);
          border-radius: var(--radius);
          padding: 0.75rem;
        }

        .source-meta dt {
          color: var(--text-light);
          font-size: 0.74rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .source-meta dd {
          margin: 0;
          color: var(--text);
          font-size: 0.9rem;
          line-height: 1.45;
        }

        .source-info-block {
          margin-bottom: 0.9rem;
        }

        .source-info-block h4,
        .source-related h4 {
          margin: 0 0 0.35rem;
          color: var(--accent);
          font-size: 0.92rem;
        }

        .source-info-block p {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.65;
          font-size: 0.92rem;
        }

        .source-related-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .source-related-tags span {
          background: var(--accent-gold-light);
          color: var(--accent-gold);
          border-radius: 99px;
          padding: 0.25rem 0.6rem;
          font-size: 0.78rem;
          font-weight: 600;
        }
.source-reliability-badge {
  display: inline-flex;
  width: fit-content;
  margin-top: 0.45rem;
  border-radius: 999px;
  background: var(--accent-green-light);
  color: var(--accent-green);
  padding: 0.22rem 0.6rem;
  font-size: 0.74rem;
  font-weight: 800;
}

.source-meta {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.source-card-actions {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-light);
}

.source-open-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 42px;
  border-radius: var(--radius);
  background: var(--accent);
  color: white;
  font-weight: 800;
  text-decoration: none;
  transition: transform var(--transition), box-shadow var(--transition);
}

.source-open-link:hover {
  color: white;
  text-decoration: none;
  transform: translateY(-1px);
  box-shadow: var(--shadow-accent);
}

.source-no-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 42px;
  border-radius: var(--radius);
  background: var(--bg-alt);
  color: var(--text-light);
  border: 1px dashed var(--border);
  font-size: 0.86rem;
  font-weight: 700;
}

        @media (max-width: 980px) {
          .source-rules-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .source-filter-top,
          .source-grid,
          .source-meta {
            grid-template-columns: 1fr;
          }

          .source-rules-grid {
            grid-template-columns: 1fr;
          }

          .source-hero {
            padding: 1.75rem 1rem;
          }
        }
      `}</style>
        </div>
    );
}