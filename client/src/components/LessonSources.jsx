import { Link } from 'react-router-dom';

function createSourceSearchUrl(source) {
  const query = source?.title || source?.publisher || 'nguồn học liệu';
  return `/nguon-hoc-lieu?q=${encodeURIComponent(query)}`;
}

export default function LessonSources({ sources = [] }) {
  if (!sources.length) {
    return (
      <section className="lesson-sources lesson-sources--empty">
        <div className="lesson-sources-header">
          <span className="lesson-sources-icon" aria-hidden="true">
            📚
          </span>

          <div>
            <h2>Nguồn tham khảo</h2>
            <p>
              Bài học này chưa được gắn nguồn riêng. Bạn có thể mở thư viện học
              liệu để đối chiếu với giáo trình, văn kiện và tài liệu chính thống.
            </p>
          </div>
        </div>

        <div className="lesson-source-empty-actions">
          <Link to="/nguon-hoc-lieu" className="btn btn-outline btn-sm">
            Mở thư viện nguồn
          </Link>
        </div>

        <style>{lessonSourcesStyle}</style>
      </section>
    );
  }

  return (
    <section className="lesson-sources">
      <div className="lesson-sources-header">
        <span className="lesson-sources-icon" aria-hidden="true">
          📚
        </span>

        <div>
          <h2>Nguồn tham khảo</h2>
          <p>
            Các nguồn dưới đây dùng để đối chiếu mốc thời gian, văn kiện, khái
            niệm và nhận định quan trọng trong bài học.
          </p>
        </div>
      </div>

      <div className="lesson-sources-grid">
        {sources.map((source, index) => (
          <article
            key={`${source.title}-${index}`}
            className="lesson-source-card"
          >
            <span className="lesson-source-index">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className="lesson-source-content">
              <div className="lesson-source-main">
                <h3>{source.title}</h3>

                {source.publisher && (
                  <p className="lesson-source-publisher">{source.publisher}</p>
                )}

                {source.note && (
                  <p className="lesson-source-note">{source.note}</p>
                )}
              </div>

              <div className="lesson-source-actions">
                <Link
                  to={createSourceSearchUrl(source)}
                  className="lesson-source-link"
                >
                  Xem trong thư viện nguồn →
                </Link>

                {source.url && (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lesson-source-external"
                  >
                    Mở nguồn gốc ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="lesson-source-warning">
        <strong>Lưu ý:</strong> Khi có sự khác biệt giữa phần tóm tắt và giáo
        trình hoặc văn kiện, hãy ưu tiên giáo trình, văn kiện gốc hoặc hướng dẫn
        của giảng viên.
      </div>

      <style>{lessonSourcesStyle}</style>
    </section>
  );
}

const lessonSourcesStyle = `
  .lesson-sources {
    margin: 2.5rem 0;
    padding: 1.5rem;
    border: 1px solid var(--border-light);
    border-radius: var(--radius-lg);
    background: var(--bg-card);
    box-shadow: var(--shadow);
  }

  .lesson-sources--empty {
    background: var(--bg-alt);
    border-style: dashed;
  }

  .lesson-sources-header {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    margin-bottom: 1.25rem;
  }

  .lesson-sources-icon {
    width: 48px;
    height: 48px;
    border-radius: var(--radius);
    background: var(--accent-light);
    color: var(--accent);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.35rem;
    flex-shrink: 0;
  }

  .lesson-sources-header h2 {
    margin: 0 0 0.35rem;
    color: var(--text);
    font-family: var(--font-serif);
    font-size: 1.25rem;
    line-height: 1.25;
  }

  .lesson-sources-header p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.65;
    font-size: 0.95rem;
  }

  .lesson-source-empty-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .lesson-sources-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.85rem;
  }

  .lesson-source-card {
    display: flex;
    gap: 0.9rem;
    padding: 1rem;
    border: 1px solid var(--border-light);
    border-radius: var(--radius);
    background: var(--gradient-card);
    transition:
      border-color var(--transition),
      box-shadow var(--transition),
      transform var(--transition);
  }

  .lesson-source-card:hover {
    border-color: rgba(44, 82, 130, 0.2);
    box-shadow: var(--shadow-xs);
    transform: translateY(-1px);
  }

  .lesson-source-index {
    width: 36px;
    height: 36px;
    border-radius: 999px;
    background: var(--accent);
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 0.78rem;
    flex-shrink: 0;
  }

  .lesson-source-content {
    min-width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  .lesson-source-main h3 {
    margin: 0 0 0.25rem;
    font-size: 1rem;
    color: var(--text);
    line-height: 1.4;
  }

  .lesson-source-publisher {
    margin: 0 0 0.45rem;
    color: var(--accent);
    font-size: 0.84rem;
    font-weight: 800;
  }

  .lesson-source-note {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.6;
    font-size: 0.9rem;
  }

  .lesson-source-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    align-items: center;
  }

  .lesson-source-link,
  .lesson-source-external {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 34px;
    border-radius: 999px;
    padding: 0.35rem 0.75rem;
    font-size: 0.82rem;
    font-weight: 800;
    text-decoration: none;
    transition:
      color var(--transition),
      background var(--transition),
      border-color var(--transition),
      transform var(--transition);
  }

  .lesson-source-link {
    color: white;
    background: var(--accent);
    border: 1px solid var(--accent);
  }

  .lesson-source-link:hover {
    color: white;
    background: var(--accent-hover);
    border-color: var(--accent-hover);
    text-decoration: none;
    transform: translateY(-1px);
  }

  .lesson-source-external {
    color: var(--accent);
    background: var(--accent-light);
    border: 1px solid rgba(44, 82, 130, 0.14);
  }

  .lesson-source-external:hover {
    color: var(--accent);
    background: white;
    border-color: rgba(44, 82, 130, 0.24);
    text-decoration: none;
    transform: translateY(-1px);
  }

  .lesson-source-warning {
    margin-top: 1rem;
    padding: 0.85rem 1rem;
    border-left: 4px solid var(--accent-gold);
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    background: var(--accent-gold-light);
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .lesson-source-warning strong {
    color: var(--accent-gold);
  }

  @media (max-width: 640px) {
    .lesson-sources {
      padding: 1.15rem;
    }

    .lesson-sources-header,
    .lesson-source-card {
      flex-direction: column;
    }

    .lesson-source-index {
      width: 34px;
      height: 34px;
    }

    .lesson-source-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .lesson-source-link,
    .lesson-source-external {
      width: 100%;
    }
  }
`;