export type Course = {
  slug: string;
  title: string;
  category: 'paper1' | 'paper2' | 'slet';
  description: string;
  longDescription: string;
  duration: string;
  schedule: string;
  eligibility: string;
  features: string[];
  feeHint: string;
  iconName: string;
  color: string;
};

export const courses: Course[] = [
  {
    slug: 'ugc-net-paper-1',
    title: 'UGC NET Paper-I',
    category: 'paper1',
    description: 'Comprehensive preparation for the compulsory Paper-I, focusing on teaching aptitude, research aptitude, and logical reasoning.',
    longDescription: 'Our specialized program for UGC NET Paper-I is designed to maximize your score in this crucial section. We cover all 10 units in detail with a focus on recent question trends, time management techniques, and extensive practice of previous years\' papers.',
    duration: '4 Months',
    schedule: '3 days/week • 2 hours/day',
    eligibility: 'Master\'s Degree Pursuing/Passed',
    features: [
      'Coverage of all 10 units',
      'Daily Practice Papers (DPP)',
      '15+ Full-length Mock Tests',
      'Previous Years Papers solved',
      'Special focus on DI & Logic'
    ],
    feeHint: 'Starting from ₹12,000',
    iconName: 'Brain',
    color: '#6366F1'
  },
  {
    slug: 'ugc-net-education',
    title: 'UGC NET Paper-II (Education)',
    category: 'paper2',
    description: 'In-depth conceptual lectures covering all units of Education (Subject Code 09) for NET/JRF aspirants.',
    longDescription: 'An exhaustive program tailored for aspirants choosing Education as their Paper-II subject. Our expert faculty will guide you through educational philosophy, psychology, research methodology, and emerging trends in education with specialized study materials.',
    duration: '6 Months',
    schedule: '4 days/week • 3 hours/day',
    eligibility: 'MA/M.Ed Pursuing or Passed',
    features: [
      'Complete syllabus coverage',
      'Unit-wise sectional tests',
      'Printed study materials & notes',
      'Weekly doubt clearing sessions',
      'Detailed analysis of PYQs'
    ],
    feeHint: 'Starting from ₹20,000',
    iconName: 'BookOpen',
    color: '#8B5CF6'
  },
  {
    slug: 'ugc-net-commerce',
    title: 'UGC NET Paper-II (Commerce)',
    category: 'paper2',
    description: 'Targeted preparation for Commerce (Subject Code 08) with expert guidance on accounting, finance, and management.',
    longDescription: 'A rigorous program for Commerce students aiming for JRF. We break down complex topics in Accounting, Financial Management, Economics, and Statistics into easily understandable modules with a strong emphasis on practical problem solving.',
    duration: '6 Months',
    schedule: '4 days/week • 3 hours/day',
    eligibility: 'M.Com Pursuing or Passed',
    features: [
      'Focus on numerical & theory',
      'Updated study material',
      'Topic-wise regular assessments',
      'Exam-oriented approach',
      'Personalized mentoring'
    ],
    feeHint: 'Starting from ₹20,000',
    iconName: 'GraduationCap',
    color: '#10B981'
  },
  {
    slug: 'slet-ne-comprehensive',
    title: 'SLET (NE Region) Program',
    category: 'slet',
    description: 'A dedicated batch for the State Eligibility Test (SLET) covering both Paper-I and selected Paper-II subjects.',
    longDescription: 'Designed specifically for the North Eastern Region State Eligibility Test (SLET-NE). This program aligns with the state-specific exam patterns and difficulty levels, ensuring our students have the competitive edge needed to qualify for Assistant Professor roles in state universities.',
    duration: '5 Months',
    schedule: '4 days/week • 3 hours/day',
    eligibility: 'Master\'s Degree Pursuing/Passed',
    features: [
      'Aligned with SLET-NE pattern',
      'Paper-I and major Paper-II',
      'State-specific mock tests',
      'Revision crash course',
      'Interview guidance'
    ],
    feeHint: 'Starting from ₹18,000',
    iconName: 'Rocket',
    color: '#EC4899'
  }
];

export const courseCategories = [
  { key: 'all', label: 'All Courses' },
  { key: 'paper1', label: 'Paper I' },
  { key: 'paper2', label: 'Paper II' },
  { key: 'slet', label: 'SLET NE' },
] as const;
