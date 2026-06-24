export default function LessonSources({ sources = [] }) {
  if (!sources.length) {
    return (
      <section className="lesson-sources lesson-sources--empty">
        <div className="lesson-sources-header">
          <span className="lesson-sources-icon" aria-hidden="true">📚</span>
          <div>
            <h2>Nguồn tham khảo</h2>
            <p>
              Bài học này chưa được gắn nguồn tham khảo riêng. Hãy đối chiếu với giáo trình
              và văn kiện chính thống khi sử dụng để ôn thi.
            </p>
          </div>
        </div>

        <style>{lessonSourcesStyle}</style>
      </section>
    );
  }

  return (
    <section className="lesson-sources">
      <div className="lesson-sources-header">
        <span className="lesson-sources-icon" aria-hidden="true">📚</span>
        <div>
          <h2>Nguồn tham khảo</h2>
          <p>
            Các nguồn dưới đây nên được dùng để đối chiếu mốc thời gian, văn kiện,
            khái niệm và nhận định quan trọng trong bài học.
          </p>
        </div>
      </div>

      <div className="lesson-sources-grid">
        {sources.map((source, index) => (
          <article key={`${source.title}-${index}`} className="lesson-source-card">
            <span className="lesson-source-index">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className="lesson-source-content">
              <h3>{source.title}</h3>
              {source.publisher && (
                <p className="lesson-source-publisher">{source.publisher}</p>
              )}
              {source.note && (
                <p className="lesson-source-note">{source.note}</p>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="lesson-source-warning">
        <strong>Lưu ý:</strong> Khi có sự khác biệt giữa tài liệu tóm tắt và giáo trình/văn kiện,
        hãy ưu tiên giáo trình, văn kiện gốc hoặc hướng dẫn của giảng viên.
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
  }

  .lesson-sources-header p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.65;
    font-size: 0.95rem;
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
    font-weight: 700;
    font-size: 0.78rem;
    flex-shrink: 0;
  }

  .lesson-source-content h3 {
    margin: 0 0 0.25rem;
    font-size: 1rem;
    color: var(--text);
    line-height: 1.4;
  }

  .lesson-source-publisher {
    margin: 0 0 0.45rem;
    color: var(--accent);
    font-size: 0.84rem;
    font-weight: 700;
  }

  .lesson-source-note {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.6;
    font-size: 0.9rem;
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
  }
`;