import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { concepts as api } from '../api';
import { user as userApi } from '../api';
import { getStaticConcept } from '../data/staticPartyHistoryData';
import {
  createDefaultConceptDetail,
  getConceptDetailContent,
} from '../data/conceptDetailContent';

export default function ConceptDetail({ user }) {
  const { slug } = useParams();
  const [concept, setConcept] = useState(null);
  const [loading, setLoading] = useState(true);
  const [usedFallback, setUsedFallback] = useState(false);

  useEffect(() => {
    setLoading(true);
    setUsedFallback(false);

    api.get(slug)
      .then(({ concept: c }) => {
        const fallbackConcept = getStaticConcept(slug);
        const nextConcept = c || fallbackConcept;

        setConcept(nextConcept);
        setUsedFallback(!c && Boolean(fallbackConcept));
        setLoading(false);

        if (user && c?._id) {
          userApi.viewContent(c._id).catch(() => {});
        }
      })
      .catch(() => {
        setConcept(getStaticConcept(slug));
        setUsedFallback(true);
        setLoading(false);
      });
  }, [slug, user]);

  const detailContent = useMemo(() => {
    return (
      getConceptDetailContent(slug) ||
      createDefaultConceptDetail(concept)
    );
  }, [slug, concept]);

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

  if (!concept) {
    return (
      <div className="page page--narrow">
        <div className="empty-state">
          <div className="empty-icon" aria-hidden="true">
            ?
          </div>
          <p>Không tìm thấy chủ đề này.</p>
          <Link to="/khai-niem" className="btn btn-secondary btn-sm">
            Quay lại danh sách
          </Link>
        </div>
      </div>
    );
  }

  const keyPoints = detailContent?.keyPoints || [];
  const timeline = detailContent?.timeline || [];
  const examTips = detailContent?.examTips || [];
  const relatedPeople = detailContent?.relatedPeople || [];
  const relatedSources = detailContent?.relatedSources || [];

  return (
    <div className="page page--narrow cd-page">
      <Link to="/khai-niem" className="back-link">
        &larr; Chủ đề và văn kiện
      </Link>

      <article className="cd-article">
        <header className="cd-hero">
          <div className="cd-hero-icon" aria-hidden="true">
            📄
          </div>

          <div className="cd-hero-body">
            <div className="cd-badges">
              {concept.school && (
                <span className="badge badge-school">{concept.school}</span>
              )}

              {usedFallback && (
                <span className="cd-fallback-badge">
                  Dữ liệu dự phòng
                </span>
              )}
            </div>

            <h1>{concept.title}</h1>

            <p className="cd-hero-desc">
              {detailContent?.overview || concept.description}
            </p>

            <div className="cd-hero-actions">
              <Link to="/on-thi" className="btn btn-primary btn-sm">
                Luyện câu hỏi
              </Link>
              <Link to="/nguon-hoc-lieu" className="btn btn-outline btn-sm">
                Xem nguồn học liệu
              </Link>
            </div>
          </div>
        </header>

        <section className="cd-section cd-overview-section">
          <div className="cd-section-heading">
            <span className="cd-section-kicker">Tổng quan</span>
            <h2>Nội dung khái quát</h2>
          </div>

          <div className="cd-body-card">
            <p>{concept.description}</p>
          </div>
        </section>

        {keyPoints.length > 0 && (
          <section className="cd-section">
            <div className="cd-section-heading">
              <span className="cd-section-kicker">Cần nắm</span>
              <h2>Nội dung trọng tâm</h2>
            </div>

            <div className="cd-key-grid">
              {keyPoints.map((point, index) => (
                <article key={point} className="cd-key-card">
                  <span className="cd-key-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p>{point}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {timeline.length > 0 && (
          <section className="cd-section">
            <div className="cd-section-heading">
              <span className="cd-section-kicker">Mốc nhớ nhanh</span>
              <h2>Bối cảnh và dòng thời gian</h2>
            </div>

            <div className="cd-timeline">
              {timeline.map((item, index) => (
                <div key={item} className="cd-timeline-item">
                  <span className="cd-timeline-dot" aria-hidden="true" />
                  <div>
                    <span className="cd-timeline-index">
                      Mốc {index + 1}
                    </span>
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {examTips.length > 0 && (
          <section className="cd-section">
            <div className="cd-section-heading">
              <span className="cd-section-kicker">Ôn thi</span>
              <h2>Gợi ý câu hỏi thường gặp</h2>
            </div>

            <div className="cd-tip-list">
              {examTips.map((tip) => (
                <div key={tip} className="cd-tip-card">
                  <span aria-hidden="true">✓</span>
                  <p>{tip}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {(relatedPeople.length > 0 || relatedSources.length > 0) && (
          <section className="cd-section cd-related-section">
            <div className="cd-related-grid">
              {relatedPeople.length > 0 && (
                <article className="cd-related-card">
                  <div className="cd-section-heading">
                    <span className="cd-section-kicker">Liên hệ</span>
                    <h2>Nhân vật liên quan</h2>
                  </div>

                  <div className="cd-related-tags">
                    {relatedPeople.map((person) => (
                      <Link
                        key={person.slug}
                        to={`/triet-gia/${person.slug}`}
                      >
                        {person.name}
                      </Link>
                    ))}
                  </div>
                </article>
              )}

              {relatedSources.length > 0 && (
                <article className="cd-related-card">
                  <div className="cd-section-heading">
                    <span className="cd-section-kicker">Kiểm chứng</span>
                    <h2>Nguồn nên đối chiếu</h2>
                  </div>

                  <div className="cd-source-tags">
                    {relatedSources.map((source) => (
                      <span key={source}>{source}</span>
                    ))}
                  </div>

                  <Link
                    to="/nguon-hoc-lieu"
                    className="btn btn-outline btn-sm cd-source-link"
                  >
                    Mở thư viện nguồn
                  </Link>
                </article>
              )}
            </div>
          </section>
        )}

        <section className="cd-cta">
          <div className="cd-cta-inner">
            <div>
              <h2>Tiếp tục học chủ đề liên quan</h2>
              <p>
                Sau khi nắm chủ đề này, bạn có thể quay lại danh sách văn kiện
                hoặc luyện đề để kiểm tra khả năng ghi nhớ.
              </p>
            </div>

            <div className="cd-cta-actions">
              <Link to="/khai-niem" className="btn btn-outline btn-sm">
                Xem chủ đề khác
              </Link>
              <Link to="/on-thi" className="btn btn-primary btn-sm">
                Luyện đề ôn thi
              </Link>
            </div>
          </div>
        </section>
      </article>

      <style>{`
        .cd-page {
          padding-top: 1.5rem;
          padding-bottom: 4rem;
        }

        .cd-article {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .cd-hero {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 1.25rem;
          align-items: flex-start;
          padding: 1.75rem;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-2xl);
          background: var(--gradient-hero);
          box-shadow: var(--shadow);
        }

        .cd-hero::before {
          content: '';
          position: absolute;
          inset: auto -80px -120px auto;
          width: 260px;
          height: 260px;
          border-radius: 999px;
          background: rgba(197, 165, 90, 0.18);
          pointer-events: none;
        }

        .cd-hero-icon {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: var(--radius-lg);
          background: white;
          color: var(--accent);
          box-shadow: var(--shadow-xs);
          font-size: 1.6rem;
        }

        .cd-hero-body {
          position: relative;
          z-index: 1;
        }

        .cd-badges {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .cd-fallback-badge {
          display: inline-flex;
          width: fit-content;
          padding: 0.22rem 0.6rem;
          border-radius: 999px;
          background: #fff7ed;
          color: #c2410c;
          border: 1px solid #fed7aa;
          font-size: 0.72rem;
          font-weight: 800;
        }

        .cd-hero h1 {
          font-family: var(--font-serif);
          font-size: clamp(1.65rem, 4vw, 2.55rem);
          line-height: 1.14;
          margin: 0 0 0.85rem;
          color: var(--text);
        }

        .cd-hero-desc {
          margin: 0;
          color: var(--text-muted);
          font-size: 1.02rem;
          line-height: 1.75;
        }

        .cd-hero-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1.2rem;
        }

        .cd-section {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 1.5rem;
          box-shadow: var(--shadow-xs);
        }

        .cd-section-heading {
          margin-bottom: 1rem;
        }

        .cd-section-kicker {
          display: inline-flex;
          width: fit-content;
          margin-bottom: 0.35rem;
          border-radius: 999px;
          background: var(--accent-light);
          color: var(--accent);
          padding: 0.2rem 0.58rem;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .cd-section-heading h2 {
          margin: 0;
          font-family: var(--font-serif);
          color: var(--text);
          font-size: clamp(1.2rem, 3vw, 1.55rem);
          line-height: 1.25;
        }

        .cd-body-card {
          border-radius: var(--radius-lg);
          background: var(--bg-alt);
          padding: 1.1rem;
          border: 1px solid var(--border-light);
        }

        .cd-body-card p {
          margin: 0;
          color: var(--text);
          line-height: 1.8;
          font-size: 1rem;
        }

        .cd-key-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.9rem;
        }

        .cd-key-card {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0.8rem;
          align-items: flex-start;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1rem;
          background: var(--bg-alt);
        }

        .cd-key-number {
          width: 34px;
          height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--accent);
          color: white;
          font-weight: 800;
          font-size: 0.78rem;
          flex-shrink: 0;
        }

        .cd-key-card p {
          margin: 0;
          color: var(--text);
          line-height: 1.65;
        }

        .cd-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .cd-timeline-item {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0.85rem;
          align-items: flex-start;
          padding: 1rem;
          border-radius: var(--radius-lg);
          background: var(--bg-alt);
          border: 1px solid var(--border-light);
        }

        .cd-timeline-dot {
          width: 14px;
          height: 14px;
          margin-top: 0.35rem;
          border-radius: 50%;
          background: var(--accent-gold);
          box-shadow: 0 0 0 5px rgba(197, 165, 90, 0.14);
        }

        .cd-timeline-index {
          display: block;
          color: var(--text-light);
          font-weight: 800;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.25rem;
        }

        .cd-timeline-item p {
          margin: 0;
          color: var(--text);
          line-height: 1.65;
        }

        .cd-tip-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }

        .cd-tip-card {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0.7rem;
          align-items: flex-start;
          padding: 0.95rem 1rem;
          border-radius: var(--radius);
          background: var(--accent-green-light);
          border: 1px solid rgba(47, 133, 90, 0.16);
        }

        .cd-tip-card span {
          width: 24px;
          height: 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--accent-green);
          color: white;
          font-weight: 800;
          font-size: 0.78rem;
          flex-shrink: 0;
        }

        .cd-tip-card p {
          margin: 0;
          color: var(--text);
          line-height: 1.6;
          font-weight: 600;
        }

        .cd-related-section {
          background: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
        }

        .cd-related-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .cd-related-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 1.35rem;
          box-shadow: var(--shadow-xs);
        }

        .cd-related-tags,
        .cd-source-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .cd-related-tags a,
        .cd-source-tags span {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 0.42rem 0.7rem;
          border-radius: 999px;
          background: var(--bg-alt);
          border: 1px solid var(--border-light);
          color: var(--text-muted);
          font-size: 0.86rem;
          font-weight: 700;
        }

        .cd-related-tags a:hover {
          color: var(--accent);
          background: var(--accent-light);
          text-decoration: none;
          border-color: rgba(44, 82, 130, 0.18);
        }

        .cd-source-link {
          margin-top: 1rem;
        }

        .cd-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          background: var(--gradient-warm);
          border: 1px solid rgba(197, 165, 90, 0.15);
          border-radius: var(--radius-xl);
          padding: 1.5rem;
        }

        .cd-cta-inner h2 {
          margin: 0 0 0.35rem;
          font-family: var(--font-serif);
          color: var(--text);
          font-size: 1.35rem;
        }

        .cd-cta-inner p {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.65;
        }

        .cd-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: flex-end;
          flex-shrink: 0;
        }

        @media (max-width: 760px) {
          .cd-hero {
            grid-template-columns: 1fr;
            padding: 1.25rem;
          }

          .cd-hero-icon {
            width: 52px;
            height: 52px;
          }

          .cd-section {
            padding: 1.15rem;
          }

          .cd-key-grid,
          .cd-related-grid {
            grid-template-columns: 1fr;
          }

          .cd-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .cd-cta-actions {
            width: 100%;
            justify-content: flex-start;
          }

          .cd-cta-actions .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}