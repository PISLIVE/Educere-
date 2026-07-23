'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight, BookOpen, FlaskConical, Atom, GraduationCap, Rocket, Brain } from 'lucide-react';
import { Course } from '@/data/courses';
import styles from './CourseCard.module.css';

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen size={28} />,
  FlaskConical: <FlaskConical size={28} />,
  Atom: <Atom size={28} />,
  GraduationCap: <GraduationCap size={28} />,
  Rocket: <Rocket size={28} />,
  Brain: <Brain size={28} />,
};

const categoryLabels: Record<string, string> = {
  paper1: 'Paper I',
  paper2: 'Paper II',
  slet: 'SLET-NE',
};

interface CourseCardProps {
  course: Course;
  index?: number;
}

export default function CourseCard({ course, index = 0 }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/courses/${course.slug}`} className={styles.card}>
        <div className={styles.cardTop}>
          <div className={styles.iconWrapper} style={{ background: `${course.color}15`, color: course.color }}>
            {iconMap[course.iconName] || <BookOpen size={28} />}
          </div>
          <span className={styles.category} style={{ background: `${course.color}15`, color: course.color }}>
            {categoryLabels[course.category]}
          </span>
        </div>

        <h3 className={styles.title}>{course.title}</h3>
        <p className={styles.description}>{course.description}</p>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <Clock size={16} />
            <span>{course.duration}</span>
          </div>
          <div className={styles.metaItem}>
            <Users size={16} />
            <span>{course.schedule}</span>
          </div>
        </div>

        <div className={styles.cardFooter}>
          <span className={styles.fee}>{course.feeHint}</span>
          <span className={styles.arrow}>
            <ArrowRight size={18} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
