import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const NAV_LINKS = [
  { path: '/', label: '홈' },
  { path: '/about', label: '회사소개' },
  { path: '/services', label: '서비스' },
  { path: '/contact', label: '문의하기' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">YJ</span>
          <span className="logo-text">IT Solutions</span>
        </Link>

        <nav className={`nav${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
            상담 신청
          </Link>
        </nav>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
