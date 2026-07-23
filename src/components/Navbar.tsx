'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, GraduationCap, Phone } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <span className={styles.topBarText}>
            🎓 Admissions Open 2026-27 — Limited Seats Available!
          </span>
          <div className={styles.topBarRight}>
            <a href="tel:+919876543210" className={styles.topBarLink}>
              <Phone size={14} />
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.navInner}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <GraduationCap size={28} />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>Educere</span>
              <span className={styles.logoTag}>Classes</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
              >
                {link.label}
                {pathname === link.href && <span className={styles.activeIndicator}></span>}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className={styles.navRight}>
            {mounted && (
              <button
                className={styles.themeToggle}
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <Link href="/admission" className={`btn btn-primary btn-sm ${styles.ctaBtn}`}>
              Enroll Now
            </Link>
            <button
              className={styles.mobileMenuBtn}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.overlayOpen : ''}`} onClick={() => setIsMobileMenuOpen(false)} />

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.mobileMenuInner}>
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileNavLink} ${pathname === link.href ? styles.mobileActive : ''}`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/admission" className={`btn btn-primary ${styles.mobileCta}`}>
            Enroll Now
          </Link>
        </div>
      </div>
    </>
  );
}
