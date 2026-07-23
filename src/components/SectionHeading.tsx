'use client';

import { ReactNode } from 'react';
import AnimatedSection from './AnimatedSection';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'center' | 'left';
  light?: boolean;
  children?: ReactNode;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <AnimatedSection className={`${styles.heading} ${styles[align]} ${light ? styles.light : ''}`}>
      {badge && <span className={styles.badge}>{badge}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.decoration}>
        <span className={styles.line}></span>
        <span className={styles.dot}></span>
        <span className={styles.line}></span>
      </div>
    </AnimatedSection>
  );
}
