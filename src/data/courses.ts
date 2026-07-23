import { BookOpen, FlaskConical, Atom, GraduationCap, Rocket, Brain } from 'lucide-react';

export interface Course {
  slug: string;
  title: string;
  category: 'jee' | 'neet' | 'foundation';
  description: string;
  longDescription: string;
  duration: string;
  schedule: string;
  eligibility: string;
  features: string[];
  feeHint: string;
  iconName: string;
  color: string;
}

export const courses: Course[] = [
  {
    slug: 'jee-advanced-2year',
    title: 'JEE Advanced — 2 Year Program',
    category: 'jee',
    description: 'Comprehensive 2-year program for JEE Main & Advanced with in-depth conceptual training and rigorous problem solving.',
    longDescription: 'Our flagship program designed for students entering Class 11 who aspire to crack JEE Advanced and secure a seat in IITs. This program covers the complete syllabus of Physics, Chemistry, and Mathematics with a structured approach that builds strong fundamentals and gradually progresses to advanced problem-solving techniques.',
    duration: '2 Years (Class 11 & 12)',
    schedule: '5 days/week • 3 hours/day',
    eligibility: 'Class 10 passed with min. 80% in PCM',
    features: [
      'Complete PCM syllabus coverage',
      'Weekly mock tests & analysis',
      'Personal mentor assigned',
      'Doubt clearing sessions daily',
      'Study material & DPP sheets',
      'Board exam preparation included',
    ],
    feeHint: 'Starting from ₹1,20,000/year',
    iconName: 'Atom',
    color: '#6366F1',
  },
  {
    slug: 'jee-main-1year',
    title: 'JEE Main — 1 Year Program',
    category: 'jee',
    description: 'Focused 1-year crash-cum-comprehensive program for JEE Main targeting NIT, IIIT, and top engineering colleges.',
    longDescription: 'A power-packed program for Class 12 students or 12th pass aspirants who want to crack JEE Main. Covers the entire syllabus with a strategic approach focusing on high-weightage topics, shortcuts, and exam temperament.',
    duration: '1 Year (Class 12 / Dropper)',
    schedule: '6 days/week • 4 hours/day',
    eligibility: 'Class 11 passed / Class 12 appearing',
    features: [
      'Complete JEE Main syllabus',
      'NTA pattern mock tests',
      'Previous year paper analysis',
      'Shortcut techniques & tricks',
      'Performance tracking dashboard',
      'Revision crash course included',
    ],
    feeHint: 'Starting from ₹85,000/year',
    iconName: 'Rocket',
    color: '#8B5CF6',
  },
  {
    slug: 'neet-2year',
    title: 'NEET UG — 2 Year Program',
    category: 'neet',
    description: 'Complete 2-year preparation program for NEET UG covering Physics, Chemistry, and Biology with NCERT-focused approach.',
    longDescription: 'A comprehensive NEET preparation program starting from Class 11. Our NCERT-first approach ensures strong conceptual clarity in Physics, Chemistry, and Biology. The program includes extensive practice with NEET-pattern questions and regular full-length tests.',
    duration: '2 Years (Class 11 & 12)',
    schedule: '5 days/week • 3 hours/day',
    eligibility: 'Class 10 passed with min. 80% in PCB',
    features: [
      'NCERT-focused comprehensive approach',
      'Biology special intensive sessions',
      'Weekly NEET mock tests',
      'Specimen-based practical learning',
      'AIIMS & JIPMER pattern included',
      'Board exam preparation included',
    ],
    feeHint: 'Starting from ₹1,10,000/year',
    iconName: 'FlaskConical',
    color: '#10B981',
  },
  {
    slug: 'neet-1year',
    title: 'NEET UG — 1 Year Crash Course',
    category: 'neet',
    description: 'Intensive 1-year crash course for NEET UG with rapid syllabus completion and maximum practice-oriented approach.',
    longDescription: 'An accelerated program for Class 12 students and droppers. This course focuses on rapid completion of the NEET syllabus followed by extensive revision, mock tests, and previous year question practice to maximize your score.',
    duration: '1 Year (Class 12 / Dropper)',
    schedule: '6 days/week • 4 hours/day',
    eligibility: 'Class 11 passed / Class 12 appearing',
    features: [
      'Fast-track syllabus completion',
      'Daily practice problems',
      'Full-length NEET mock tests',
      'Previous 15 years solved papers',
      'Individual performance analysis',
      'Last 60-day revision bootcamp',
    ],
    feeHint: 'Starting from ₹75,000/year',
    iconName: 'Brain',
    color: '#EC4899',
  },
  {
    slug: 'foundation-9-10',
    title: 'Foundation Program — Class 9 & 10',
    category: 'foundation',
    description: 'Early preparation program to build strong Science & Math fundamentals for future JEE/NEET aspirants.',
    longDescription: 'The Foundation program is designed for students in Class 9 and 10 who want to build a strong base for competitive exams. It covers the school syllabus along with an introduction to competitive exam concepts, ensuring a smooth transition to JEE/NEET preparation.',
    duration: '1-2 Years (Class 9 & 10)',
    schedule: '3 days/week • 2 hours/day',
    eligibility: 'Class 8 passed or Class 9 studying',
    features: [
      'Strong fundamentals in PCM/PCB',
      'NTSE & Olympiad preparation',
      'School exam excellence',
      'Conceptual learning approach',
      'Fun science experiments & workshops',
      'Early competitive mindset building',
    ],
    feeHint: 'Starting from ₹50,000/year',
    iconName: 'BookOpen',
    color: '#F59E0B',
  },
  {
    slug: 'dropper-batch',
    title: 'Dropper Batch — JEE & NEET',
    category: 'jee',
    description: 'Dedicated batch for droppers with personalized attention, intensive practice, and strategic revision to improve your rank.',
    longDescription: 'Specifically designed for students who want to take another attempt at JEE or NEET after completing Class 12. This batch offers a focused environment with personalized study plans, intensive testing, and one-on-one mentoring to help you achieve your target rank.',
    duration: '1 Year (Post 12th)',
    schedule: '6 days/week • 5 hours/day',
    eligibility: 'Class 12 passed',
    features: [
      'Personalized study plan',
      'One-on-one mentoring',
      'Daily tests & analysis',
      'Weak area identification & focus',
      'Stress management sessions',
      'Guaranteed improvement program',
    ],
    feeHint: 'Starting from ₹90,000/year',
    iconName: 'GraduationCap',
    color: '#EF4444',
  },
];

export const courseCategories = [
  { key: 'all', label: 'All Courses' },
  { key: 'jee', label: 'JEE Programs' },
  { key: 'neet', label: 'NEET Programs' },
  { key: 'foundation', label: 'Foundation' },
] as const;
