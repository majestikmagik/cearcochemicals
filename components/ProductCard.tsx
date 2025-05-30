/* Original code written by Jamil Matheny */

import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

import { FaInstagram } from 'react-icons/fa'; // Assuming IGLogo is still needed for modal content
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  contact: string;
  fullScribe?: string;
  subDescription?: string;
  directions?: string;
  caution?: string;
  guarantee?: string;
}

interface ProductCardProps {
  product: Product;
}

const theme = createTheme({
  typography: {
    fontFamily: '"AMCAP Eternal", sans-serif',
  },
  // You might want to define a custom palette if your design system uses specific colors
  // palette: {
  //   primary: {
  //     main: '#212121', // Dark grey for your buttons based on the current style
  //   },
  //   secondary: {
  //     main: '#888888', // Light grey for hover
  //   },
  // },
});

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [cardRef, cardIsVisible] = useScrollFadeIn<HTMLDivElement>({ threshold: 0.3, triggerOnce: true });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-gray-300/50 hover:scale-105 fade-in-section ${cardIsVisible ? 'is-visible' : ''}`}
    >
      <div className="relative h-66 sm:h-70">
        <img
          src={product.imageUrl || 'images/CEARCO_label.jpg'}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.contact && (
          <span className="absolute top-2 right-2 bg-gray-200 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
           <a href="#contact">{product.contact}</a>
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: "'AMCAP Eternal', serif" }}>{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">{product.description}</p>
        <button
          onClick={handleOpen}
          // Using Tailwind CSS classes for button styling, but you could also use MUI's `variant` and `color` props
          className="mt-auto w-full bg-[#0A0A0A] text-white hover:bg-gray-400 hover:text-gray-900 font-regular py-3 px-4 rounded-lg transition duration-300 ease-in-out flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <span>View Details</span>
        </button>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <ThemeProvider theme={theme}>
          <DialogTitle>{product.name}</DialogTitle>
        </ThemeProvider>
        <DialogContent dividers>
          <p className="mb-4">{product.description}</p>
          {product.fullScribe && <p className="mb-4">{product.fullScribe}</p>}

          {product.subDescription && (
            <p className="mb-4">
              <b>Also try:</b> {product.subDescription}
            </p>
          )}

          {product.directions && (
            <p className="mb-4">
              <b>Directions:</b> {product.directions}
            </p>
          )}

          {product.caution && (
            <p className="mb-4">
              <b>Caution:</b> {product.caution}
            </p>
          )}

          {product.guarantee && (
            <p className="mb-4">
              <b>Guarantee:</b> {product.guarantee}
            </p>
          )}

          <p className="mb-4">
            Product manufactured by CEARCO CHEMICALS, LLC.
            <br />
            Richmond, Virginia.
          </p>

          <p className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="mailto:cearcochemicals@gmail.com" className="text-gray-700 hover:text-gray-900 hover:underline">
              cearcochemicals@gmail.com
            </a>
            <a
              href="https://www.instagram.com/cearco_chemicals" // You might want to use a dynamic URL if available
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-gray-900 hover:underline"
            >
              <FaInstagram aria-hidden="true" className="mr-1.5" /> {/* Icon is decorative, mr-1.5 for spacing */}
              cearco_chemicals
            </a>
          </p>
        </DialogContent>
        <DialogActions>
          <ThemeProvider theme={theme}>
            <Button onClick={handleClose} sx={{ color: '#111827' }}>
              Close
            </Button>
          </ThemeProvider>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductCard;