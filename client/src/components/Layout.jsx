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
        className={`nav-link nav-link-dashboard ${isActive('/dashboard') ? 'active' : ''
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
                className={`nav-link nav-more-button ${moreOpen || isMoreActive ? 'active' : ''
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
                      className={`nav-more-link ${isActive(item.to) ? 'active' : ''
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
    position: sticky;
    top: 0;
    z-index: 50;
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.96),
        rgba(255, 255, 255, 0.88)
      );
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border-bottom: 1px solid rgba(226, 232, 240, 0.8);
    transition:
      border-color var(--transition),
      box-shadow var(--transition),
      background var(--transition);
  }

  .site-header.scrolled {
    background: rgba(255, 255, 255, 0.94);
    border-bottom-color: rgba(203, 213, 225, 0.95);
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  }

  .header-inner {
    max-width: 1380px;
    margin: 0 auto;
    padding: 0 2rem;
    min-height: 76px;
    display: grid;
    grid-template-columns: minmax(240px, 340px) 1fr;
    align-items: center;
    gap: 1.4rem;
  }

  .logo {
  color: var(--text);
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  width: fit-content;
  min-width: 0;
  text-decoration: none;
}

.logo:hover {
  text-decoration: none;
}

.logo-icon {
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-accent);
  color: white;
  border-radius: 14px;
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 800;
  box-shadow:
    0 12px 28px rgba(44, 82, 130, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
  flex-shrink: 0;
  transition: transform var(--transition), box-shadow var(--transition);
}

.logo:hover .logo-icon {
  transform: translateY(-1px) scale(1.03);
}

.logo-text-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.22rem;
  min-width: 0;
  padding-top: 0.05rem;
}

.logo-text {
  font-family: var(--font-sans);
  font-size: 1.34rem;
  font-weight: 900;
  letter-spacing: -0.035em;
  line-height: 1.08;
  color: var(--text);
  white-space: nowrap;
  transition: color var(--transition);
}

.logo-sub {
  display: block;
  color: var(--text-light);
  font-size: 0.64rem;
  font-weight: 800;
  letter-spacing: 0.13em;
  line-height: 1.25;
  text-transform: uppercase;
  white-space: nowrap;
}

.logo:hover .logo-text {
  color: var(--accent);
}

  .nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-width: 0;
  }

  .nav-desktop {
    gap: 0.35rem;
  }

  .nav-link {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    color: #596074;
    font-weight: 780;
    font-size: 0.93rem;
    line-height: 1;
    padding: 0 0.82rem;
    border-radius: 999px;
    border: 1px solid transparent;
    background: transparent;
    font-family: inherit;
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    transition:
      color var(--transition),
      background var(--transition),
      border-color var(--transition),
      box-shadow var(--transition),
      transform var(--transition);
  }

  .nav-link:hover {
    color: var(--accent);
    background: rgba(44, 82, 130, 0.075);
    border-color: rgba(44, 82, 130, 0.08);
    text-decoration: none;
  }

  .nav-link.active {
    color: var(--accent);
    background: rgba(44, 82, 130, 0.11);
    border-color: rgba(44, 82, 130, 0.1);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.38);
    font-weight: 850;
  }

  .nav-indicator {
    position: absolute;
    left: 50%;
    bottom: -8px;
    width: 18px;
    height: 2px;
    transform: translateX(-50%);
    background: var(--accent);
    border-radius: 999px;
    animation: scaleIn 0.2s ease-out;
  }

  .nav-more {
    position: relative;
  }

  .nav-more-button {
    gap: 0.32rem;
  }

  .nav-chevron {
    display: inline-flex;
    font-size: 0.7rem;
    opacity: 0.72;
    transition: transform var(--transition);
  }

  .nav-chevron.open {
    transform: rotate(180deg);
  }

  .nav-more-menu {
    position: absolute;
    top: calc(100% + 0.7rem);
    right: 0;
    min-width: 250px;
    padding: 0.55rem;
    border: 1px solid rgba(226, 232, 240, 0.95);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.98);
    box-shadow:
      0 22px 60px rgba(15, 23, 42, 0.13),
      0 0 0 1px rgba(255, 255, 255, 0.8) inset;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    z-index: 120;
    animation: fadeInUp 0.16s ease-out;
  }

  .nav-more-menu::before {
    content: '';
    position: absolute;
    top: -7px;
    right: 24px;
    width: 14px;
    height: 14px;
    background: rgba(255, 255, 255, 0.98);
    border-left: 1px solid rgba(226, 232, 240, 0.95);
    border-top: 1px solid rgba(226, 232, 240, 0.95);
    transform: rotate(45deg);
  }

  .nav-more-link {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 42px;
    color: var(--text-muted);
    padding: 0 0.82rem;
    border-radius: 13px;
    font-weight: 760;
    font-size: 0.9rem;
    transition:
      color var(--transition),
      background var(--transition),
      transform var(--transition);
    white-space: nowrap;
    text-decoration: none;
  }

  .nav-more-link:hover,
  .nav-more-link.active {
    color: var(--accent);
    background: rgba(44, 82, 130, 0.08);
    text-decoration: none;
    transform: translateX(2px);
  }

  .nav-link-dashboard {
    color: var(--accent);
  }

  .user-menu {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    padding-left: 0.75rem;
    margin-left: 0.35rem;
    border-left: 1px solid rgba(226, 232, 240, 0.95);
  }

  .avatar-small {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(226, 232, 240, 0.95);
    flex-shrink: 0;
    transition:
      border-color var(--transition),
      transform var(--transition),
      box-shadow var(--transition);
  }

  .avatar-small:hover {
    border-color: var(--accent);
    transform: scale(1.06);
    box-shadow: 0 8px 20px rgba(44, 82, 130, 0.18);
  }

  .user-name {
    max-width: 110px;
    color: var(--text-muted);
    font-size: 0.86rem;
    font-weight: 750;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .btn-logout {
    min-height: 34px;
    background: white;
    border: 1px solid rgba(203, 213, 225, 0.95);
    color: var(--text-muted);
    padding: 0 0.72rem;
    border-radius: 999px;
    cursor: pointer;
    font-size: 0.8rem;
    font-family: inherit;
    font-weight: 760;
    transition:
      color var(--transition),
      border-color var(--transition),
      background var(--transition),
      transform var(--transition);
  }

  .btn-logout:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: var(--accent-light);
    transform: translateY(-1px);
  }

  .btn-login {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    min-height: 42px;
    margin-left: 0.55rem;
    background: var(--gradient-accent);
    color: white !important;
    padding: 0 1rem;
    border-radius: 14px;
    font-weight: 850;
    font-size: 0.9rem;
    text-decoration: none;
    white-space: nowrap;
    box-shadow:
      0 12px 24px rgba(44, 82, 130, 0.22),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transition:
      transform var(--transition),
      box-shadow var(--transition),
      filter var(--transition);
  }

  .btn-login:hover {
    text-decoration: none;
    transform: translateY(-1px);
    box-shadow:
      0 16px 32px rgba(44, 82, 130, 0.28),
      inset 0 1px 0 rgba(255, 255, 255, 0.24);
    filter: saturate(1.04);
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
    background: white;
    border: 1px solid rgba(226, 232, 240, 0.95);
    cursor: pointer;
    border-radius: 13px;
    transition:
      background var(--transition),
      border-color var(--transition),
      box-shadow var(--transition);
    flex-shrink: 0;
  }

  .menu-toggle:hover {
    background: var(--accent-light);
    border-color: rgba(44, 82, 130, 0.16);
    box-shadow: var(--shadow-xs);
  }

  .hamburger {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--accent);
    border-radius: 2px;
    transition:
      transform var(--transition-slow),
      opacity var(--transition);
  }

  .hamburger[data-open='true']:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .hamburger[data-open='true']:nth-child(2) {
    opacity: 0;
  }

  .hamburger[data-open='true']:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .nav-overlay {
    display: none;
    position: fixed;
    inset: 76px 0 0;
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
    transition:
      max-height var(--transition-slow),
      padding var(--transition-slow);
    position: relative;
    z-index: 91;
    box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);
  }

  .nav-mobile.open {
    max-height: calc(100dvh - 76px);
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
    font-weight: 850;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 0.45rem 0.75rem 0.25rem;
  }

  .nav-mobile .nav-link {
    width: 100%;
    min-height: 44px;
    justify-content: flex-start;
    padding: 0 0.85rem;
    font-size: 0.96rem;
    border-radius: 13px;
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

  @media (max-width: 1240px) {
    .header-inner {
      max-width: 1180px;
      grid-template-columns: minmax(220px, 300px) 1fr;
      gap: 1rem;
      padding: 0 1.35rem;
    }

    .nav-link {
      padding-left: 0.66rem;
      padding-right: 0.66rem;
      font-size: 0.88rem;
    }

    .logo-text {
      font-size: 1.32rem;
    }

    .logo-sub {
      letter-spacing: 0.12em;
    }

    .btn-login {
      padding-left: 0.85rem;
      padding-right: 0.85rem;
    }

    .user-name {
      display: none;
    }
  }

  @media (max-width: 1040px) {
    .header-inner {
      grid-template-columns: auto auto;
    }

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

  @media (min-width: 1041px) {
    .nav-mobile {
      display: none !important;
    }

    .nav-overlay {
      display: none !important;
    }
  }

  @media (max-width: 560px) {
  .header-inner {
    min-height: 64px;
    padding: 0 1rem;
    gap: 0.75rem;
  }

  .logo {
    gap: 0.65rem;
  }

  .logo-icon {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    font-size: 1.05rem;
  }

  .logo-text-wrap {
    gap: 0.18rem;
  }

  .logo-text {
    font-size: 1.08rem;
    line-height: 1.12;
    letter-spacing: -0.03em;
  }

  .logo-sub {
    font-size: 0.52rem;
    line-height: 1.25;
    letter-spacing: 0.08em;
    max-width: 220px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .menu-toggle {
    width: 40px;
    height: 40px;
  }

  .nav-overlay {
    inset: 64px 0 0;
  }

  .nav-mobile.open {
    max-height: calc(100dvh - 64px);
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