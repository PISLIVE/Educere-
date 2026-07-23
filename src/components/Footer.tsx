'use client';

import Link from 'next/link';
import { GraduationCap, MapPin, Phone, Mail, Clock, ArrowRight, Camera, Globe, Play } from 'lucide-react';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Courses', href: '/courses' },
  { label: 'Faculty', href: '/faculty' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
  { label: 'Admission', href: '/admission' },
];

const courseLinks = [
  { label: 'JEE Advanced Program', href: '/courses/jee-advanced-2year' },
  { label: 'JEE Main Program', href: '/courses/jee-main-1year' },
  { label: 'NEET UG Program', href: '/courses/neet-2year' },
  { label: 'NEET Crash Course', href: '/courses/neet-1year' },
  { label: 'Foundation (9-10)', href: '/courses/foundation-9-10' },
  { label: 'Dropper Batch', href: '/courses/dropper-batch' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* CTA Strip */}
      <div className={styles.ctaStrip}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h3 className={styles.ctaTitle}>Ready to Start Your Journey?</h3>
            <p className={styles.ctaSubtitle}>Join thousands of successful students who chose Educere Classes</p>
          </div>
          <Link href="/admission" className="btn btn-accent btn-lg">
            Apply Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.footerMain}>
        <div className={`container ${styles.footerGrid}`}>
          {/* About Column */}
          <div className={styles.footerCol}>
            <div className={styles.footerLogo}>
              <div className={styles.logoIcon}>
                <GraduationCap size={24} />
              </div>
              <div>
                <div className={styles.logoName}>Educere</div>
                <div className={styles.logoTag}>Classes</div>
              </div>
            </div>
            <p className={styles.aboutText}>
              Empowering students to achieve academic excellence since 2010. We specialize in IIT-JEE & NEET preparation with a proven track record of producing top rankers.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Instagram" className={styles.socialLink}><Camera size={20} /></a>
              <a href="#" aria-label="Facebook" className={styles.socialLink}><Globe size={20} /></a>
              <a href="#" aria-label="YouTube" className={styles.socialLink}><Play size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    <ArrowRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Our Courses</h4>
            <ul className={styles.linkList}>
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    <ArrowRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Contact Info</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin size={18} className={styles.contactIcon} />
                <span>House No. 01, 2nd Floor, Bylane 06, Dr. Zakir Hussain Road, Guwahati — 781006</span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={18} className={styles.contactIcon} />
                <a href="tel:+919127581139">+91 91275 81139</a>
              </li>
              <li className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <a href="mailto:info@educereclasses.com">info@educereclasses.com</a>
              </li>
              <li className={styles.contactItem}>
                <Clock size={18} className={styles.contactIcon} />
                <span>Mon - Sat: 7:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p>© {new Date().getFullYear()} Educere Classes. All rights reserved.</p>
          <p className={styles.credit}>
            Designed & Developed by <a href="#" className={styles.creditLink}>NoviQ</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
