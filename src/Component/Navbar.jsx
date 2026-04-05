import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Ye import zaroori hai
import logo from '../assets/logo.png'; 
import { FaHome, FaBook, FaUserAlt, FaUserShield } from 'react-icons/fa'; 
import { HiMenu, HiX } from 'react-icons/hi'; 
import '../App.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', icon: <FaHome size={18} /> },
    { name: 'Course', href: '/course', icon: <FaBook size={18} /> }, // 2. .jsx hata diya
    { name: 'Student Login', href: '/student-login', icon: <FaUserAlt size={18} /> },
    { name: 'Admin Login', href: '/admin-login', icon: <FaUserShield size={18} /> },
  ];

  return (
    <nav className="bg-[#002366] shadow-lg w-full z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section - Use <Link> instead of <a> */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              className="h-10 w-auto transform transition-transform group-hover:scale-110" 
              src={logo} 
              alt="LearnNova" 
            />
            <span className="text-2xl font-bold text-[#F0F8FF] tracking-tight">
              Learn<span className="text-blue-400">Nova</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href} // 3. href ki jagah 'to' use kiya
                className="text-[#F0F8FF] hover:text-blue-300 font-medium transition-all duration-200 flex items-center gap-2 text-sm lg:text-base"
              >
                <span className="text-blue-400">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#F0F8FF] focus:outline-none p-2"
            >
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#001a4d] border-t border-blue-900`}>
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href} // 3. href ki jagah 'to' use kiya
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 px-4 py-3 text-[#F0F8FF] hover:bg-[#003262] rounded-xl font-medium"
            >
              <span className="text-blue-400 text-xl">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;