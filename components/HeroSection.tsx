
import React from 'react';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';


interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const [contentRef, contentIsVisible] = useScrollFadeIn<HTMLDivElement>({ threshold: 0.3, triggerOnce: true });

  return (
    <section id={id} className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('images/ourhistory_bg_01.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-55"></div>
      </div>

      {/* Content Layer */}
      <div
        ref={contentRef}
        className={`relative z-10 p-6 md:p-12 max-w-3xl mx-auto fade-in-section ${contentIsVisible ? 'is-visible' : ''}`}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg ">
          This isn't your powdered box drum kit that you mix yourself
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 drop-shadow-md">
          Our products are handcrafted in our shops in small batch quantities like craft beer.
        </p>
        <a
          href="#products"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-gray-200 text-gray-900 hover:bg-gray-800 hover:text-white fade-in-out duration-900 py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Explore Our Products
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
