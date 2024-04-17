import {
  AiOutlineFile,
  AiOutlineGithub,
  AiOutlineHome,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineUser,
} from 'react-icons/ai';
import { BiBookContent, BiEnvelope } from 'react-icons/bi';
import kare from '@public/assets/kare.jpg';

export const socialMedia = [
  {
    icon: AiOutlineLinkedin,
    href: 'https://www.linkedin.com/in/batuhan-tanir/',
  },
  {
    icon: AiOutlineGithub,
    href: 'https://github.com/batuhantanir',
  },
  {
    icon: AiOutlineInstagram,
    href: 'https://www.instagram.com/36batu',
  },
];

export const sidebarData = [
  {
    id: 'home',
    icon: AiOutlineHome,
    labelName: 'Home',
  },
  {
    id: 'about',
    icon: AiOutlineUser,
    labelName: 'About',
  },
  {
    id: 'resume',
    icon: AiOutlineFile,
    labelName: 'Resume',
  },
  {
    id: 'portfolio',
    icon: BiBookContent,
    labelName: 'Portfolio',
  },
  {
    id: 'contact',
    icon: BiEnvelope,
    labelName: 'Contact',
  },
];

export const portfolioData = [
  {
    title: 'Project 1',
    description: 'Description 1',
    image: kare,
    link: 'Link 1',
    linkTitle: 'Link Title 1',
  },
  {
    title: 'Project 1',
    description: 'Description 1',
    image: kare,
    link: 'Link 1',
    linkTitle: 'Link Title 1',
  },
  {
    title: 'Project 1',
    description: 'Description 1',
    image: kare,
    link: 'Link 1',
    linkTitle: 'Link Title 1',
  },
  {
    title: 'Project 1',
    description: 'Description 1',
    image: kare,
    link: 'Link 1',
    linkTitle: 'Link Title 1',
  },
  {
    title: 'Project 1',
    description: 'Description 1',
    image: kare,
    link: 'Link 1',
    linkTitle: 'Link Title 1',
  },
  {
    title: 'Project 1',
    description: 'Description 1',
    image: kare,
    link: 'Link 1',
    linkTitle: 'Link Title 1',
  },
  
];

export const education = [
  {
    header: 'Education',
    name: 'Digital technologies (piscine)',
    descriptoin: 'Ecole 42 istanbul, İstanbul, Turkey',
    date: 'Ekim 2023 - Kasım 2023',
    skill: ['Git', 'C', 'Algoritma'],
  },
  {
    name: 'Web design and coding',
    descriptoin: 'Istanbul University, İstanbul, Turkey',
    date: 'Eylül 2023 - Present',
    skill: [
      'HTML',
      'CSS',
      'Javascript',
      'Front-End Development',
      'Node.js',
      'Algoritma',
    ],
  },
  {
    name: 'Digital technologies (Learner)',
    descriptoin: 'Ecole 42 istanbul, İstanbul, Turkey',
    date: 'Aralık 2023 - Present',
    skill: ['Git', 'C', 'C++', 'Algoritma'],
  },
];

export const workExperience = [
  {
    header: 'Experience',
    name: 'FreeLancer',
    descriptoin: 'Freelance, İstanbul, Turkey',
    date: 'Ağustos 2023 - Present',
    skill: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Javascript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'React Native',
      'Redux',
      'Firebase',
      'Zustand',
      'PostgreSQL',
    ],
  },
  {
    name: 'Intern',
    descriptoin: 'Medyanes360, İstanbul, Turkey',
    date: 'Ağustos 2023 - Present',
    skill: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Javascript',
      'MongoDB',
      'Mongoose',
      'Prisma',
    ],
  },
];

export const certificates = [
  {
    header: 'Certificates',
    name: 'Introduction to Front-End Development',
    descriptoin: 'Meta, Coursera',
    date: 'Şubat 2024',
    skill: ['UI Design', 'Front-End Development'],
    href: 'https://coursera.org/share/cef3c5a8246694a576caafd799309880',
  },
  {
    name: 'Version Control with Git',
    descriptoin: 'Meta, Coursera',
    date: 'Mart 2024',
    skill: ['Git', 'Github'],
    href: 'https://coursera.org/share/f23852a075467f89f40e51e838ebf4a4',
  },
  {
    name: 'Programming with JavaScript',
    descriptoin: 'Meta, Coursera',
    date: 'Mart 2024',
    skill: ['JavaScript', 'Algorithms', 'Front-End Development'],
    href: 'https://coursera.org/share/52ee11a4e35a9c22ba156e935a9c939a',
  },
  {
    name: 'HTML and CSS in depth',
    descriptoin: 'Meta, Coursera',
    date: 'Mart 2024',
    skill: [
      'HTML',
      'HTML5',
      'CSS3',
      'CSS',
      'Bootstrap',
      'Front-End Development',
      'UI Design',
      'Responsive Design',
    ],
    href: 'https://coursera.org/share/53dbf1d267870b30ab5710c94827e079',
  },
  {
    name: 'React Basics',
    descriptoin: 'Meta, Coursera',
    date: 'Nisan 2024',
    skill: [
      'React',
      'Front-End Development',
      'UI Design',
      'React Hooks',
      'Context API',
    ],
    href: 'https://coursera.org/share/839f05254f0a610c1be8175873b2d853',
  },
];
