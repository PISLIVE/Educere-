export interface FacultyMember {
  id: string;
  name: string;
  subject: string;
  qualification: string;
  experience: string;
  description: string;
  image: string;
  specialization: string;
}

export const faculty: FacultyMember[] = [
  {
    id: 'f1',
    name: 'Dr. Rakesh Sharma',
    subject: 'Education',
    qualification: 'Ph.D., JRF Qualified',
    experience: '15+ Years',
    description: 'An esteemed educator with a profound understanding of Educational Psychology and Philosophy. His structured lectures and insightful study materials have helped hundreds crack JRF.',
    image: '/faculty/physics.jpg',
    specialization: 'Educational Philosophy & Psychology',
  },
  {
    id: 'f2',
    name: 'Prof. Anita Verma',
    subject: 'Commerce',
    qualification: 'M.Com, NET Qualified',
    experience: '12+ Years',
    description: 'Specializes in Accounting and Financial Management. Her exam-oriented teaching methodology and trick-based problem solving make Commerce Paper-II highly scoring for our students.',
    image: '/faculty/chemistry.jpg',
    specialization: 'Accounting & Finance',
  },
  {
    id: 'f3',
    name: 'Dr. Neha Patel',
    subject: 'Paper I',
    qualification: 'Ph.D., JRF Qualified',
    experience: '10+ Years',
    description: 'An expert in Teaching and Research Aptitude. Dr. Patel brings real-world research insights to the classroom, making the concepts of Paper-I highly engaging and easy to grasp.',
    image: '/faculty/biology.jpg',
    specialization: 'Teaching & Research Aptitude',
  },
  {
    id: 'f4',
    name: 'Mr. Vikram Singh',
    subject: 'Logical Reasoning',
    qualification: 'M.A., NET Qualified',
    experience: '8+ Years',
    description: 'Master of Logical Reasoning and Data Interpretation. Mr. Singh\'s unique shortcut methods enable students to solve complex Paper-I DI questions within seconds.',
    image: '/faculty/math.jpg',
    specialization: 'Logical Reasoning & DI',
  }
];
