import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { motion } from "framer-motion";

import { IoIosBusiness } from "react-icons/io";
import { FaClinicMedical } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { TbPigMoney } from "react-icons/tb";
import { FaHospital } from "react-icons/fa";
import { RiHotelFill } from "react-icons/ri";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { MdOutlineMobileFriendly } from "react-icons/md";

// Enhanced custom styles for animations
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
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
    }
    50% {
      box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
    }
  }
  
  @keyframes bubble-rise {
    0% {
      transform: translateY(100vh) scale(0);
      opacity: 0;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(-100px) scale(1);
      opacity: 0;
    }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }
  
  .animate-bubble-rise {
    animation: bubble-rise 8s linear infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  
  .glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .card-hover {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .card-hover:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
  
  .bubble {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3));
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255,255,255,0.2);
  }
`;

const DomainList = () => {
  const domains = [
    { icon: IoIosBusiness, label: "B2B & B2C", color: "from-orange-500 to-red-500", bgColor: "from-orange-100 to-red-100", hoverColor: "from-orange-400 to-red-400" },
    { icon: FaClinicMedical, label: "Medical", color: "from-green-600 to-emerald-600", bgColor: "from-green-100 to-emerald-100", hoverColor: "from-green-500 to-emerald-500" },
    { icon: RiShoppingBag4Fill, label: "E-commerce", color: "from-purple-600 to-indigo-600", bgColor: "from-purple-100 to-indigo-100", hoverColor: "from-purple-500 to-indigo-500" },
    { icon: FaBookOpenReader, label: "Education", color: "from-blue-600 to-cyan-600", bgColor: "from-blue-100 to-cyan-100", hoverColor: "from-blue-500 to-cyan-500" },
    { icon: TbPigMoney, label: "Finance", color: "from-pink-500 to-rose-500", bgColor: "from-pink-100 to-rose-100", hoverColor: "from-pink-400 to-rose-400" },
    { icon: FaHospital, label: "Hospital", color: "from-blue-700 to-indigo-700", bgColor: "from-blue-100 to-indigo-100", hoverColor: "from-blue-600 to-indigo-600" },
    { icon: RiHotelFill, label: "Hotel", color: "from-teal-600 to-cyan-600", bgColor: "from-teal-100 to-cyan-100", hoverColor: "from-teal-500 to-cyan-500" },
    { icon: LiaIndustrySolid, label: "Industries", color: "from-rose-600 to-red-600", bgColor: "from-rose-100 to-red-100", hoverColor: "from-rose-500 to-red-500" },
  ];

  const cardData = [
    {
      icon: FaPaintBrush,
      label: "Branding Elegance",
      content: "Your website is your brand's identity. We craft every detail—colors, typography, and design—to ensure a cohesive and memorable experience.",
      gradient: "from-blue-500 to-blue-500",
      bgGradient: "from-blue-50 to-blue-500",
      hoverGradient: "from-blue-400 to-blue-400"
    },
    {
      icon: MdOutlinePeopleAlt,
      label: "User-Centric Intuition",
      content: "We design intuitive interfaces that seamlessly guide visitors, turning casual browsers into engaged users.",
      gradient: "from-blue-500 to-blue-500",
      bgGradient: "from-blue-50 to-grey-500",
      hoverGradient: "from-blue-400 to-blue-400"
    },
    {
      icon: GiBrain,
      label: "Design-Driven Functionality",
      content: "We use visual storytelling to create lasting emotional connections through strategic graphics and imagery.",
      gradient: "from-blue-500 to-blue-500",
      bgGradient: "from-blue-50 to-grey-500",
      hoverGradient: "from-blue-400 to-blue-400"
    },
    {
      icon: MdOutlineMobileFriendly,
      label: "User Experience Elevation",
      content: "We blend captivating design with seamless functionality, crafting user interactions that drive engagement effortlessly.",
      gradient: "from-blue-500 to-blue-500",
      bgGradient: "from-blue-50 to-blue-500",
      hoverGradient: "from-blue-400 to-blue-400"
    },
  ];

  useEffect(() => {
    ScrollReveal().reveal(".card", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      easing: "ease-out",
      interval: 200,
      reset: false,
    });

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
    <div className="w-full relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden min-h-screen max-w-[2480px] mx-auto">
      {/* Enhanced Bubble Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large animated blobs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 animate-blob"></div>
        <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-5 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-1/4 w-72 h-72 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-8 animate-float"></div>
        
        {/* Floating bubbles */}
        <div className="bubble w-4 h-4 top-1/4 left-1/5 animate-bubble-rise" style={{ animationDelay: '0s' }}></div>
        <div className="bubble w-6 h-6 top-1/3 right-1/4 animate-bubble-rise" style={{ animationDelay: '2s' }}></div>
        <div className="bubble w-3 h-3 top-2/3 left-1/3 animate-bubble-rise" style={{ animationDelay: '4s' }}></div>
        <div className="bubble w-5 h-5 top-1/2 right-1/3 animate-bubble-rise" style={{ animationDelay: '6s' }}></div>
        <div className="bubble w-4 h-4 top-3/4 left-1/2 animate-bubble-rise" style={{ animationDelay: '1s' }}></div>
        <div className="bubble w-6 h-6 top-1/6 right-1/6 animate-bubble-rise" style={{ animationDelay: '3s' }}></div>
        <div className="bubble w-3 h-3 top-2/5 left-1/6 animate-bubble-rise" style={{ animationDelay: '5s' }}></div>
        <div className="bubble w-5 h-5 top-4/5 right-1/5 animate-bubble-rise" style={{ animationDelay: '7s' }}></div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

              <div className="relative z-10 p-6 2xl:p-8 text-center">
        {/* Enhanced Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              One platform, every industry.
            </span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover how our AI-powered solutions transform businesses across diverse industries, 
            delivering exceptional results and driving growth.
          </motion.p>
        </motion.div>

        {/* Enhanced Industry Categories */}
        <motion.div 
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              className="group flex items-center space-x-3 border border-gray-600 px-6 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white/10 backdrop-blur-sm hover:scale-105 glass-effect"
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20   }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Enhanced Circular Icon Container */}
              <motion.div 
                className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r ${domain.bgColor} group-hover:bg-gradient-to-r ${domain.hoverColor} transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360
                }}
                transition={{ duration: 0.6 }}
              >
                <domain.icon className={`text-2xl bg-gradient-to-r ${domain.color} bg-clip-text text-transparent group-hover:bg-gradient-to-r ${domain.hoverColor} bg-clip-text text-transparent transition-all duration-500`} />
              </motion.div>
              <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                {domain.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Responsive Cards */}
                 <div className="mt-20 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="card group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-gray-600 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 card-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -12,
                scale: 1.03
              }}
            >
              {/* Enhanced Card background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Enhanced Card content */}
              <div className="relative z-10 p-8">
                <motion.div 
                  className={`flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${card.bgGradient} mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <card.icon className={`text-4xl bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent group-hover:bg-gradient-to-r ${card.hoverGradient} bg-clip-text text-transparent transition-all duration-500`} />
                </motion.div>
                
                <h2 className="text-2xl font-bold text-blue-400 mb-6 group-hover:text-gray-100 transition-colors duration-300">
                  {card.label}
                </h2>
                
                <p className="text-white text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {card.content}
                </p>
              </div>
              
              {/* Enhanced Card shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Enhanced border glow effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomainList;
