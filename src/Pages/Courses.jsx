import React from 'react';
import courseHeroImg from '../assets/course.jpg'; 
import { 
  FaCode, FaPalette, FaBullhorn, FaDatabase, FaChartBar, 
  FaMobileAlt, FaLaptopCode, FaSearchDollar, FaShieldAlt, 
  FaLayerGroup, FaRobot, FaCloud 
} from 'react-icons/fa';
import '../App.css';

const Courses = () => {
  const allCourses = [
    { title: 'Web Development', icon: <FaCode />, desc: 'Master modern frontend and backend technologies like React, Node.js, and Express to build scalable web applications from scratch.' },
    { title: 'Graphic Design', icon: <FaPalette />, desc: 'Learn the principles of design, color theory, and typography using industry-standard tools like Adobe Photoshop and Illustrator.' },
    { title: 'Digital Marketing', icon: <FaBullhorn />, desc: 'Grow your business with SEO, SEM, social media marketing, and email campaigns to reach a global audience effectively.' },
    { title: 'Data Science', icon: <FaDatabase />, desc: 'Dive deep into data analysis, machine learning, and statistical modeling using Python and R to solve complex business problems.' },
    { title: 'Data Analyst', icon: <FaChartBar />, desc: 'Learn to visualize data trends and create impactful dashboards using PowerBI, Tableau, and Advanced Excel techniques.' },
    { title: 'UI/UX Design', icon: <FaLayerGroup />, desc: 'Design user-centric interfaces and enhance user experiences through wireframing, prototyping, and usability testing.' },
    { title: 'Mobile App Dev', icon: <FaMobileAlt />, desc: 'Build high-performance native and cross-platform mobile applications for iOS and Android using React Native and Flutter.' },
    { title: 'Cyber Security', icon: <FaShieldAlt />, desc: 'Protect digital assets and networks from cyber threats by learning ethical hacking, encryption, and security protocols.' },
    { title: 'Business Analytics', icon: <FaSearchDollar />, desc: 'Understand market trends and financial data to make informed strategic decisions that drive organizational growth.' },
    { title: 'Full Stack Tech', icon: <FaLaptopCode />, desc: 'Become a versatile developer by mastering both client-side and server-side technologies with database management.' },
    { title: 'Artificial Intelligence', icon: <FaRobot />, desc: 'Explore the world of AI and Neural Networks. Learn how to build intelligent systems and automation tools for the modern era.' },
    { title: 'Cloud Computing', icon: <FaCloud />, desc: 'Master AWS, Azure, and Google Cloud platforms. Learn to deploy and manage secure, scalable cloud-based infrastructures.' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* --- Hero Section --- */}
        <section className="relative h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${courseHeroImg})` }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px]"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#d5e1f6] mb-6">
              Our Premium Courses
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Explore our wide range of professional categories designed by industry experts.
            </p>
          </div>
        </section>

        {/* --- Dark Section with Cards (Added Margins) --- */}
        <section className="my-20 py-20 bg-[#001a4d]  mx-4 lg:mx-10 rounded-3xl"> 
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 italic">Explore Our Categories</h2>
              <p className="text-blue-200 text-lg">Choose your path to success from our top-rated programs.</p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {allCourses.map((course, index) => (
                <div 
                  key={index} 
                  className="bg-[#d5e1f6] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[420px] flex flex-col items-center text-center group border border-blue-200"
                >
                  <div className="text-4xl text-[#003262] mb-6 group-hover:scale-110 transition-transform">
                    {course.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#001a4d] mb-4">
                    {course.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
                    {course.desc}
                  </p>
                  
                  {/* Apply Now Button with Special Hover */}
                  <div className="mt-auto w-full">
                    <button className="w-full py-3 bg-[#003262] text-white font-bold rounded-lg border-2 border-[#003262] hover:bg-transparent hover:text-[#003262] transition-all duration-300 shadow-md active:scale-95">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Courses;