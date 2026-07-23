export interface Testimonial {
  id: string;
  name: string;
  course: string;
  result: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Murashra Yesmin',
    course: 'UGC NET Paper I & II',
    result: 'Qualified UGC NET Lectureship',
    quote: 'Educere Classes completely transformed my preparation. The faculty\'s problem-solving approach and personal attention helped me crack UGC NET in my first attempt. The mock tests were incredibly close to the actual exam pattern.',
    image: '/gallery/1.jpeg',
  },
  {
    id: 't2',
    name: 'Mousumi Bharali',
    course: 'UGC NET Paper I & II',
    result: 'Qualified UGC NET Lectureship',
    quote: 'The Education sessions by Dr. Sharma were outstanding! His teaching methods helped me clear my concepts thoroughly. The regular NET mock tests and analysis sessions were game-changers in my preparation.',
    image: '/gallery/2.jpeg',
  },
  {
    id: 't3',
    name: 'Rohit Verma',
    course: 'SLET (NE Region) Program',
    result: 'Qualified SLET',
    quote: 'The SLET specific test series and the detailed coverage of Paper-I at Educere gave me the exact push I needed. The study materials are concise, up-to-date, and highly relevant.',
    image: '/testimonials/t3.jpg',
  },
  {
    id: 't4',
    name: 'Sneha Reddy',
    course: 'UGC NET Commerce',
    result: 'Qualified JRF',
    quote: 'I joined Educere with a lot of doubts about Commerce Paper-II, but Prof. Verma made accounting and finance so easy to understand. Qualifying JRF wouldn\'t have been possible without this guidance.',
    image: '/testimonials/t4.jpg',
  }
];
