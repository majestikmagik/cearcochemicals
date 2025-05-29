
import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductSection from './components/ProductSection';
import ContactFooter from './components/ContactFooter';
import ScrollToTopButton from './components/ScrollToTopButton';
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const targetId = href.substring(1); // Remove '#'
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation navLinks={NAV_LINKS} onLinkClick={handleLinkClick} />
      
      <main className="flex-grow">
        <HeroSection id="home" />
        <AboutSection id="about" />
        <ProductSection id="products" />
        <ContactFooter id="contact" onLinkClick={handleLinkClick} />
      </main>
      
      <ScrollToTopButton />
    </div>
  );
};

export default App;
