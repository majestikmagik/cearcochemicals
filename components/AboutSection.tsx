
import React from 'react';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface AboutSectionProps {
  id: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  const [contentRef, contentIsVisible] = useScrollFadeIn<HTMLDivElement>({ threshold: 0.3, triggerOnce: true });

  return (
    <section
      id={id}
      className="relative py-16 md:py-24 bg-cover bg-center">
      <div className="absolute inset-0 bg-black"></div>

      {/* Content needs to be relatively positioned to sit on top of the overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRef}
          className={`parallax mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl fade-in-section ${contentIsVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Our History
          </h2>
          <div className="space-y-6 text-lg text-white leading-relaxed">
            <p>
              Cleaning Equipment & Repair Company (CEARCO) is a locally owned business based in Richmond, Virginia. Established in 1981, CEARCO has built a reputation for excellence in the cleaning industry.
            </p>
            <p>
              We specialize in creating high-quality, specialty blended cleaning solutions. Unlike many mass-produced alternatives, our solutions are not powder-based but are meticulously formulated as liquids. This commitment to liquid-based formulas ensures superior performance and consistency.
            </p>
            <p>
              Throughout our decades of operation, we have remained faithful to our original formulas, which have stood the test of time and continue to deliver exceptional results for our valued customers. Our dedication to quality and tradition is what sets CEARCO apart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
