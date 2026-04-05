import React, { useState } from 'react';
import logo from '../assets/logo.png'; 
import { FaHome, FaBook, FaUserGraduation, FaUserShield } from 'react-icons/fa'; // Icons import
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger icons
import '../App.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Links ke saath icons bhi array mein add kar diye hain
  const navLinks = [
    { name: 'Home', href: '/', icon: <FaHome /> },
    { name: 'Course', href: '/course', icon: <FaBook /> },
    { name: 'Student Login', href: '/student-login', icon: <FaUserGraduation /> },
    { name: 'Admin Login', href: '/admin-login', icon: <FaUserShield /> },
  ];

  return (
    <nav className="bg-[#002366] shadow-lg w-full z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* --- Logo Section --- */}
          <a href="/" className="flex items-center gap-2 group">
            <img 
              className="h-10 w-auto transform transition-transform group-hover:scale-110" 
              src={logo} 
              alt="LearnNov Logo" 
            />
            <span className="text-2xl font-bold text-[#F0F8FF] tracking-tight transition-colors">
              Learn<span className="text-blue-400">Nova</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#F0F8FF] hover:text-blue-300 font-medium transition-all duration-200 flex items-center gap-2 text-sm lg:text-base"
              >
                <span className="text-blue-400">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#F0F8FF] focus:outline-none p-2 rounded-md hover:bg-[#003262] transition-colors"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Menu */}
      <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-16 right-0 w-64 h-full bg-[#002366] transition-transform duration-300 ease-in-out md:hidden border-l border-blue-900 z-40`}>
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // Link click pe menu band ho jaye
              className="flex items-center gap-4 px-4 py-3 text-[#F0F8FF] hover:bg-[#003262] rounded-xl font-medium transition-all"
            >
              <span className="text-blue-400 text-xl">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;