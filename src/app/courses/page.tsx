'use client';

import { useState } from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import CourseCard from '@/components/CourseCard';
import CTABanner from '@/components/CTABanner';
import { courses, courseCategories } from '@/data/courses';
import styles from './page.module.css';

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter(c => c.category === activeCategory);

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Courses</span>
          </div>
          <h1>Our Courses</h1>
          <p>Expertly designed programs for UGC NET, JRF, and SLET preparation</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter Tabs */}
          <AnimatedSection className={styles.filterTabs}>
            {courseCategories.map((cat) => (
              <button
                key={cat.key}
                className={`${styles.filterTab} ${activeCategory === cat.key ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </AnimatedSection>

          {/* Course Grid */}
          <div className={styles.courseGrid}>
            {filteredCourses.map((course, i) => (
              <CourseCard key={course.slug} course={course} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className={`section ${styles.compSection}`}>
        <div className="container">
          <SectionHeading
            badge="Compare"
            title="Course Comparison"
            subtitle="Find the right program that matches your goals and timeline."
          />
          <AnimatedSection>
            <div className={styles.tableWrap}>
              <table className={styles.compTable}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Paper-I</th>
                    <th>Paper-II (Ed)</th>
                    <th>Paper-II (Com)</th>
                    <th>Combo (I+II)</th>
                    <th>SLET-NE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Duration</td><td>4 Months</td><td>6 Months</td><td>6 Months</td><td>6 Months</td><td>5 Months</td></tr>
                  <tr><td>Classes/Week</td><td>3 days</td><td>4 days</td><td>4 days</td><td>5 days</td><td>4 days</td></tr>
                  <tr><td>Mock Tests</td><td>Bi-weekly</td><td>Weekly</td><td>Weekly</td><td>Weekly</td><td>Bi-weekly</td></tr>
                  <tr><td>Study Material</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
                  <tr><td>Doubt Sessions</td><td>Weekly</td><td>Weekly</td><td>Weekly</td><td>Daily</td><td>Weekly</td></tr>
                  <tr><td>Personal Mentor</td><td>—</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
                  <tr><td>PYQ Analysis</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Course to Choose?"
        subtitle="Talk to our academic counsellor for personalized guidance based on your goals."
        buttonText="Talk to Counsellor"
        buttonHref="/contact"
      />
    </>
  );
}
