import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === '/';
    const showLight = isHome && !scrolled;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '1rem 0',
            background: showLight ? 'rgba(15, 27, 61, 0.3)' : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            borderBottom: showLight ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(15, 27, 61, 0.08)',
            boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Logo size={32} light={showLight} />
                </Link>

                {/* Desktop nav */}
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="nav-desktop">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} style={{
                            color: showLight ? 'white' : 'var(--text-dark)',
                            fontWeight: 500,
                            opacity: location.pathname === link.path ? 1 : 0.8,
                            textDecoration: 'none',
                            borderBottom: location.pathname === link.path ? '3px solid var(--secondary)' : '3px solid transparent',
                            paddingBottom: '0.25rem',
                            transition: 'all 0.3s ease'
                        }}>
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="nav-mobile-btn"
                    style={{
                        display: 'none', background: 'none', border: 'none', cursor: 'pointer',
                        color: showLight ? 'white' : 'var(--text-dark)', padding: '0.5rem'
                    }}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="nav-mobile-menu" style={{
                    background: 'rgba(15, 27, 61, 0.98)', backdropFilter: 'blur(12px)',
                    padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
                    position: 'absolute', top: '100%', left: 0, right: 0,
                    borderBottom: '2px solid var(--secondary)'
                }}>
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} style={{
                            color: 'white', fontWeight: 600, fontSize: '1.1rem',
                            textDecoration: 'none', padding: '0.5rem 0',
                            borderLeft: location.pathname === link.path ? '3px solid var(--secondary)' : '3px solid transparent',
                            paddingLeft: '1rem'
                        }}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
