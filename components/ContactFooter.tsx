
import React from 'react';
import { NAV_LINKS, COMPANY_INFO } from '../constants';
import { NavLinkItem } from '../types';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebookF } from 'react-icons/fa';

interface ContactFooterProps {
  id: string;
  onLinkClick: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const ContactFooter: React.FC<ContactFooterProps> = ({ id, onLinkClick }) => {
  return (
    <footer id={id} className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About CEARCO */}
          <div>
            <img src="images/cearco.png" alt="CEARCO Logo" className="h-12 w-62 mb-4" />
            <p className="text-sm leading-relaxed">
              Handcrafted cleaning solutions since 1981. We provide quality products and services for all your cleaning needs. Located in Richmond, VA.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-lg font-semibold text-white mb-4">Quick Links</h6>
            <ul className="space-y-2">
              {NAV_LINKS.map((link: NavLinkItem) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => onLinkClick(e, link.href)}
                    className="hover:text-gray-600 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h6 className="text-lg font-semibold text-white mb-4">Contact Us</h6>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 mt-1 gray-400 flex-shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3 gray-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:gray-600 transition-colors duration-300">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="w-5 h-5 mr-3 gray-400 flex-shrink-0" />
                <span>SHOP: <a href={`tel:${COMPANY_INFO.shopPhone.replace(/\D/g, '')}`} className="hover:gray-400 transition-colors duration-300">{COMPANY_INFO.shopPhone}</a></span>
              </li>
              <li className="flex items-center ml-8">
                <span>RAYMOND: <a href={`tel:${COMPANY_INFO.raymondPhone.replace(/\D/g, '')}`} className="hover:gray-400 transition-colors duration-300">{COMPANY_INFO.raymondPhone}</a></span>
              </li>
              <li className="flex items-center ml-8">
                <span>SARAH: <a href={`tel:${COMPANY_INFO.sarahPhone.replace(/\D/g, '')}`} className="hover:gray-400 transition-colors duration-300">{COMPANY_INFO.sarahPhone}</a></span>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-400 transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href={COMPANY_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-400 transition-colors duration-300">
                <FaFacebookF size={24} />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="text-center text-sm text-gray-500">
          <p>&copy; {COMPANY_INFO.copyrightYear} CEARCO Chemicals, LLC. All Rights Reserved.</p>

        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
