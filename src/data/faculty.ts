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
    id: 'dr-sharma',
    name: 'Dr. Rajesh Sharma',
    subject: 'Physics',
    qualification: 'Ph.D. IIT Delhi',
    experience: '18+ Years',
    description: 'Former IIT faculty with a passion for simplifying complex physics concepts. Known for his unique problem-solving approach that helps students tackle even the toughest JEE Advanced questions.',
    image: '/faculty/physics.jpg',
    specialization: 'Mechanics & Electrodynamics',
  },
  {
    id: 'prof-verma',
    name: 'Prof. Anita Verma',
    subject: 'Chemistry',
    qualification: 'M.Sc. IIT Bombay',
    experience: '15+ Years',
    description: 'An expert in Organic Chemistry, Prof. Verma makes reactions and mechanisms intuitive. Her students consistently score 90+ in Chemistry in competitive exams.',
    image: '/faculty/chemistry.jpg',
    specialization: 'Organic & Inorganic Chemistry',
  },
  {
    id: 'mr-gupta',
    name: 'Mr. Vikram Gupta',
    subject: 'Mathematics',
    qualification: 'M.Sc. Mathematics, BHU',
    experience: '20+ Years',
    description: 'A legendary math teacher whose students have secured top ranks in JEE. His approach focuses on building mathematical intuition rather than rote formula memorization.',
    image: '/faculty/math.jpg',
    specialization: 'Calculus & Coordinate Geometry',
  },
  {
    id: 'dr-patel',
    name: 'Dr. Meena Patel',
    subject: 'Biology',
    qualification: 'Ph.D. AIIMS Delhi',
    experience: '14+ Years',
    description: 'A former AIIMS researcher, Dr. Patel brings real-world biological insights to the classroom. Her visual teaching methods make even the most complex topics memorable.',
    image: '/faculty/biology.jpg',
    specialization: 'Human Physiology & Genetics',
  },
  {
    id: 'mr-singh',
    name: 'Mr. Arjun Singh',
    subject: 'Physics',
    qualification: 'M.Tech. IIT Kanpur',
    experience: '12+ Years',
    description: 'Specializing in Modern Physics and Optics, Mr. Singh uses simulations and visual aids to bring abstract concepts to life. A favorite among NEET aspirants.',
    image: '/faculty/physics2.jpg',
    specialization: 'Modern Physics & Optics',
  },
  {
    id: 'ms-joshi',
    name: 'Ms. Priya Joshi',
    subject: 'Chemistry',
    qualification: 'M.Sc. Chemistry, DU',
    experience: '10+ Years',
    description: 'Physical Chemistry expert known for her data-driven teaching approach. She breaks down thermodynamics, kinetics, and electrochemistry into simple, scoring topics.',
    image: '/faculty/chemistry2.jpg',
    specialization: 'Physical Chemistry & Analytical',
  },
];
