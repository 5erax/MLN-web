import { Link } from 'react-router-dom';

const footerLinks = [
  { to: '/bai-hoc', label: 'Bài học' },
  { to: '/on-thi', label: 'Ôn thi' },
  { to: '/tro-choi-on-tap', label: 'Ôn tập' },
  { to: '/tien-do', label: 'Tiến độ' },
];

const resourceLinks = [
  { to: '/triet-gia', label: 'Nhân vật' },
  { to: '/khai-niem', label: 'Chủ đề - văn kiện' },
  { to: '/nguon-hoc-lieu', label: 'Nguồn học liệu' },
  { to: '/so-sanh', label: 'So sánh' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon" aria-hidden="true">
                ★
              </span>

              <div className="footer-logo-text-wrap">
                <span className="footer-logo-text">Lịch sử Đảng</span>
                <span className="footer-logo-sub">
                  Đảng Cộng sản Việt Nam
                </span>
              </div>
            </Link>

            <p className="footer-desc">
              Nền tảng học tập giúp hệ thống hóa bài học, nhân vật, văn kiện,
              câu hỏi ôn thi và nguồn tham khảo Lịch sử Đảng.
            </p>
          </div>

          <nav className="footer-link-group" aria-label="Học tập">
            <span className="footer-title">Học tập</span>

            <div className="footer-links">
              {footerLinks.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav className="footer-link-group" aria-label="Tra cứu">
            <span className="footer-title">Tra cứu</span>

            <div className="footer-links">
              {resourceLinks.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="footer-note">
            <span className="footer-title">Ghi chú</span>

            <p>
              Nội dung dùng cho học tập, ôn luyện và tham khảo. Khi làm bài học
              thuật, nên đối chiếu với giáo trình và văn kiện chính thống.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} Lịch sử Đảng Cộng sản Việt Nam. Dữ liệu phục vụ mục đích
            giáo dục.
          </p>

          <div className="footer-badges" aria-label="Công nghệ">
            <span>React</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          flex-shrink: 0;
          margin-top: auto;
          color: var(--text-muted);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.92),
              rgba(250, 249, 246, 0.98)
            );
          border-top: 1px solid rgba(226, 232, 240, 0.9);
        }

        .footer-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 1.45rem 1.25rem 1rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: minmax(280px, 1.45fr) 0.8fr 0.9fr minmax(230px, 1fr);
          gap: 1.4rem;
          align-items: start;
        }

        .footer-brand {
          min-width: 0;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 0.78rem;
          color: var(--text);
          text-decoration: none;
          width: fit-content;
        }

        .footer-logo:hover {
          text-decoration: none;
        }

        .footer-logo-icon {
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 13px;
          background: var(--gradient-accent);
          color: white;
          font-size: 1.15rem;
          font-weight: 900;
          box-shadow: 0 10px 22px rgba(44, 82, 130, 0.16);
        }

        .footer-logo-text-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.2rem;
          min-width: 0;
          padding-top: 0.03rem;
        }

        .footer-logo-text {
          color: var(--text);
          font-size: 1.18rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1.12;
          white-space: nowrap;
        }

        .footer-logo-sub {
          display: block;
          color: var(--text-light);
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.11em;
          line-height: 1.25;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .footer-desc {
          max-width: 430px;
          margin: 0.75rem 0 0;
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.65;
        }

        .footer-title {
          display: block;
          margin-bottom: 0.55rem;
          color: var(--text);
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        .footer-links {
          display: grid;
          gap: 0.34rem;
        }

        .footer-links a {
          width: fit-content;
          color: var(--text-muted);
          font-size: 0.88rem;
          font-weight: 650;
          line-height: 1.35;
          text-decoration: none;
          transition:
            color var(--transition),
            transform var(--transition);
        }

        .footer-links a:hover {
          color: var(--accent);
          transform: translateX(2px);
          text-decoration: none;
        }

        .footer-note p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.86rem;
          line-height: 1.65;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-top: 1.1rem;
          padding-top: 0.85rem;
          border-top: 1px solid rgba(226, 232, 240, 0.9);
        }

        .footer-bottom p {
          margin: 0;
          color: var(--text-light);
          font-size: 0.8rem;
          line-height: 1.5;
        }

        .footer-badges {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 0.35rem;
          flex-shrink: 0;
        }

        .footer-badges span {
          display: inline-flex;
          align-items: center;
          min-height: 24px;
          padding: 0 0.55rem;
          border-radius: 999px;
          color: var(--text-light);
          background: white;
          border: 1px solid rgba(226, 232, 240, 0.95);
          font-size: 0.7rem;
          font-weight: 800;
        }

        @media (max-width: 980px) {
          .footer-top {
            grid-template-columns: 1.2fr 1fr 1fr;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-desc {
            max-width: 620px;
          }
        }

        @media (max-width: 700px) {
          .footer-inner {
            padding: 1.25rem 1rem 1rem;
          }

          .footer-top {
            grid-template-columns: 1fr;
            gap: 1.1rem;
          }

          .footer-bottom {
            align-items: flex-start;
            flex-direction: column;
          }

          .footer-badges {
            justify-content: flex-start;
          }
        }

        @media (max-width: 420px) {
          .footer-logo {
            gap: 0.65rem;
          }

          .footer-logo-icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            font-size: 1.05rem;
          }

          .footer-logo-text-wrap {
            gap: 0.18rem;
          }

          .footer-logo-text {
            font-size: 1.08rem;
            line-height: 1.12;
          }

          .footer-logo-sub {
            max-width: 230px;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 0.52rem;
            letter-spacing: 0.08em;
            line-height: 1.25;
          }
        }
      `}</style>
    </footer>
  );
}