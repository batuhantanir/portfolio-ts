import { SiPrisma } from 'react-icons/si';

interface AboutSkillsItemProps {
  skillName: string;
}

const AboutSkillsItem = ({ skillName }: AboutSkillsItemProps) => {
  return (
    <div className=" w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 ">
      <div className="flex items-center gap-2 hover:scale-105 cursor-default">
        <div>
          <SiPrisma />
        </div>
        <div className="font-bold text-lg text-secondary whitespace-nowrap ">
          {skillName.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default AboutSkillsItem;
