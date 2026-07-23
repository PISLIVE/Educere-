'use client';

import Link from 'next/link';
import { BookOpen, Award, Users, Heart } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import FacultyCard from '@/components/FacultyCard';
import CTABanner from '@/components/CTABanner';
import { faculty } from '@/data/faculty';
import styles from './page.module.css';

const philosophy = [
  { icon: <BookOpen size={28} />, title: 'Concept First', desc: 'Every topic begins with building intuition and understanding, not formulas.' },
  { icon: <Award size={28} />, title: 'Excellence Driven', desc: 'Our faculty continuously update their teaching methods based on latest exam patterns.' },
  { icon: <Users size={28} />, title: 'Student Centric', desc: 'Teaching pace is adjusted based on student comprehension levels.' },
  { icon: <Heart size={28} />, title: 'Passionate Teaching', desc: 'Our teachers are driven by a genuine passion for their subjects and student success.' },
];

export default function FacultyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Faculty</span>
          </div>
          <h1>Meet Our Expert Faculty</h1>
          <p>Learn from NET/JRF qualified educators with decades of teaching excellence</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Our Team"
            title="Faculty Members"
            subtitle="Our experienced educators are the backbone of Educere Classes."
          />
          <div className={styles.facultyGrid}>
            {faculty.map((member, i) => (
              <FacultyCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.philosophySection}`}>
        <div className="container">
          <SectionHeading
            badge="Philosophy"
            title="Our Teaching Philosophy"
            subtitle="What sets Educere faculty apart from the rest."
          />
          <div className={styles.philosophyGrid}>
            {philosophy.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className={styles.philCard}>
                <div className={styles.philIcon}>{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to Learn From the Best?"
        subtitle="Join Educere Classes and experience the difference expert teaching makes."
        buttonText="Enroll Now"
        buttonHref="/admission"
      />
    </>
  );
}
