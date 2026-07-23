'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Send, Camera, Globe, Play, MessageCircle } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import styles from './page.module.css';

const contactInfo = [
  { icon: <Phone size={24} />, title: 'Phone', value: '+91 91275 81139', href: 'tel:+919127581139', color: '#6366F1' },
  { icon: <Mail size={24} />, title: 'Email', value: 'info@educereclasses.com', href: 'mailto:info@educereclasses.com', color: '#EC4899' },
  { icon: <MapPin size={24} />, title: 'Address', value: 'House No. 01, 2nd Floor, Bylane 06, Dr. Zakir Hussain Road, Guwahati — 781006', href: '#map', color: '#10B981' },
  { icon: <Clock size={24} />, title: 'Working Hours', value: 'Mon - Sat: 7:00 AM - 8:00 PM', href: '#', color: '#F59E0B' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', course: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Contact</span>
          </div>
          <h1>Get in Touch</h1>
          <p>Have questions? We&apos;d love to hear from you. Reach out to us anytime.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section">
        <div className="container">
          <div className={styles.infoGrid}>
            {contactInfo.map((info, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <a href={info.href} className={styles.infoCard}>
                  <div className={styles.infoIcon} style={{ background: `${info.color}15`, color: info.color }}>
                    {info.icon}
                  </div>
                  <h4>{info.title}</h4>
                  <p>{info.value}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className={`section ${styles.formSection}`}>
        <div className="container">
          <div className={styles.formGrid}>
            {/* Form */}
            <AnimatedSection>
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Send Us a Message</h3>
                <p className={styles.formSubtitle}>Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                {submitted && (
                  <div className={styles.successMsg}>
                    ✅ Thank you! Your message has been sent successfully. We&apos;ll contact you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Full Name</label>
                      <input
                        id="contact-name"
                        className="form-input"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">Email Address</label>
                      <input
                        id="contact-email"
                        className="form-input"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                      <input
                        id="contact-phone"
                        className="form-input"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-course">Interested Course</label>
                      <select
                        id="contact-course"
                        className="form-select"
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      >
                        <option value="">Select a course</option>
                        <option value="paper-1">UGC NET Paper I</option>
                        <option value="paper-2">UGC NET Paper II</option>
                        <option value="slet">SLET NE Program</option>
                        <option value="foundation">Foundation Program</option>
                        <option value="dropper">Dropper Batch</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      className="form-textarea"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Map + Social */}
            <AnimatedSection direction="right">
              <div className={styles.mapCard}>
                <iframe 
                  src="https://maps.google.com/maps?q=House+No.+01,+2nd+Floor,+Bylane+06,+Dr.+Zakir+Hussain+Road,+Guwahati&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0, display: 'block' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className={styles.socialCard}>
                <h4>Follow Us</h4>
                <div className={styles.socialLinks}>
                  <a href="#" className={`${styles.socialLink} ${styles.instagram}`} aria-label="Instagram">
                    <div className={styles.iconCircle}><Camera size={18} /></div>
                    <span>Instagram</span>
                  </a>
                  <a href="#" className={`${styles.socialLink} ${styles.facebook}`} aria-label="Facebook">
                    <div className={styles.iconCircle}><Globe size={18} /></div>
                    <span>Facebook</span>
                  </a>
                  <a href="#" className={`${styles.socialLink} ${styles.youtube}`} aria-label="YouTube">
                    <div className={styles.iconCircle}><Play size={18} /></div>
                    <span>YouTube</span>
                  </a>
                  <a href="#" className={`${styles.socialLink} ${styles.whatsapp}`} aria-label="WhatsApp">
                    <div className={styles.iconCircle}><MessageCircle size={18} /></div>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
