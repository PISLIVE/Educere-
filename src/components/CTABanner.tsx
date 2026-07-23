'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import styles from './CTABanner.module.css';

interface CTABannerProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: 'primary' | 'gradient';
}

export default function CTABanner({
  title,
  subtitle,
  buttonText = 'Get Started',
  buttonHref = '/admission',
  variant = 'gradient',
}: CTABannerProps) {
  return (
    <section className={`${styles.cta} ${styles[variant]}`}>
      <div className={styles.bgDecor}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
      </div>
      <div className={`container ${styles.inner}`}>
        <AnimatedSection>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <Link href={buttonHref} className={`btn btn-accent btn-lg ${styles.btn}`}>
            {buttonText} <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
