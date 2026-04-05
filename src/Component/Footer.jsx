import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Aapki image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Course', href: '/course' },
    { name: 'Student Login', href: '/student-login' },
    { name: 'Admin Login', href: '/admin-login' },
  ];

  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* --- Logo aur Name Section (Click-able) --- */}
          <a href="/" className="flex items-center gap-2 group">
            <img 
              className="h-10 w-auto transform transition-transform group-hover:scale-105" 
              src={logo} 
              alt="LearnNov Logo" 
            />
            <span className="text-2xl font-bold text-gray-800 tracking-tight transition-colors group-hover:text-blue-600">
              Learn<span className="text-blue-600 group-hover:text-blue-700">Nov</span>
            </span>
          </a>

          {/* Desktop Menu (Bari screens) */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-1 py-2"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button (Choti screens) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-md hover:bg-gray-100"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100 shadow-inner`} id="mobile-menu">
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2.5 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;