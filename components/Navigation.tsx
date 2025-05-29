
import React, { useState, useEffect } from 'react';
import { NavLinkItem } from '../types';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavigationProps {
  navLinks: NavLinkItem[];
  onLinkClick: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ navLinks, onLinkClick }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled || isNavOpen ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => { onLinkClick(e, '#home'); setIsNavOpen(false);}}>
            <img src="images/cearco.png" alt="CEARCO Logo" className="h-12 w-62" />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { onLinkClick(e, link.href); setIsNavOpen(false);}}
                className={`px-6 py-2 rounded-md hover:bg-gray-600 text-md transition-all duration-900 ease-in-out ${isScrolled || isNavOpen ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-200 hover:text-white'} transition-colors`}
              >
                {link.label}
              </a>
            ))}
             
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            
            <button
              onClick={toggleNav}
              className={`p-2 rounded-md ${isScrolled || isNavOpen ? 'text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' : 'text-gray-700 hover:text-gray-900'}`}
              aria-expanded={isNavOpen}
            >
              {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isNavOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { onLinkClick(e, link.href); toggleNav(); }}
                className="block px-3 py-2 rounded-md text-base text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
