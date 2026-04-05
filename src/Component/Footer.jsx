import React from 'react';
// React Icons se icons import kiye hain
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaChevronRight } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-[#003262] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold italic">Learn<span className="text-blue-400">Nova</span></h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              Empowering students with professional skills through expert-led courses. Your journey to excellence starts here.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-blue-800 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {['Home', 'All Courses', 'Student Portal', 'Admin Login'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <FaChevronRight size={10} className="text-blue-400" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-blue-800 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-center gap-3">
                <MdEmail size={20} className="text-blue-400" />
                <span>info@learnnova.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone size={20} className="text-blue-400" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <MdLocationOn size={20} className="text-blue-400" />
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-blue-800 pb-2 inline-block">Follow Us</h3>
            <div className="flex space-x-3">
              <a href="#" className="p-3 bg-blue-900/50 rounded-full hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="p-3 bg-blue-900/50 rounded-full hover:bg-pink-600 hover:-translate-y-1 transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="p-3 bg-blue-900/50 rounded-full hover:bg-sky-400 hover:-translate-y-1 transition-all duration-300">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="p-3 bg-blue-900/50 rounded-full hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="border-t border-blue-900/50 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} LearnNova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;