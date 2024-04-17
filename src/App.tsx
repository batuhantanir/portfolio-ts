import { useEffect, useState } from 'react';

import Sidebar from './components/Sidebar';
import HeroComp from './components/HeroComp';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

// import {
//   AiOutlineGithub,
//   AiOutlineInstagram,
//   AiOutlineLinkedin,
// } from 'react-icons/ai';
import GoTopButton from './components/GoTopButton';
import Contact from './components/Contact';
import { findSection } from './utils/utils';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showComponent, setShowComponent] = useState<string[]>([]);
  const [showGoTopButton, setShowGoTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.screen.height / (3 / 2);

      // Null kontrolü ekleyerek id'lere sahip öğeleri alıyoruz.
      const aboutSection = document.getElementById('about')?.offsetTop || 0;
      const skillsSection = document.getElementById('skills')?.offsetTop || 0;
      const resumeSection = document.getElementById('resume')?.offsetTop || 0;
      const portfolioSection =
        document.getElementById('portfolio')?.offsetTop || 0;
      const contactSection = document.getElementById('contact')?.offsetTop || 0;

      if (scrollPosition < aboutSection - screenHeight) {
        setActiveSection('home');
      } else if (scrollPosition < resumeSection - screenHeight) {
        setActiveSection('about');
      } else if (scrollPosition < portfolioSection - screenHeight) {
        setActiveSection('resume');
      } else if (scrollPosition < contactSection) {
        setActiveSection('portfolio');
      } else {
        setActiveSection('contact');
      }

      scrollPosition > aboutSection - screenHeight &&
        setShowComponent((prev) => [...prev, 'about']);
      scrollPosition > skillsSection - screenHeight &&
        setShowComponent((prev) => [...prev, 'skills']);
      scrollPosition > resumeSection - screenHeight &&
        setShowComponent((prev) => [...prev, 'resume']);
      scrollPosition > portfolioSection - screenHeight &&
        setShowComponent((prev) => [...prev, 'portfolio']);
      scrollPosition >= contactSection - screenHeight &&
        setShowComponent((prev) => [...prev, 'contact']);
      scrollPosition > 20
        ? setShowGoTopButton(true)
        : setShowGoTopButton(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <GoTopButton className={showGoTopButton ? 'opacity-100' : ''} />
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <HeroComp />
      <About
        aboutIsActive={findSection('about', showComponent)}
        skillsIsActive={findSection('skills', showComponent)}
      />
      <Resume active={findSection('resume', showComponent)} />
      <Portfolio active={findSection('portfolio', showComponent)} />
      <Contact active={findSection('contact', showComponent)} />
      <Footer />
    </div>
  );
}

export default App;
