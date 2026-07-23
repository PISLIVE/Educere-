'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight, Sparkles, GraduationCap, Users, Trophy, Target,
  BookOpen, Brain, Microscope, FileText, MessageCircle, BarChart3,
  Award, TrendingUp, Clock, CheckCircle2
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import StatCounter from '@/components/StatCounter';
import CourseCard from '@/components/CourseCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import CTABanner from '@/components/CTABanner';
import { courses } from '@/data/courses';
import styles from './page.module.css';

const whyChooseUs = [
  { icon: <Users size={28} />, title: 'Expert Faculty', desc: 'IIT/AIIMS alumni with 10-20 years of teaching experience' },
  { icon: <Trophy size={28} />, title: 'Proven Results', desc: '500+ IIT/NIT & medical college selections in 2025' },
  { icon: <Target size={28} />, title: 'Personal Attention', desc: 'Small batch sizes of max 40 students per class' },
  { icon: <BookOpen size={28} />, title: 'Study Material', desc: 'Comprehensive study packages with DPP & revision notes' },
  { icon: <MessageCircle size={28} />, title: 'Doubt Sessions', desc: 'Daily doubt-clearing sessions with subject experts' },
  { icon: <BarChart3 size={28} />, title: 'Mock Tests', desc: 'Weekly full-length tests with detailed performance analytics' },
];

const toppers = [
  { name: 'Murashra Yesmin', rank: 'Qualified', exam: 'UGC NET', college: 'Lectureship', image: '/gallery/1.jpeg' },
  { name: 'Mousumi Bharali', rank: 'Qualified', exam: 'UGC NET', college: 'Lectureship', image: '/gallery/2.jpeg' },
  { name: 'Aditya Kumar', rank: 'AIR 245', exam: 'JEE Advanced', college: 'IIT Bombay' },
  { name: 'Priya Mehta', rank: 'AIR 189', exam: 'NEET UG', college: 'AIIMS Delhi' },
  { name: 'Rohit Verma', rank: '99.8%ile', exam: 'JEE Main', college: 'NIT Trichy' },
  { name: 'Sneha Reddy', rank: 'AIR 512', exam: 'NEET UG', college: 'Govt. Medical' },
];

export default function HomePage() {
  const featuredCourses = courses.slice(0, 4);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroGlow1} />
          <div className={styles.heroGlow2} />
          <div className={styles.heroGlow3} />
          {/* Grid Pattern */}
          <div className={styles.gridPattern} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={styles.heroText}
          >
            <div className={styles.heroBadge}>
              <Sparkles size={16} />
              <span>Admissions Open 2026-27</span>
            </div>

            <h1 className={styles.heroTitle}>
              Shape Your Future<br />
              with <span className={styles.heroHighlight}>Educere Classes</span>
            </h1>

            <p className={styles.heroSubtitle}>
              EDUCERE CLASSES is a great Coaching Platform for all those UGC NET, JRF, and SLET aspirants who are wandering around for proper direction, guidance, and motivation.
            </p>

            <div className={styles.heroCtas}>
              <Link href="/courses" className="btn btn-primary btn-lg">
                Explore Courses <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className={`btn btn-secondary btn-lg ${styles.heroSecondaryBtn}`}>
                Book Demo Class
              </Link>
            </div>

            {/* Achievement Badges */}
            <div className={styles.achievements}>
              <div className={styles.achieveBadge}>
                <Trophy size={18} />
                <span><strong>500+</strong> IIT/NEET Selections</span>
              </div>
              <div className={styles.achieveBadge}>
                <Award size={18} />
                <span><strong>15+</strong> Years of Excellence</span>
              </div>
              <div className={styles.achieveBadge}>
                <TrendingUp size={18} />
                <span><strong>95%</strong> Success Rate</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.heroCard}>
              <div className={styles.heroCardInner}>
                <div className={styles.heroCardIcon}>
                  <GraduationCap size={48} />
                </div>
                <h3>Start Your Journey</h3>
                <p>Join the best coaching for UGC NET & JRF</p>
                <div className={styles.heroCardStats}>
                  <div className={styles.heroCardStat}>
                    <span className={styles.statNum}>5000+</span>
                    <span className={styles.statLabel}>Students</span>
                  </div>
                  <div className={styles.heroCardStat}>
                    <span className={styles.statNum}>50+</span>
                    <span className={styles.statLabel}>Faculty</span>
                  </div>
                  <div className={styles.heroCardStat}>
                    <span className={styles.statNum}>15+</span>
                    <span className={styles.statLabel}>Years</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className={`${styles.floatingBadge} ${styles.float1}`}>
              <Brain size={20} /> UGC NET
            </div>
            <div className={`${styles.floatingBadge} ${styles.float2}`}>
              <Microscope size={20} /> JRF / SLET
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className={styles.statsBar}>
        <div className={`container ${styles.statsGrid}`}>
          <StatCounter end={15} suffix="+" label="Years Experience" icon={<Clock size={24} />} />
          <StatCounter end={5000} suffix="+" label="Students Enrolled" icon={<Users size={24} />} />
          <StatCounter end={500} suffix="+" label="IIT/NEET Selections" icon={<Trophy size={24} />} />
          <StatCounter end={95} suffix="%" label="Success Rate" icon={<Target size={24} />} />
        </div>
      </section>

      {/* ===== FEATURED COURSES ===== */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Our Programs"
            title="Courses Designed for Your Success"
            subtitle="Choose from our range of expertly crafted programs tailored for UGC NET, JRF, and SLET preparation."
          />
          <div className={styles.coursesGrid}>
            {featuredCourses.map((course, i) => (
              <CourseCard key={course.slug} course={course} index={i} />
            ))}
          </div>
          <AnimatedSection className={styles.viewAllWrap}>
            <Link href="/courses" className="btn btn-secondary">
              View All Courses <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <SectionHeading
            badge="Why Educere"
            title="Why Students Choose Us"
            subtitle="We provide everything you need to excel in competitive exams — expert guidance, proven strategies, and unwavering support."
          />
          <div className={styles.whyGrid}>
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08} className={styles.whyCard}>
                <div className={styles.whyIcon}>{item.icon}</div>
                <h4 className={styles.whyTitle}>{item.title}</h4>
                <p className={styles.whyDesc}>{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESULTS SHOWCASE ===== */}
      <section className={styles.resultsSection}>
        <div className="container">
          <SectionHeading
            badge="Our Results"
            title="Our Students, Our Pride"
            subtitle="Celebrating the achievements of students who trusted us with their dreams."
            light
          />
          <div className={styles.toppersGrid}>
            {toppers.map((topper, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className={styles.topperCard}>
                  {topper.image ? (
                    <div className={styles.topperImageWrapper}>
                      <Image src={topper.image} alt={topper.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                  ) : (
                    <div className={styles.topperAvatar}>
                      {topper.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                  <h4 className={styles.topperName}>{topper.name}</h4>
                  <div className={styles.topperRank}>{topper.rank}</div>
                  <div className={styles.topperExam}>{topper.exam}</div>
                  <div className={styles.topperCollege}>{topper.college}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Testimonials"
            title="What Our Students Say"
            subtitle="Hear from students who achieved their dreams with Educere Classes."
          />
          <TestimonialSlider />
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <CTABanner
        title="Admissions Open for 2026-27 Batch"
        subtitle="Don't miss your chance to learn from the best. Limited seats available — enroll today and take the first step towards your dream college."
        buttonText="Apply Now"
        buttonHref="/admission"
      />
    </>
  );
}
