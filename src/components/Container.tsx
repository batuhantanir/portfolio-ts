import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  active: boolean;
}

function Container({ id, children, className, active }: ContainerProps) {
  return (
    <div id={id} className="bg-white relative">
      <div className="container sm:mx-auto ">
        <div
          className={twMerge(
            'flex flex-col gap-6 items-center justify-center py-10 transition-all ease-in-out delay-200 duration-500',
            className,
            active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Container;
