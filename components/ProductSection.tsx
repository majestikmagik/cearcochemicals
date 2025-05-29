
import React from 'react';
import { Product } from '../types';
import { PRODUCTS_DATA } from '../constants';
import ProductCard from './ProductCard';

interface ProductSectionProps {
  id: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 md:py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/Black_Background.png')" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Premium Products
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Designed for the professional detailer and dedicated cleaner to have superior, one-of-a-kind products. The quality of these handcrafted solutions speaks for itself.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
          {PRODUCTS_DATA.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl text-gray-700">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center" style={{ fontFamily: "'AMCAP Eternal', serif" }}>
            More Than Just Chemicals
          </h3>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              CEARCO is an authorized sales & service center for ALKOTA, WITCO, ALL AMERICAN, and ELECTRO MAGIC hot & cold water pressure washers.
            </p>
            <p>
              <strong>Important Update:</strong> ALKOTA CLEANING SYSTEMS will be phasing out ALL AMERICAN & ELECTRO MAGIC pressure washers. However, CEARCO will continue to stock available parts & accessories for these brands to support our customers.
            </p>
            <p>
              We maintain a comprehensive inventory of parts and accessories for a wide array of power washers, ensuring you have what you need to keep your equipment running smoothly.
            </p>
            <p>
              We also offer other specialized products for specific cleaning needs. These items may or may not be available for shipping and are often best suited for local pickup.
            </p>
            <p className="font-semibold">
              For local sales only, we provide:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Bleach</li>
              <li>Tar & Asphalt Remover (T & A 67)</li>
              <li>Muriatic Acid</li>
            </ul>
            <p className="text-xl font-semibold text-center mt-8 text-gray-800">
              Come wash with us!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
