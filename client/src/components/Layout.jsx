import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../api';

export default function Layout({ user, loading, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const moreRef = useRef(null);
  const location = useLocation();

  const mainNavItems = [
    { to: '/', label: 'Trang chủ' },
    { to: '/bai-hoc', label: 'Bài học' },
    { to: '/on-thi', label: 'Ôn thi' },
    { to: '/tro-choi-on-tap', label: 'Ôn tập' },
    { to: '/tien-do', label: 'Tiến độ' },
  ];

  const secondaryNavItems = [
    { to: '/on-lai-cau-sai', label: 'Câu sai' },
    { to: '/nguon-hoc-lieu', label: 'Nguồn học liệu' },
    { to: '/triet-gia', label: 'Nhân vật' },
    { to: '/khai-niem', label: 'Chủ đề - văn kiện' },
    { to: '/so-sanh', label: 'So sánh' },
    { to: '/thong-ke', label: 'Thống kê' },
  ];

  const allMobileNavItems = [...mainNavItems, ...secondaryNavItems];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isMoreActive = secondaryNavItems.some((item) => isActive(item.to));

  const closeMenus = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  useEffect(() => {
    closeMenus();
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!moreRef.current) return;
      if (!moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  const renderNavLink = (item, className = 'nav-link') => (
    <Link
      key={item.to}
      to={item.to}
      className={`${className} ${isActive(item.to) ? 'active' : ''}`}
      onClick={closeMenus}
    >
      {item.label}
      {isActive(item.to) && <span className="nav-indicator" />}
    </Link>
  );

  const authBlock = user ? (
    <>
      <Link
        to="/dashboard"
        className={`nav-link nav-link-dashboard ${
          isActive('/dashboard') ? 'active' : ''
        }`}
        onClick={closeMenus}
      >
        Dashboard
        {isActive('/dashboard') && <span className="nav-indicator" />}
      </Link>

      <div className="user-menu">
        <img
          src={user.avatar || '/avatar.svg'}
          alt={user.name || 'User'}
          className="avatar-small"
        />
        <span className="user-name">{user.name}</span>
        <button
          type="button"
          className="btn-logout"
          onClick={() => {
            onLogout();
            closeMenus();
          }}
        >
          Thoát
        </button>
      </div>
    </>
  ) : (
    <a href={auth.loginUrl()} className="btn-login" onClick={closeMenus}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          fill="#EA4335"
        />
      </svg>
      Đăng nhập
    </a>
  );

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <Link to="/" className="logo" onClick={closeMenus}>
            <span className="logo-icon" aria-hidden="true">
              ★
            </span>

            <div className="logo-text-wrap">
              <span className="logo-text">Lịch sử Đảng</span>
              <span className="logo-sub">Đảng Cộng sản Việt Nam</span>
            </div>
          </Link>

          <nav className="nav nav-desktop" aria-label="Menu chính">
            {mainNavItems.map((item) => renderNavLink(item))}

            <div className="nav-more" ref={moreRef}>
              <button
                type="button"
                className={`nav-link nav-more-button ${
                  moreOpen || isMoreActive ? 'active' : ''
                }`}
                onClick={() => setMoreOpen((value) => !value)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
              >
                Thêm
                <span className={`nav-chevron ${moreOpen ? 'open' : ''}`}>
                  ▾
                </span>
                {isMoreActive && <span className="nav-indicator" />}
              </button>

              {moreOpen && (
                <div className="nav-more-menu" role="menu">
                  {secondaryNavItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`nav-more-link ${
                        isActive(item.to) ? 'active' : ''
                      }`}
                      onClick={closeMenus}
                      role="menuitem"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {loading ? null : authBlock}
          </nav>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={menuOpen}
          >
            <span className="hamburger" data-open={menuOpen} />
            <span className="hamburger" data-open={menuOpen} />
            <span className="hamburger" data-open={menuOpen} />
          </button>
        </div>

        {menuOpen && (
          <button
            type="button"
            className="nav-overlay"
            onClick={closeMenus}
            aria-label="Đóng menu"
          />
        )}

        <nav
          className={`nav nav-mobile ${menuOpen ? 'open' : ''}`}
          aria-hidden={!menuOpen}
          aria-label="Menu mobile"
        >
          <div className="nav-mobile-section">
            <span className="nav-mobile-title">Học tập</span>
            {allMobileNavItems.map((item) => renderNavLink(item))}
          </div>

          <div className="nav-mobile-section nav-mobile-auth">
            <span className="nav-mobile-title">Tài khoản</span>
            {loading ? null : authBlock}
          </div>
        </nav>
      </header>

      <style>{`
        .site-header {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid transparent;
          position: sticky;
          top: 0;
          z-index: 50;
          transition: border-color var(--transition), box-shadow var(--transition);
        }

        .site-header.scrolled {
          border-bottom-color: var(--border-light);
          box-shadow: 0 4px 20px rgba(44, 82, 130, 0.08);
        }

        .header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.25rem;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .logo {
          color: var(--text);
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-shrink: 0;
          min-width: 0;
        }

        .logo:hover {
          text-decoration: none;
        }

        .logo-icon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-accent);
          color: white;
          border-radius: var(--radius-sm);
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 700;
          flex-shrink: 0;
          transition: transform var(--transition);
        }

        .logo:hover .logo-icon {
          transform: scale(1.05);
        }

        .logo-text-wrap {
          display: flex;
          flex-direction: column;
          gap: 0;
          min-width: 0;
        }

        .logo-text {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          line-height: 1.15;
          color: var(--text);
          transition: color var(--transition);
          white-space: nowrap;
        }

        .logo-sub {
          font-size: 0.65rem;
          color: var(--text-light);
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          line-height: 1;
          white-space: nowrap;
        }

        .logo:hover .logo-text {
          color: var(--accent);
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .nav-link {
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.88rem;
          padding: 0.42rem 0.72rem;
          border-radius: var(--radius-sm);
          transition: all var(--transition);
          position: relative;
          white-space: nowrap;
          border: none;
          background: transparent;
          font-family: inherit;
          cursor: pointer;
          line-height: 1.2;
        }

        .nav-link:hover {
          color: var(--accent);
          background: var(--accent-light);
          text-decoration: none;
        }

        .nav-link.active {
          color: var(--accent);
          background: var(--accent-light);
          font-weight: 700;
        }

        .nav-indicator {
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 2px;
          background: var(--accent);
          border-radius: 99px;
          animation: scaleIn 0.2s ease-out;
        }

        .nav-more {
          position: relative;
        }

        .nav-more-button {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .nav-chevron {
          font-size: 0.72rem;
          transition: transform var(--transition);
        }

        .nav-chevron.open {
          transform: rotate(180deg);
        }

        .nav-more-menu {
          position: absolute;
          top: calc(100% + 0.55rem);
          right: 0;
          min-width: 220px;
          padding: 0.45rem;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.98);
          box-shadow: var(--shadow-md);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 120;
          animation: fadeInUp 0.16s ease-out;
        }

        .nav-more-link {
          display: block;
          color: var(--text-muted);
          padding: 0.7rem 0.8rem;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.88rem;
          transition: all var(--transition);
          white-space: nowrap;
        }

        .nav-more-link:hover,
        .nav-more-link.active {
          color: var(--accent);
          background: var(--accent-light);
          text-decoration: none;
        }

        .avatar-small {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--border-light);
          flex-shrink: 0;
          transition: border-color var(--transition), transform 0.2s ease, box-shadow 0.2s ease;
        }

        .avatar-small:hover {
          border-color: var(--accent);
          transform: scale(1.08);
          box-shadow: 0 2px 8px rgba(44, 82, 130, 0.2);
        }

        .user-menu {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding-left: 0.5rem;
          border-left: 1px solid var(--border-light);
          margin-left: 0.25rem;
        }

        .user-name {
          font-size: 0.86rem;
          color: var(--text-muted);
          max-width: 105px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .btn-logout {
          background: none;
          border: 1px solid var(--border);
          color: var(--text-muted);
          padding: 0.3rem 0.62rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-size: 0.8rem;
          font-family: inherit;
          font-weight: 600;
          transition: all var(--transition);
        }

        .btn-logout:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--accent-light);
        }

        .btn-login {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--gradient-accent);
          color: white !important;
          padding: 0.45rem 0.9rem;
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.86rem;
          transition: all var(--transition);
          box-shadow: var(--shadow-xs);
          white-space: nowrap;
        }

        .btn-login:hover {
          box-shadow: var(--shadow-accent);
          text-decoration: none;
          transform: translateY(-1px);
        }

        .btn-login:active {
          transform: translateY(0) scale(0.98);
        }

        .btn-login svg {
          flex-shrink: 0;
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 42px;
          height: 42px;
          padding: 0;
          background: none;
          border: none;
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: background var(--transition);
          flex-shrink: 0;
        }

        .menu-toggle:hover {
          background: var(--accent-light);
        }

        .hamburger {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--accent);
          border-radius: 2px;
          transition: transform var(--transition-slow), opacity var(--transition);
        }

        .hamburger[data-open="true"]:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .hamburger[data-open="true"]:nth-child(2) {
          opacity: 0;
        }

        .hamburger[data-open="true"]:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .nav-overlay {
          display: none;
          position: fixed;
          inset: 64px 0 0;
          background: rgba(15, 23, 42, 0.24);
          z-index: 90;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        .nav-mobile {
          display: none;
          flex-direction: column;
          padding: 0 1.25rem;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid var(--border-light);
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-slow), padding var(--transition-slow);
          position: relative;
          z-index: 91;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);
        }

        .nav-mobile.open {
          max-height: calc(100dvh - 64px);
          padding: 0.85rem 1.25rem 1.15rem;
          overflow-y: auto;
        }

        .nav-mobile-section {
          display: flex;
          flex-direction: column;
          gap: 0.18rem;
        }

        .nav-mobile-title {
          display: block;
          color: var(--text-light);
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.45rem 0.75rem 0.25rem;
        }

        .nav-mobile .nav-link {
          width: 100%;
          padding: 0.78rem 0.8rem;
          font-size: 0.96rem;
          border-radius: var(--radius-sm);
          text-align: left;
        }

        .nav-mobile .nav-indicator {
          display: none;
        }

        .nav-mobile-auth {
          padding-top: 0.55rem;
          border-top: 1px solid var(--border-light);
        }

        .nav-mobile .user-menu {
          padding: 0.75rem 0.8rem;
          border-left: none;
          margin-left: 0;
          flex-wrap: wrap;
          background: var(--bg-alt);
          border-radius: var(--radius);
        }

        .nav-mobile .btn-login {
          margin: 0.3rem 0.75rem 0.5rem;
          justify-content: center;
          width: calc(100% - 1.5rem);
        }

        @media (max-width: 1100px) {
          .nav-link {
            padding-left: 0.58rem;
            padding-right: 0.58rem;
            font-size: 0.84rem;
          }

          .user-name {
            display: none;
          }
        }

        @media (max-width: 920px) {
          .nav-desktop {
            display: none;
          }

          .menu-toggle {
            display: flex;
          }

          .nav-mobile {
            display: flex;
          }

          .nav-overlay {
            display: block;
          }
        }

        @media (min-width: 921px) {
          .nav-mobile {
            display: none !important;
          }

          .nav-overlay {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .header-inner {
            height: 60px;
            padding: 0 1rem;
            gap: 0.75rem;
          }

          .logo {
            gap: 0.55rem;
          }

          .logo-icon {
            width: 34px;
            height: 34px;
            font-size: 1.05rem;
          }

          .logo-text {
            font-size: 1.05rem;
            line-height: 1.1;
          }

          .logo-sub {
            font-size: 0.52rem;
            letter-spacing: 0.06em;
            max-width: 210px;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .menu-toggle {
            width: 40px;
            height: 40px;
          }

          .nav-overlay {
            inset: 60px 0 0;
          }

          .nav-mobile.open {
            max-height: calc(100dvh - 60px);
          }
        }

        @media (max-width: 360px) {
          .logo-sub {
            display: none;
          }

          .logo-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}