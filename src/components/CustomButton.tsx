import React from 'react';
import { twMerge } from 'tailwind-merge';

function CustomButton({
  children,
  handleClick,
  className,
  ...rest
}: {
  children: React.ReactNode;
  handleClick?: () => void;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div
      className={twMerge(
        'relative w-full h-full transition-all duration-300 ease-in-out',
        className
      )}
    >
      <button
        onClick={handleClick}
        className={twMerge(
          ' z-10 bg-primary rounded-md p-1 text-white   hover:bg-primary w-full h-full',
          'cursor-pointer   z-30 block  -translate-x-0.5 -translate-y-0.5 overflow-hidden border-2 border-neutral-950 transition-all duration-300 ease-in-out   hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0'
        )}
        {...rest}
      >
        {children}
      </button>
      <div className=" absolute -z-10 inset-0  w-full h-full  bg-black rounded-md "></div>
    </div>
  );
}

export default CustomButton;
