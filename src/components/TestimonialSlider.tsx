'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import styles from './TestimonialSlider.module.css';

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -100 : 100, opacity: 0 }),
  };

  return (
    <div className={styles.slider}>
      <div className={styles.quoteIcon}>
        <Quote size={40} />
      </div>

      <div className={styles.content}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className={styles.slide}
          >
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
            <div className={styles.author}>
              <div className={styles.authorAvatar}>
                {t.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className={styles.authorName}>{t.name}</div>
                <div className={styles.authorResult}>{t.result}</div>
                <div className={styles.authorCourse}>{t.course} • {t.year}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.controls}>
        <button className={styles.navBtn} onClick={prev} aria-label="Previous testimonial">
          <ChevronLeft size={20} />
        </button>
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.activeDot : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button className={styles.navBtn} onClick={next} aria-label="Next testimonial">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
