import React from 'react';
import { Leaf, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold">Earth Day 2025</span>
            </div>
            <p className="text-green-200 mb-6">
              Join the global movement to preserve Earth's natural beauty and resources for future generations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-green-200 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-green-200 hover:text-white transition-colors">About Earth Day</a>
              </li>
              <li>
                <a href="#calculator" className="text-green-200 hover:text-white transition-colors">Carbon Calculator</a>
              </li>
              <li>
                <a href="#pledge" className="text-green-200 hover:text-white transition-colors">Take Action</a>
              </li>
              <li>
                <a href="#gallery" className="text-green-200 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#resources" className="text-green-200 hover:text-white transition-colors">Resources</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span className="text-green-200">info@earthday2025.org</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span className="text-green-200">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span className="text-green-200">
                  1234 Green Street<br />
                  Eco City, Earth 54321
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-700 pb-2">Newsletter</h3>
            <p className="text-green-200 mb-4">
              Stay updated with the latest environmental news and upcoming Earth Day events.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-green-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-green-400"
                required
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-12 pt-6 text-green-300 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Earth Day Initiative. All rights reserved.</p>
          <p>BUILD BY ENGINEERING DEPARTMENT</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;