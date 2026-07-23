'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import styles from './page.module.css';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'classroom', label: 'Classrooms' },
  { key: 'events', label: 'Events' },
  { key: 'achievements', label: 'Achievements' },
  { key: 'campus', label: 'Campus' },
];

const galleryItems = [
  { id: 1, category: 'classroom', title: 'Modern Smart Classroom', color: '#6366F1' },
  { id: 2, category: 'classroom', title: 'Physics Lab', color: '#8B5CF6' },
  { id: 3, category: 'events', title: 'Annual Science Fest', color: '#EC4899' },
  { id: 4, category: 'achievements', title: 'JEE Results Day 2025', color: '#F59E0B' },
  { id: 5, category: 'campus', title: 'Institute Building', color: '#10B981' },
  { id: 6, category: 'classroom', title: 'Chemistry Lab', color: '#14B8A6' },
  { id: 7, category: 'events', title: 'Teacher\'s Day Celebration', color: '#F97316' },
  { id: 8, category: 'achievements', title: 'NEET Toppers Felicitation', color: '#EF4444' },
  { id: 9, category: 'campus', title: 'Library & Reading Room', color: '#6366F1' },
  { id: 10, category: 'events', title: 'Motivational Seminar', color: '#8B5CF6' },
  { id: 11, category: 'campus', title: 'Student Lounge', color: '#EC4899' },
  { id: 12, category: 'achievements', title: 'Award Ceremony', color: '#F59E0B' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Gallery</span>
          </div>
          <h1>Life at Educere Classes</h1>
          <p>Explore our campus, events, and achievements through our gallery</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter Tabs */}
          <AnimatedSection className={styles.filterTabs}>
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`${styles.filterTab} ${activeCategory === cat.key ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </AnimatedSection>

          {/* Gallery Grid */}
          <div className={styles.galleryGrid}>
            {filtered.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.05}>
                <div
                  className={styles.galleryItem}
                  onClick={() => setSelectedItem(item)}
                  style={{ background: `${item.color}20` }}
                >
                  <div className={styles.galleryPlaceholder} style={{ background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)` }}>
                    <div className={styles.galleryIcon} style={{ color: item.color }}>
                      {item.title.charAt(0)}
                    </div>
                  </div>
                  <div className={styles.galleryOverlay}>
                    <span className={styles.galleryTitle}>{item.title}</span>
                    <span className={styles.galleryCat}>{item.category}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div className={styles.lightbox} onClick={() => setSelectedItem(null)}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setSelectedItem(null)}>
              <X size={24} />
            </button>
            <div className={styles.lightboxImage} style={{ background: `linear-gradient(135deg, ${selectedItem.color}30, ${selectedItem.color}10)` }}>
              <div className={styles.lightboxIcon} style={{ color: selectedItem.color }}>
                {selectedItem.title.charAt(0)}
              </div>
            </div>
            <div className={styles.lightboxInfo}>
              <h3>{selectedItem.title}</h3>
              <span className={styles.galleryCat}>{selectedItem.category}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
