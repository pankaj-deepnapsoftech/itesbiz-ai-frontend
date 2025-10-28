import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaPalette, FaMobile, FaUsers } from "react-icons/fa";
import WebDevelopment from "../Components/Development/WebDevelopment";
import WebDesign from "../Components/Development/WebDesign";
import SoftwareDevelopment from "../Components/Development/SoftwareDevelopment";
import AppDevelopment from "../Components/Development/AppDevelopment";
import CRMDevelopment from "../Components/Development/CRMDevelopment";
import WavyScrollText from "../Components/WavyScroll";
import webdev from "../assets/webdevelop1.gif";
import uiux from "../assets/uiuxx.gif";
import software from "../assets/software1.gif";
import appdev from "../assets/app.gif";
import crm from "../assets/crm.gif";

const Development = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get("title") || "Development";

  const contentMap = {
    "Web Development": {
      title: "Nurturing Digital Excellence through Web Development",
      subtitle: "Building powerful web solutions that drive business growth",
      image: webdev,
      component: <WebDevelopment />,
      icon: <FaCode className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-slate-50 via-blue-50 to-indigo-50",
      badge: "Web Development Excellence"
    },
    "Web Design": {
      title: "Crafting Exceptional Website Design Solutions",
      subtitle: "Creating stunning visual experiences that captivate users",
      image: uiux,
      component: <WebDesign />,
      icon: <FaPalette className="w-8 h-8" />,
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-slate-50 via-pink-50 to-rose-50",
      badge: "Web Design Excellence"
    },
    "Software Development": {
      title: "Innovative Software Development for a Smarter Future",
      subtitle: "Building intelligent solutions that transform businesses",
      image: software,
      component: <SoftwareDevelopment />,
      icon: <FaRocket className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-slate-50 via-indigo-50 to-purple-50",
      badge: "Software Development Excellence"
    },
    "App Development": {
      title: "Pioneering Digital Transformation through Innovative App Development",
      subtitle: "Creating mobile experiences that users love",
      image: appdev,
      component: <AppDevelopment />,
      icon: <FaMobile className="w-8 h-8" />,
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-slate-50 via-purple-50 to-indigo-50",
      badge: "App Development Excellence"
    },
    "CRM Development": {
      title: "Elevating Business Relationships through CRM Development Excellence",
      subtitle: "Streamlining processes and enhancing customer relationships",
      image: crm,
      component: <CRMDevelopment />,
      icon: <FaUsers className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-slate-50 via-green-50 to-emerald-50",
      badge: "CRM Development Excellence"
    },
  };

  const headerTitle = contentMap[title]?.title || title;
  const subtitle = contentMap[title]?.subtitle || "Building innovative digital solutions";
  const imageSrc = contentMap[title]?.image || "/images/default.svg";
  const SelectedComponent = contentMap[title]?.component || null;
  const icon = contentMap[title]?.icon || <FaCode className="w-8 h-8" />;
  const gradient = contentMap[title]?.gradient || "from-blue-500 to-cyan-500";
  const bgGradient = contentMap[title]?.bgGradient || "from-slate-50 via-blue-50 to-indigo-50";
  const badge = contentMap[title]?.badge || "Development Excellence";

  const words = headerTitle.split(" ");
  const halfIndex = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, halfIndex).join(" ");
  const secondHalf = words.slice(halfIndex).join(" ");

  return (
    <div className="w-full h-auto">
      {/* Hero Section */}
      <div className={`relative min-h-[500px] md:min-h-[600px] bg-gradient-to-br ${bgGradient} overflow-hidden`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-40 left-1/4 w-72 h-72 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '6s' }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-5 h-5 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center min-h-[400px] md:min-h-[500px]">
            {/* Text Content */}
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm text-blue-400 rounded-full text-sm font-medium mb-6 border border-white/20"
              >
                <div className={`w-4 h-4 bg-gradient-to-r ${gradient} rounded-full mr-2`}></div>
                {badge}
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  {firstHalf}
                </span>
                <span className={`block bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                  {secondHalf}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0"
              >
                {subtitle}
              </motion.p>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${gradient} text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform`}
              >
                Get Started Today
              </motion.button>
            </motion.div>

            {/* Image */}
            <motion.div 
              className="flex justify-center items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Image Container with Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-3xl blur-2xl opacity-30 animate-pulse`}></div>
                <motion.img
                  src={imageSrc}
                  alt={title}
                  className="relative w-[350px] h-[250px] md:w-[500px] md:h-[350px] object-contain rounded-3xl shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                />
                
                {/* Floating Icon */}
                <motion.div
                  className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                >
                  {icon}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative bg-gradient-to-br from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {SelectedComponent}
        </motion.div>
      </div>
    </div>
  );
};

export default Development;
