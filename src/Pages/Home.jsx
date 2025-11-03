import React, { useRef, useEffect } from "react";
import AutoSlider from "../Components/AutoSlider";
import About from "../Components/About";
import DomainList from "../Components/DomainList";
import BookDemo from "../Components/BookDemo";
import ScrollReveal from "scrollreveal";
import { TbBrandJavascript } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { FaReact, FaJava, FaPython, FaPhp, FaRocket, FaUsers, FaTrophy ,FaHandshake} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMysql } from "react-icons/si";
import { FaHtml5, FaCss3 } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import WavyScrollText from "../Components/WavyScroll";
import { NavLink } from "react-router-dom";
import RevealWrapper from "../Components/RevealWrapper";
import Slider from "./Slider";
import { motion } from "framer-motion";
import Clients from "../Components/Clients";

// Add custom styles for animations
const customStyles = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }

  /* Responsive improvements */
  @media (max-width: 640px) {
    .mobile-hero-text {
      font-size: 1.5rem;
      line-height: 1.3;
    }
    
    .mobile-hero-description {
      font-size: 0.875rem;
      line-height: 1.5;
    }
    
    .mobile-button-group {
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }
    
    .mobile-button {
      width: 100%;
      max-width: 280px;
    }
  }

  @media (min-width: 641px) and (max-width: 768px) {
    .tablet-hero-text {
      font-size: 2rem;
    }
    
    .tablet-hero-description {
      font-size: 1rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .laptop-hero-text {
      font-size: 2.5rem;
    }
    
    .laptop-hero-description {
      font-size: 1.125rem;
    }
  }
`;

const Home = () => {
  const bookDemoRef = useRef(null);

  const scrollToBookDemo = () => {
    if (bookDemoRef.current) {
      bookDemoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const content = [
    { value: 100, label: "Finished Projects", icon: FaRocket, color: "from-blue-500 to-cyan-500" },
    { value: 30, label: "Created Jobs", icon: FaUsers, color: "from-green-500 to-emerald-500" },
    { value: 90, label: "Happy Customers", icon: FaTrophy, color: "from-purple-500 to-pink-500" },
    { value: 200, label: "Ongoing Partnerships", icon: FaHandshake, color: "from-yellow-500 to-orange-500" },
];


  const techStack = [
    { icon: FaHtml5, color: "text-orange-600" }, 
    { icon: FaCss3, color: "text-blue-600" },
    { icon: TbBrandJavascript, color: "text-yellow-500" },
    { icon: DiNodejs, color: "text-green-600" },
    { icon: FaReact, color: "text-blue-400" },
    { icon: SiMongodb, color: "text-green-500" },
    { icon: FaJava, color: "text-red-700" },
    { icon: FaPython, color: "text-yellow-600" },
    { icon: SiMysql, color: "text-blue-700" },
    { icon: FaPhp, color: "text-indigo-700" },
    { icon: RiTailwindCssFill, color: "text-blue-500" },
  ];

  useEffect(() => {
    const sr = ScrollReveal();
    const elements = document.querySelectorAll(".reveal");
    if (elements.length > 0) {
      sr.reveal(elements, {
        distance: "50px",
        duration: 800,
        delay: 100,
        opacity: 0,
        scale: 0.85,
        easing: "ease-in-out",
      });
    }

    // Inject custom styles
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
  
  return (
    <div className="w-full relative overflow-hidden">
      {/* Hero Section */}
    <div className="relative bg-gradient-to-br from-[#053d5e] via-[#0a5a7a] to-[#0d6b8a] 
w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 2xl:py-40 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 animate-blob"></div>
          <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-5 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-1/4 w-72 h-72 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>

        <div className="relative z-10 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 pb-12 sm:pb-16 md:pb-20">
          <motion.div 
            className="flex flex-col justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-4 sm:px-6 md:px-8 mobile-hero-text tablet-hero-text laptop-hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <WavyScrollText
              highlight="ITSYBIZZ ,"
              text="Smart Digital Solutions in Software"
            />
          </motion.div>

          <motion.div 
            className="flex flex-col justify-center px-4 sm:px-6 md:px-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mobile-hero-description tablet-hero-description laptop-hero-description">
              ITSYBIZZ is a leading digital solutions
              company offering a wide range of services including Software
              Development, Mobile App Development, Website Development, AI,
              Blockchain Development, Game Development, and IoT Solutions. We also
              specialize in Brand Building and delivering Ready-to-Use Software like
              CRM, HRM, and Production Automation Suites (B2B & B2C).
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-5 mt-6 sm:mt-8 px-2 sm:px-0 mobile-button-group">
              <motion.button
                onClick={scrollToBookDemo}
                className="text-gray-700 font-semibold px-6 sm:px-8 md:px-10 lg:px-14 py-3 md:py-4 bg-gradient-to-r from-green-400 to-green-500 rounded-full hover:from-green-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-0 w-full sm:w-auto mobile-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book A Demo
              </motion.button>
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink to="/contact-us">
                  <span className="text-gray-50 font-semibold px-6 sm:px-8 md:px-10 lg:px-14 py-3 md:py-4 rounded-full hover:text-green-400 transition-all duration-300 border-2 border-gray-400 hover:border-green-400 w-full sm:w-auto inline-block text-center backdrop-blur-sm mobile-button">
                    Contact Us
                  </span>
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Slider */}
      <motion.div 
        className="w-full -mt-8 sm:-mt-10 relative z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <AutoSlider />
      </motion.div>

      <Clients />

      {/* Stats Section */}
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-center text-white flex-col px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 sm:mb-10 md:mb-12 font-bold text-center bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          We have 80% active users across the nation
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-8 sm:mb-10 w-full max-w-4xl">
          {content.map((data, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <data.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </motion.div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mb-1 sm:mb-2 leading-tight">
                {data.value}+
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 font-semibold text-center leading-relaxed">
                {data.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Slider Section */}
      <motion.div 
        className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Slider />
      </motion.div>

      {/* About Section */}
      <motion.div 
        className="w-full mt-12 sm:mt-16 md:mt-20 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* <About /> */}
        {/* <Loop /> */}
      </motion.div>

      {/* Domain List Section */}
      <motion.div 
        className="w-full bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <DomainList />
      </motion.div>

      {/* Book Demo Section */}
      <motion.div 
        ref={bookDemoRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <BookDemo />
      </motion.div>

      {/* Tech Stack Section */}
      <div className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 relative z-10 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Technologies We Use
          </span>
        </motion.h1>
        
        <motion.div 
          className="relative z-10 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Marquee speed={50} gradient={false}>
            {techStack.map((tech, index) => (
              <motion.div 
                key={index} 
                className="mx-3 sm:mx-4 md:mx-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <tech.icon className={`${tech.color} drop-shadow-lg`} />
              </motion.div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
