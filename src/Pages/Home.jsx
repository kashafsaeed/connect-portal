import React from 'react';
import heroImg from '../assets/hero.jpg'; 
import '../App.css';

const Home = () => {
  // Stats Data
  const stats = [
    { label: 'Students Registered', value: '2K+' },
    { label: 'Expert Instructors', value: '50+' },
    { label: 'Online Courses', value: '120+' },
    { label: 'Success Rate', value: '95%' },
  ];

  return (
    <div className="bg-[#F5F5F5]">
      {/* --- Hero Section --- */}
      <section className="relative pt-10 pb-16 lg:pt-24 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Empower Your Future with <br />
                <span className="text-[#003262]">LearnNova</span>
              </h1>
              <p className="mt-4 lg:mt-6 text-base lg:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Unlock your potential with professional courses designed to help you master new skills. 
                Join LearnNova today and start your journey towards excellence.
              </p>
              
              <div className="mt-8 flex flex-row justify-center lg:justify-start gap-3">
                <button className="px-5 py-2.5 lg:px-8 lg:py-3 bg-[#003262] text-white text-sm lg:text-base font-semibold rounded-lg hover:bg-[#00264d] transition-all shadow-md">
                  Get Started
                </button>
                <button className="px-5 py-2.5 lg:px-8 lg:py-3 border-2 border-[#003262] text-[#003262] text-sm lg:text-base font-semibold rounded-lg hover:bg-blue-50 transition-all">
                  Courses
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 w-full max-w-sm lg:max-w-none">
              <div className="relative">
                <img
                  src={heroImg}
                  alt="LearnNova Hero"
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Stats Cards Section --- */}
      <section className="pb-20 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl lg:text-4xl font-bold text-[#003262]">
                  {stat.value}
                </h3>
                <p className="text-gray-500 text-sm lg:text-base mt-2 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Ready to Start Section (New) --- */}
      <section className="py-16 mb-30 lg:py-20  bg-[#003262] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-blue-100 text-lg lg:text-xl mb-10 leading-relaxed">
            Join thousands of students already learning on LearnNova. 
            Whether you want to start a new career or master a new hobby, we have the right course for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-10 py-4 bg-white text-[#003262] font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg">
              Join Now
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#003262] transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;