'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Target, Eye, Heart, BookOpen, Users, Award,
  CheckCircle2, Lightbulb, GraduationCap, Microscope,
  Brain, Sparkles, Monitor, Library
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';
import styles from './page.module.css';

const timeline = [
  { year: '2010', title: 'Founded', desc: 'Educere Classes was established with a vision to provide quality coaching for competitive exams.' },
  { year: '2013', title: 'First IIT Selection', desc: 'Our first batch produced 12 IIT selections, marking the beginning of a legacy.' },
  { year: '2016', title: 'NEET Wing Added', desc: 'Expanded to include NEET UG preparation with specialized Biology faculty.' },
  { year: '2019', title: '1000+ Selections', desc: 'Crossed the milestone of 1000 total IIT/NEET selections.' },
  { year: '2022', title: 'Infrastructure Upgrade', desc: 'State-of-the-art classrooms, digital boards, and a dedicated library added.' },
  { year: '2025', title: 'New Records', desc: '500+ selections in a single year with AIR 178 in JEE Advanced.' },
];

const approach = [
  { icon: <Lightbulb size={28} />, title: 'Conceptual Clarity', desc: 'We focus on building deep understanding rather than rote learning. Every concept is taught from first principles.' },
  { icon: <Target size={28} />, title: 'Strategic Preparation', desc: 'Our curriculum is designed to cover high-weightage topics first, ensuring maximum score optimization.' },
  { icon: <Users size={28} />, title: 'Personal Mentoring', desc: 'Each student is assigned a personal mentor who tracks progress and provides customized guidance.' },
  { icon: <Brain size={28} />, title: 'Regular Assessment', desc: 'Weekly tests, surprise quizzes, and full-length mock exams to keep students exam-ready at all times.' },
];

const facilities = [
  { icon: <Monitor size={28} />, title: 'Smart Classrooms', desc: 'Digital boards with interactive learning tools for immersive teaching sessions.' },
  { icon: <Library size={28} />, title: 'Extensive Library', desc: 'Well-stocked library with reference books, previous year papers, and study resources.' },
  { icon: <Microscope size={28} />, title: 'Science Labs', desc: 'Fully equipped Physics, Chemistry, and Biology labs for practical understanding.' },
  { icon: <Sparkles size={28} />, title: 'AC Classrooms', desc: 'Comfortable air-conditioned classrooms designed for distraction-free learning.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>About Us</span>
          </div>
          <h1>About Educere Classes</h1>
          <p>Empowering students to achieve academic excellence since 2010</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container">
          <div className={styles.vmGrid}>
            <AnimatedSection className={styles.vmCard}>
              <div className={styles.vmIcon}>
                <Eye size={32} />
              </div>
              <h3>Our Vision</h3>
              <p>To be the most trusted and result-oriented coaching institute that transforms every student&apos;s potential into extraordinary achievement in competitive exams.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className={styles.vmCard}>
              <div className={styles.vmIcon}>
                <Target size={32} />
              </div>
              <h3>Our Mission</h3>
              <p>To provide holistic, concept-based education with personalized mentoring, enabling students to crack IIT-JEE & NEET with top ranks and build a strong foundation for life.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className={styles.vmCard}>
              <div className={styles.vmIcon}>
                <Heart size={32} />
              </div>
              <h3>Our Values</h3>
              <p>Integrity, excellence, student-first approach, and a relentless commitment to nurturing future leaders in science, technology, and medicine.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className={`section ${styles.storySection}`}>
        <div className="container">
          <SectionHeading
            badge="Our Journey"
            title="The Educere Story"
            subtitle="From a small classroom to one of the most trusted coaching institutes — our journey of transforming lives."
          />
          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.1}
                direction={i % 2 === 0 ? 'left' : 'right'}
                className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}
              >
                <div className={styles.timelineCard}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <h4 className={styles.timelineTitle}>{item.title}</h4>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
            <div className={styles.timelineLine} />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Our Approach"
            title="How We Teach"
            subtitle="Our proven methodology that has produced consistent results year after year."
          />
          <div className={styles.approachGrid}>
            {approach.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className={styles.approachCard}>
                <div className={styles.approachIcon}>{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className={`section ${styles.facilitySection}`}>
        <div className="container">
          <SectionHeading
            badge="Infrastructure"
            title="World-Class Facilities"
            subtitle="Our campus is equipped with modern amenities to ensure the best learning experience."
          />
          <div className={styles.facilityGrid}>
            {facilities.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className={styles.facilityCard}>
                <div className={styles.facilityIcon}>{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Join the Educere Family?"
        subtitle="Become part of a community that has produced 500+ IIT & NEET selections."
        buttonText="Apply for Admission"
        buttonHref="/admission"
      />
    </>
  );
}
