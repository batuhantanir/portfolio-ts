import CompenentHeader from '@/components/CompenentHeader';
import TiltCard from '@/components/TiltCard';
import AboutSkillsItem from './AboutSkillsItem';

import Image from '@public/assets/kare.jpg';
import skillsData from '@/mocks/AboutData';
import { twMerge } from 'tailwind-merge';
import { IoIosArrowForward } from 'react-icons/io';
import Container from '../Container';

interface AboutProps {
  aboutIsActive: boolean;
  skillsIsActive: boolean;
}

function About({ aboutIsActive, skillsIsActive }: AboutProps) {
  const arrowIcon = <IoIosArrowForward className="text-primary" size={20} />;

  return (
    <>
      <Container id="about" active={aboutIsActive}>
        <CompenentHeader title={'about'} />
        <p className="italicfont-lighttext-center">
          {' '}
          ay önce başladığım yazılım serüvenime şu anda Medyanes360'da staj
          görerek ve 42 İstanbul'da eğitim alarak devam ediyorum. Bu zamana
          kadar bir çok bilgiyi kendi araştırmalarım ve 42 akran öğrenimi metodu
          ile en iyi şekilde kavradığımı düşünüyorum.
        </p>
        <div className="flex flex-col items-center gap-6">
          <TiltCard className="">
            <img
              src={Image}
              alt="image"
              className="max-w-[400px] max-h-[400px] w-full lg:w-[250px] xl:w-full rounded-2xl shadow-costum"
              draggable="false"
            />
          </TiltCard>
          <div className="flex flex-col gap-4 col-span-4">
            <h2 className="text-4xl font-semibold text-secondary/85 col-span-2">
              Front-end Developer.
            </h2>
            <p className="italic font-light">
              Merakımı yöneltmiş olduğu frontend alanında her geçen gün daha iyi
              sonuçlar almaya ve kod yazarken nasıl bir yol izleyeceğime dair
              fikirler edinmeye devam ediyorum.
            </p>
            <ul className="col-span-2 grid lg:grid-cols-2 lg:gap-x-2 lg:gap-y-6">
              <li className=" flex items-center gap-1">
                <div>{arrowIcon}</div>{' '}
                <span className="font-semibold">Doğum tarihi:</span> 20 HAZ 2001{' '}
              </li>
              <li className=" lg:col-start-2 flex items-center gap-1">
                <div>{arrowIcon}</div>{' '}
                <span className="font-semibold">Age:</span> 23{' '}
              </li>
              <li className=" flex items-center gap-1">
                <div>{arrowIcon}</div>{' '}
                <span className="font-semibold">City:</span> İstanbul, Turkey{' '}
              </li>
              <li className=" lg:col-start-2  flex items-center gap-1">
                <div>{arrowIcon}</div>{' '}
                <span className="font-semibold">Email:</span>
                <a
                  className="text-primary hover:text-primary/90 cursor-pointer"
                  href="mailto:batuhan.tanir00@gmail.com"
                >
                  batuhan.tanir00@gmail.com
                </a>
              </li>
            </ul>
            <p className="italic font-light">
              Düzenli yapılan çalışmanın insanı her zaman bir adım daha
              ilerisine taşıdığı kanıtlanmış bir şeydir. Bu yüzden düzen
              bozulmadan istikrarlı bir şekilde hedefe odaklanıp yolda yürümeye
              başlamak gerekir. Yürüyeceğimiz bu yolda küçük taşlara takılsakta
              hedefimiz her zaman ayağa kalkmamız için bize yardımcı olacaktır.
              Bu mentaliteyi benimsemem ile birlikte her şeyi başarabilir bir
              hale gelmeye başladı.
            </p>
          </div>
        </div>
      </Container>
      <Container id="skills" active={skillsIsActive}>
        <CompenentHeader title={'Skills'} />
        <p className="text-center italic font-light">
          Her şeyi en başından en sonuna kadar harfi harfine öğrenmek imkansıza
          yakın bir aktivite olacaktır fakat eksiklerini farkettikçe kapatmak en
          mantıklı olandır.
        </p>
        <div className="flex flex-wrap justify-center gap-8 w-full">
          {skillsData.map((skill, index) => (
            <AboutSkillsItem key={index} {...skill} />
          ))}
        </div>
      </Container>
    </>
  );
}

export default About;
