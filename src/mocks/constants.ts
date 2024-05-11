import {
  AiOutlineFile,
  AiOutlineGithub,
  AiOutlineHome,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineUser,
} from 'react-icons/ai';
import { BiBookContent, BiEnvelope } from 'react-icons/bi';
import billgates from '@public/assets/billgates.png';
import turfest from '@public/assets/turfest.png';
import valo from '@public/assets/valo.png';
import textflix from '@public/assets/textflix.png';
import terappin from '@public/assets/terappin.png';
// import textGenerator from '@public/assets/text-generator.png';
import recipe from '@public/assets/recipe.png';
import memory from '@public/assets/memory.png';
import markdown from '@public/assets/markdown.png';
import wecodez from '@public/assets/wecodez.png';

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
    title: 'We Codez',
    description:
      'Nextjs, Typescript, TailwindCss, Framer motion ile yapılmış bir proje. Bir yazılım şirketi sitesi.',
    image: wecodez,
    link: 'https://www.wecodez.com/',
    linkTitle: 'Projeye git',
  },
  {
    title: 'Turfest',
    description:
      'Nextjs, Typescript, NextAuth, Nodejs, Expressjs ile yapılmış bir proje. Bir tur sitesi.',
    image: turfest,
    hash: '',
    link: 'https://tur-fest-ts.vercel.app/',
    linkTitle: 'Projeye git',
  },
  {
    title: 'Terappin',
    description: 'Nextjs ile yapılmış bir proje. Bir terapi sitesi.',
    image: terappin,
    link: 'https://internship-terapy-project.vercel.app/',
    linkTitle: 'Projeye git',
  },
  {
    title: 'Recipe Site',
    description:
      'Reactjs, Redux, Axios ile yapılmış bir proje. Bir yemek tarifleri sitesi.',
    image: recipe,
    link: 'https://recipe-site-mauve.vercel.app/',
    linkTitle: 'Projeye git',
  },
  {
    title: 'Memory App',
    description:
      'Vitejs, Redux ile yapılmış bir proje. Bir yemek tarifleri sitesi.',
    image: memory,
    link: 'https://memory-app-orpin.vercel.app/',
    linkTitle: 'Projeye git',
  },
  {
    title: 'Memory App',
    description:
      'Vitejs, Redux, TailwindCss ile yapılmış bir proje. Bir markdown editör.',
    image: markdown,
    link: 'https://memory-app-7br6.vercel.app/',
    linkTitle: 'Projeye git',
  },
  {
    title: 'Spend Bill Gates Money',
    description:
      'Reactjs, Redux ile yapılmış bir proje. Bill Gatesin parasını harcayabilirsiniz. ',
    image: billgates,
    link: 'https://spend-bill-gates-money-one.vercel.app/',
    linkTitle: 'Projeye git',
  },
  {
    title: 'Valorant Wiki',
    description:
      'Reactjs, Redux, Axios ile yapılmış bir proje. Valorant oyunu hakkında bilgi alabileceğiniz bir wiki.',
    image: valo,
    link: 'https://valorant-wiki-three.vercel.app/',
    linkTitle: 'Projeye git',
  },
  {
    title: 'TextFlix',
    description:
      'Reactjs, Redux, Axios, Formik ile yapılmış bir proje. Bir film sitesi.',
    image: textflix,
    link: 'https://textflix.vercel.app/',
    linkTitle: 'Projeye git',
  },
  // {
  //   title: 'Text generator',
  //   description:
  //     'Vitejs, Redux, ile yapılmış bir proje. Bir metin oluşturucu uygulaması.',
  //   image: textGenerator,
  //   link: 'https://text-generator-app-black.vercel.app/',
  //   linkTitle: 'Projeye git',
  // },
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

export const skillsData = [
  { skillName: 'HTML' },
  { skillName: 'CSS' },
  { skillName: 'JavaScript' },
  { skillName: 'TypeScript' },
  { skillName: 'React' },
  { skillName: 'NextJs' },
  { skillName: 'Tailwind' },
  { skillName: 'React Native' },
  { skillName: 'Nodejs' },
  { skillName: 'Expressjs' },
  { skillName: 'MongoDb' },
  { skillName: 'Postgresql' },
  { skillName: 'Zustand' },
  { skillName: 'Redux' },
  { skillName: 'Prisma' },
];
