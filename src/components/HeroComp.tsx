import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { socialMedia } from '@/mocks/constants';
import Background from '@public/assets/hero.jpg';
import cv from '@public/assets/cv.pdf';

const words = ['developer', 1000, 'designer', 1000];

function HeroComp() {
  const [transformEffect, setTransformEffect] = useState(false);

  setTimeout(() => {
    setTransformEffect(true);
  }, 50);

  const transform = transformEffect
    ? 'translate-x-0 scale-100 opacity-100 transition-all ease-in-out duration-1000'
    : 'translate-x-32 scale-0 opacity-0';

  return (
    <div className='sticky top-0'>
      <div
        id="home"
        className="flex items-center sticky top-0  bg-cover bg-center w-full h-screen -z-50 transition-all ease-in-out duration-200 before:w-full before:h-full before:content-center before:absolute brightness-[.18]"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <div
        className={
          'absolute flex flex-col gap-3 z-50 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 container mx-auto ' +
          transform
        }
      >
        <div className="  text-7xl font-bold text-white z-50">
          Batuhan tanır
        </div>

        <div className="text-3xl text-thirtd text-shadow-xs shadow-secondary">
          I'm{' '}
          <TypeAnimation
            sequence={words}
            wrapper="span"
            speed={1}
            className="text-primary shadow-secondary text-shadow-xs"
            repeat={Infinity}
          />
        </div>
        <div className="flex gap-5 mt-5">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              className="text-primary hover:brightness-75 transition-all duration-300"
            >
              <item.icon
                className="group-hover:text-shadow-xs shadow-white"
                size={32}
              />
            </a>
          ))}
          <a
            href={cv}
            download="Batuhan-Tanır-CV.pdf"
            className="relative bg-primary px-1.5 flex items-center justify-center rounded-full text-white py-0.5 hover:brightness-75 transition-all duration-300 hover:scale-[1.02]
          active:scale-[.98] active:brightness-100}"
          >
            <span>CV</span>
            <span className="animate-ping animate-duration-[1.5s] animate-delay-1000 absolute w-full h-full bg-primary brightness-90 rounded-full -z-10"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default HeroComp;
