import { GoArrowRight } from 'react-icons/go';
import Image from '../Image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  linkTitle: string;
}

function ProjectCard({
  title,
  description,
  image,
  link,
  linkTitle,
}: ProjectCardProps) {
  return (
    <div className=" size-64 group sticky top-0 sm:relative">
      <div className="bg-primary text-white flex flex-col justify-center gap-1 px-6 py-4 h-32 w-full">
        <span>{title}</span>
        <span className="text-sm italic">{description}</span>
      </div>
      <div>
        <div className="absolute bottom-0 w-full h-full left-0 group-hover:size-32 transition-all duration-700 z-50">
          <Image src={image} alt={title} className="w-full h-full" />
        </div>
        <a
          href={link}
          className=" hover:underline hover:text-thirtd w-1/2 bg-secondary text-white bottom-0 right-0 absolute size-32 flex items-center justify-center gap-1.5 transition-all duration-300 ease-in-out "
        >
          <span>{linkTitle}</span>
          <GoArrowRight className=" stroke-1 group-hover:-rotate-45 transition-transform duration-300 " />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
