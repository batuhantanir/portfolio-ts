import { twMerge } from 'tailwind-merge';
import { BiUpArrowAlt } from 'react-icons/bi';

interface GoTopButtonProps {
  className?: string;
}

function GoTopButton({ className }: GoTopButtonProps) {
  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button
      onClick={handleClick}
      className={twMerge(
        `
            hidden
            sm:block
            opacity-0
            fixed
            z-30
            bg-primary
            rounded-full
            p-2
            text-white
            right-5
            bottom-5
            transition-all
            duration-300
            ease-in-out
            hover:bg-primary/95
            hover:rotate-[360deg]
            `,
        className
      )}
    >
      <BiUpArrowAlt size={24} />
    </button>
  );
}

export default GoTopButton;
