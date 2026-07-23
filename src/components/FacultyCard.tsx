'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';
import { FacultyMember } from '@/data/faculty';
import styles from './FacultyCard.module.css';

interface FacultyCardProps {
  member: FacultyMember;
  index?: number;
}

const subjectColors: Record<string, string> = {
  Physics: '#6366F1',
  Chemistry: '#10B981',
  Mathematics: '#F59E0B',
  Biology: '#EC4899',
};

export default function FacultyCard({ member, index = 0 }: FacultyCardProps) {
  const color = subjectColors[member.subject] || '#6366F1';

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={styles.avatarWrapper}>
        <div className={styles.avatar} style={{ background: `${color}20`, color }}>
          {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </div>
        <div className={styles.subjectBadge} style={{ background: color }}>
          {member.subject}
        </div>
      </div>

      <h3 className={styles.name}>{member.name}</h3>
      <p className={styles.qualification}>{member.qualification}</p>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <Award size={16} style={{ color }} />
          <span>{member.experience}</span>
        </div>
        <div className={styles.statItem}>
          <BookOpen size={16} style={{ color }} />
          <span>{member.specialization}</span>
        </div>
      </div>

      <p className={styles.description}>{member.description}</p>
    </motion.div>
  );
}
