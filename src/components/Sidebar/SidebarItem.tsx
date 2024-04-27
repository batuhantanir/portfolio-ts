import React from 'react';
import { twMerge } from 'tailwind-merge';
import { motion, useAnimation } from 'framer-motion';

interface SidebarItemProps {
  item: typeof import('@/mocks/constants').sidebarData[0];
  activeSection: string;
  className?: string;
  isMobile?: boolean;
  onClick?: () => void;
}

function SidebarItem({
  item,
  className,
  activeSection,
  isMobile,
  ...props
}: SidebarItemProps) {
  const mainControls = useAnimation();

  React.useEffect(() => {
    if (activeSection.toLowerCase() == item.labelName.toLowerCase()) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [activeSection]);

  const variants = isMobile
    ? {
        hidden: {
          height: '3.7rem',
          width: '3.7rem',
        },
        visible: {
          height: '100%',
        },
      }
    : {
        hidden: {
          width: '3.7rem',
        },
        visible: {
          width: '100%',
          transition: {
            type: 'tween',
            duration: 0.6,
          },
        },
      };

  return (
    <motion.a
      className={twMerge(
        ' z-[1000] flex flex-col-reverse lg:flex-row items-center gap-2 overflow-hidden group lg:h-fit p-3.5 sm:p-4 cursor-pointer bg-thirtd rounded-full transition-all duration-300 ease-in-out hover:bg-primary hover:text-white active:bg-primary lg:shadow-md shadow-black group-hover:shadow-xl lg:hover:w-fit h-[3.8rem] hover:h-fit',
        activeSection.toLowerCase() === item.labelName.toLowerCase() &&
          'bg-primary text-white'
      )}
      variants={variants}
      initial="hidden"
      animate={mainControls}
      {...props}
      href={`#${item.labelName.toLowerCase()}`}
    >
      <span className="p-1">
        <item.icon size={20} />
      </span>
      <motion.div
        id={item.labelName.toLowerCase()}
        variants={{
          hidden: {
            scale: 0,
            x: '-100%',
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            x: 0,
            transition: {
              type: 'tween',
              duration: 0.3,
              ease: 'easeInOut',
            },
          },
        }}
        initial="hidden"
        animate={mainControls}
        className={
          'group-hover:opacity-100  group-hover:duration-100 transition-opacity ease-in w-fit h-fit flex flex-col lg:flex-row items-center -space-y-1 lg:space-y-0 lg:gap-0'
        }
      >
        {item.labelName.split('').map((letter: string, index: number) => (
          <span className="text-sm uppercase" key={index}>
            {letter}
          </span>
        ))}
      </motion.div>
    </motion.a>
  );
}

export default SidebarItem;
