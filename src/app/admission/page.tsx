'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ClipboardList, UserCheck, CreditCard, Rocket,
  ChevronDown, ChevronUp, Send, Calendar, AlertCircle
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import styles from './page.module.css';

const steps = [
  { icon: <ClipboardList size={28} />, title: 'Enquiry', desc: 'Fill the enquiry form or visit our campus for a detailed discussion about courses.' },
  { icon: <UserCheck size={28} />, title: 'Counselling', desc: 'One-on-one session with our academic counsellor to choose the right course for you.' },
  { icon: <CreditCard size={28} />, title: 'Registration', desc: 'Complete the registration with fee payment. EMI options available.' },
  { icon: <Rocket size={28} />, title: 'Start Learning', desc: 'Get your study material, join your batch, and begin your journey to success!' },
];

const feeData = [
  { course: 'JEE Advanced — 2 Year', fee: '₹1,20,000/year', installment: '₹12,000 × 10' },
  { course: 'JEE Main — 1 Year', fee: '₹85,000/year', installment: '₹8,500 × 10' },
  { course: 'NEET UG — 2 Year', fee: '₹1,10,000/year', installment: '₹11,000 × 10' },
  { course: 'NEET UG — Crash Course', fee: '₹75,000', installment: '₹7,500 × 10' },
  { course: 'Foundation (9-10)', fee: '₹50,000/year', installment: '₹5,000 × 10' },
  { course: 'Dropper Batch', fee: '₹90,000', installment: '₹9,000 × 10' },
];

const faqs = [
  {
    q: 'What is the admission process?',
    a: 'Admission is simple — fill the enquiry form, attend a counselling session, complete registration with fee payment, and start learning. No entrance test required for most courses.',
  },
  {
    q: 'Are there any scholarships available?',
    a: 'Yes! We offer merit-based scholarships up to 50% based on past academic performance and our scholarship test conducted at the time of admission.',
  },
  {
    q: 'Can I join mid-session?',
    a: 'Yes, we allow mid-session joining for most courses. Extra doubt sessions will be arranged to help you catch up with the batch.',
  },
  {
    q: 'Is the fee refundable?',
    a: 'Fee is refundable (minus processing charges) within 15 days of admission. After 15 days, a pro-rata refund is applicable as per our refund policy.',
  },
  {
    q: 'Do you provide hostel facilities?',
    a: 'While we don\'t have our own hostel, we have tie-ups with nearby hostels and PG accommodations at affordable rates. Our team can help you find the right accommodation.',
  },
  {
    q: 'What study materials are included?',
    a: 'Complete study material including printed notes, DPP (Daily Practice Problems), previous year papers, and access to our online test platform are included in the fee.',
  },
];

const importantDates = [
  { event: 'New Batch Starts (JEE/NEET)', date: 'April 15, 2026' },
  { event: 'Foundation Batch Starts', date: 'April 20, 2026' },
  { event: 'Scholarship Test', date: 'March 25, 2026' },
  { event: 'Crash Course Begins', date: 'January 10, 2027' },
  { event: 'Last Date for Early Bird Discount', date: 'March 31, 2026' },
];

export default function AdmissionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    studentName: '', class: '', course: '', phone: '', email: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ studentName: '', class: '', course: '', phone: '', email: '', message: '' });
  };

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Admission</span>
          </div>
          <h1>Admissions Open 2026-27</h1>
          <p>Take the first step towards your dream college. Limited seats available.</p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Process"
            title="Admission Process"
            subtitle="Getting started is easy. Follow these simple steps."
          />
          <div className={styles.stepsGrid}>
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.15} className={styles.stepCard}>
                <div className={styles.stepNumber}>{i + 1}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                {i < steps.length - 1 && <div className={styles.stepArrow} />}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className={`section ${styles.feeSection}`}>
        <div className="container">
          <SectionHeading
            badge="Fees"
            title="Fee Structure"
            subtitle="Transparent pricing with flexible EMI options available."
          />
          <AnimatedSection>
            <div className={styles.tableWrap}>
              <table className={styles.feeTable}>
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Total Fee</th>
                    <th>EMI Option</th>
                  </tr>
                </thead>
                <tbody>
                  {feeData.map((item, i) => (
                    <tr key={i}>
                      <td className={styles.courseName}>{item.course}</td>
                      <td className={styles.feeAmount}>{item.fee}</td>
                      <td>{item.installment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.feeNote}>
              <AlertCircle size={16} />
              <span>Early bird discount of 10% available for admissions before March 31, 2026. Scholarship up to 50% available based on merit.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Dates"
            title="Important Dates"
            subtitle="Mark your calendar with these key dates."
          />
          <div className={styles.datesGrid}>
            {importantDates.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className={styles.dateCard}>
                <Calendar size={20} className={styles.dateIcon} />
                <div>
                  <div className={styles.dateEvent}>{item.event}</div>
                  <div className={styles.dateValue}>{item.date}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className={`section ${styles.enquirySection}`}>
        <div className="container">
          <div className={styles.enquiryGrid}>
            <AnimatedSection>
              <div className={styles.enquiryForm}>
                <h3>Enquiry Form</h3>
                <p>Fill in your details and our team will reach out to you.</p>

                {submitted && (
                  <div className={styles.successMsg}>
                    ✅ Thank you! Your enquiry has been submitted. We&apos;ll contact you shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="adm-name">Student Name</label>
                      <input id="adm-name" className="form-input" type="text" placeholder="Student's full name" value={formData.studentName} onChange={(e) => setFormData({...formData, studentName: e.target.value})} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="adm-class">Current Class</label>
                      <select id="adm-class" className="form-select" value={formData.class} onChange={(e) => setFormData({...formData, class: e.target.value})} required>
                        <option value="">Select class</option>
                        <option value="8">Class 8</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10</option>
                        <option value="11">Class 11</option>
                        <option value="12">Class 12</option>
                        <option value="12pass">12th Passed (Dropper)</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="adm-course">Course Interested</label>
                      <select id="adm-course" className="form-select" value={formData.course} onChange={(e) => setFormData({...formData, course: e.target.value})} required>
                        <option value="">Select course</option>
                        <option value="jee-advanced">JEE Advanced Program</option>
                        <option value="jee-main">JEE Main Program</option>
                        <option value="neet-2year">NEET 2-Year</option>
                        <option value="neet-crash">NEET Crash Course</option>
                        <option value="foundation">Foundation</option>
                        <option value="dropper">Dropper Batch</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="adm-phone">Phone Number</label>
                      <input id="adm-phone" className="form-input" type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="adm-email">Email Address</label>
                    <input id="adm-email" className="form-input" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="adm-message">Message (Optional)</label>
                    <textarea id="adm-message" className="form-textarea" placeholder="Any questions or special requirements..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">
                    <Send size={18} /> Submit Enquiry
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* FAQ */}
            <AnimatedSection direction="right">
              <div className={styles.faqCard}>
                <h3>Frequently Asked Questions</h3>
                <div className={styles.faqList}>
                  {faqs.map((faq, i) => (
                    <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`}>
                      <button className={styles.faqQuestion} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                        <span>{faq.q}</span>
                        {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                      {openFaq === i && (
                        <div className={styles.faqAnswer}>{faq.a}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
