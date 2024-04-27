import React from 'react';
import { twMerge } from 'tailwind-merge';
import { motion, useAnimation, useInView } from 'framer-motion';
interface ContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

function Container({ id, children, className }: ContainerProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
    console.log('isInView', isInView);
  }, [isInView]);

  return (
    <section id={id} className="bg-slate-100 relative">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.3 },
          },
        }}
        initial="hidden"
        animate={mainControls}
        className="container sm:mx-auto "
      >
        <div
          ref={ref}
          className={twMerge(
            'flex flex-col gap-6 items-center justify-center py-10 transition-all ease-in-out delay-200 duration-500',
            className
          )}
        >
          {children}
        </div>
      </motion.div>
    </section>
  );
}

export default Container;
