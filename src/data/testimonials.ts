export interface Testimonial {
  id: string;
  name: string;
  course: string;
  result: string;
  quote: string;
  year: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Aditya Kumar',
    course: 'JEE Advanced 2-Year Program',
    result: 'AIR 245 — IIT Bombay (CSE)',
    quote: 'Educere Classes completely transformed my preparation. The faculty\'s problem-solving approach and personal attention helped me crack JEE Advanced in my first attempt. The mock tests were incredibly close to the actual exam pattern.',
    year: '2025',
  },
  {
    id: '2',
    name: 'Priya Mehta',
    course: 'NEET UG 2-Year Program',
    result: 'AIR 189 — AIIMS Delhi',
    quote: 'The Biology sessions by Dr. Patel were outstanding! Her visual teaching methods helped me score 360/360 in Biology. The regular NEET mock tests and analysis sessions were game-changers in my preparation.',
    year: '2025',
  },
  {
    id: '3',
    name: 'Rohit Verma',
    course: 'JEE Main 1-Year Program',
    result: '99.8 Percentile — NIT Trichy',
    quote: 'I joined Educere in Class 12 and the structured approach helped me cover the entire syllabus efficiently. Vikram Sir\'s mathematics classes were phenomenal — complex problems became simple after his explanations.',
    year: '2025',
  },
  {
    id: '4',
    name: 'Sneha Reddy',
    course: 'NEET UG Crash Course',
    result: 'AIR 512 — Government Medical College',
    quote: 'As a dropper, I was demotivated. Educere\'s supportive environment and personalized study plan gave me the confidence to improve my score by 200 marks. The crash course was intense but incredibly effective.',
    year: '2024',
  },
  {
    id: '5',
    name: 'Karan Patel',
    course: 'Foundation Program',
    result: 'NTSE Scholar — AIR 87',
    quote: 'I joined Educere in Class 9 and it was the best decision. The Foundation program not only helped me ace school exams but also cracked NTSE. Now I feel fully prepared for JEE preparation in Class 11.',
    year: '2024',
  },
  {
    id: '6',
    name: 'Ananya Singh',
    course: 'JEE Advanced 2-Year Program',
    result: 'AIR 178 — IIT Delhi (EE)',
    quote: 'The doubt-clearing sessions at Educere are unmatched. No matter how silly the question, faculty always encouraged us to ask. Dr. Sharma\'s Physics classes gave me the edge I needed for JEE Advanced.',
    year: '2024',
  },
];
