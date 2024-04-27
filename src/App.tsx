import Sidebar from './components/Sidebar';
import HeroComp from './components/HeroComp';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import GoTopButton from './components/GoTopButton';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop - 1 &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <>
      <GoTopButton />
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <HeroComp />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
