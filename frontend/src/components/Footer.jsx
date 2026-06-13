import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-border pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-primary block mb-4">VolunLink</span>
            <p className="text-gray-text text-sm">
              Connecting passionate individuals with meaningful volunteer opportunities to make a real difference in the community.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-text uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-text hover:text-primary text-sm">About Us</Link></li>
              <li><Link to="/events" className="text-gray-text hover:text-primary text-sm">Events</Link></li>
              <li><Link to="/contact" className="text-gray-text hover:text-primary text-sm">Contact</Link></li>
              <li><Link to="/register" className="text-gray-text hover:text-primary text-sm">Join as Volunteer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-text uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-text">
              <li>Ghaziabad, Uttar Pradesh</li>
              <li>awanishverma864@gmail.com</li>
              <li>7390083864</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-text uppercase tracking-wider mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-text hover:text-primary transition-colors"><FiFacebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-text hover:text-primary transition-colors"><FiTwitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-text hover:text-primary transition-colors"><FiInstagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-text hover:text-primary transition-colors"><FiLinkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-border flex justify-center">
          <p className="text-sm text-gray-text">
            &copy; {new Date().getFullYear()} VolunLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
