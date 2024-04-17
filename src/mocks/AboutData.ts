export const experienceData = () => {
  // Şu anki tarih
  const now = new Date();
  // Başlangıç tarihi (2023-3-1)
  const targetDate = new Date('2023-03-01');
  const diffDate = differenceInMonths(now, targetDate);
  return Intl.DateTimeFormat('tr-TR', {
    month: 'long',
    year: 'numeric',
  }).format(diffDate);
};

const skillsData = [
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
];

export default skillsData;
