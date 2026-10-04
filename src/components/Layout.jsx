import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import WhatsAppButton from './WhatsAppButton'
import { SITE, whatsappLink } from '../config/site'

const NAV_LINKS = [
  { to: '/services', label: 'Solutions' },
  { to: '/use-cases', label: 'Use cases' },
  { to: '/insights', label: 'Insights' },
  { to: '/about', label: 'About' },
]

function Header() {
  const [menu, setMenu] = useState({ open: false, pathname: '' })
  const { pathname } = useLocation()
  const open = menu.open && menu.pathname === pathname

  // Escape closes the menu.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setMenu({ open: false, pathname })
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, pathname])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__logo" aria-label="Quorvin home">
          <span>Quorvin</span>
        </Link>

        <button
          type="button"
          className="site-header__menu-btn"
          onClick={() => setMenu({ open: !open, pathname })}
          aria-expanded={open}
          aria-controls="site-nav"
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav id="site-nav" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn btn-primary">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__brand">Quorvin</p>
            <p className="site-footer__desc">
              AI and data solutions for teams that need answers, not more dashboards.
            </p>
          </div>

          <div>
            <p className="site-footer__heading">Solutions</p>
            <div className="site-footer__links">
              <Link to="/services/ai-solutions">AI Solutions</Link>
              <Link to="/services/data-solutions">Data Solutions</Link>
              <Link to="/services/web-development">Web Development</Link>
            </div>
          </div>

          <div>
            <p className="site-footer__heading">Company</p>
            <div className="site-footer__links">
              <Link to="/use-cases">Use cases</Link>
              <Link to="/insights">Insights</Link>
              <Link to="/about">About</Link>
            </div>
          </div>

          <div>
            <p className="site-footer__heading">Contact</p>
            <div className="site-footer__links">
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                {SITE.whatsappDisplay}
              </a>
              <Link to="/contact">Send a message</Link>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Quorvin. All rights reserved.</span>
          <span>
            {SITE.city}, {SITE.country}
          </span>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
