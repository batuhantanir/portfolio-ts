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
    <div
      className={twMerge(
        'hidden sm:block opacity-0  fixed right-5 bottom-5 w-8 h-8 z-[200] transition-all duration-300 ease-in-out',
        className
      )}
    >
      <button
        onClick={handleClick}
        className={twMerge(
          'fixed z-30 bg-primary rounded-md p-1 text-white   hover:bg-primary ',
          'cursor-pointer   z-30 block  -translate-x-0.5 -translate-y-0.5 overflow-hidden border-2 border-neutral-950 transition-all duration-300 ease-in-out   hover:-translate-x-1.5 hover:-translate-y-1.5 active:translate-x-0 active:translate-y-0'
        )}
      >
        <BiUpArrowAlt size={24} />
      </button>
      <div className="absolute inset-0  w-full h-full  bg-black rounded-md "></div>
    </div>
  );
}

export default GoTopButton;
