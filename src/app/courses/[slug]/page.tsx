'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Clock, Users, CheckCircle2, ArrowRight, BookOpen, GraduationCap, Calendar } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import CTABanner from '@/components/CTABanner';
import { courses } from '@/data/courses';
import styles from './page.module.css';

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const course = courses.find(c => c.slug === slug);

  if (!course) {
    return (
      <section className="page-hero">
        <div className="container page-hero-content">
          <h1>Course Not Found</h1>
          <p>The course you are looking for does not exist.</p>
          <Link href="/courses" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            View All Courses
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link href="/courses">Courses</Link>
            <span className="breadcrumb-separator">/</span>
            <span>{course.title}</span>
          </div>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.detailGrid}>
            {/* Main Content */}
            <div className={styles.mainContent}>
              <AnimatedSection>
                <h2 className={styles.sectionTitle}>About This Course</h2>
                <p className={styles.longDesc}>{course.longDescription}</p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h2 className={styles.sectionTitle}>What You&apos;ll Get</h2>
                <div className={styles.featuresList}>
                  {course.features.map((feature, i) => (
                    <div key={i} className={styles.featureItem}>
                      <CheckCircle2 size={20} className={styles.checkIcon} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className={styles.sidebar}>
              <AnimatedSection direction="right">
                <div className={styles.infoCard}>
                  <h3 className={styles.infoTitle}>Course Details</h3>
                  
                  <div className={styles.infoRow}>
                    <div className={styles.infoLabel}>
                      <Clock size={18} />
                      <span>Duration</span>
                    </div>
                    <div className={styles.infoValue}>{course.duration}</div>
                  </div>

                  <div className={styles.infoRow}>
                    <div className={styles.infoLabel}>
                      <Calendar size={18} />
                      <span>Schedule</span>
                    </div>
                    <div className={styles.infoValue}>{course.schedule}</div>
                  </div>

                  <div className={styles.infoRow}>
                    <div className={styles.infoLabel}>
                      <GraduationCap size={18} />
                      <span>Eligibility</span>
                    </div>
                    <div className={styles.infoValue}>{course.eligibility}</div>
                  </div>

                  <div className={styles.infoRow}>
                    <div className={styles.infoLabel}>
                      <BookOpen size={18} />
                      <span>Fee</span>
                    </div>
                    <div className={styles.infoValue}>{course.feeHint}</div>
                  </div>

                  <Link href="/admission" className={`btn btn-primary ${styles.enrollBtn}`}>
                    Enroll Now <ArrowRight size={16} />
                  </Link>

                  <Link href="/contact" className={`btn btn-secondary ${styles.enrollBtn}`}>
                    Book Demo Class
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Have Questions About This Course?"
        subtitle="Our academic counsellors are here to help you make the right choice."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
