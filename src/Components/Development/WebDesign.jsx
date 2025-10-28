import React, { useEffect } from "react";
import {
  FaUserAlt,
  FaMobileAlt,
  FaFileImage,
  FaRocket,
  FaSearch,
  FaPalette,
  FaCode,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";
import { MdSpeed, MdSecurity, MdTrendingUp } from "react-icons/md";
import ScrollReveal from "scrollreveal";
import { motion } from "framer-motion";

const WebDesign = () => {
  const cardsContent = [
    {
      title: "User Experience (UX)",
      description:
        "We craft intuitive, user-friendly designs that enhance engagement and satisfaction.",
      icon: <FaUserAlt className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: 0.1,
    },
    {
      title: "Responsive Design",
      description:
        "Ensuring flawless performance on all devices, from desktops to mobile screens.",
      icon: <FaMobileAlt className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      delay: 0.2,
    },
    {
      title: "Content Integration",
      description:
        "Strategically placing text, images, and media to tell your story effectively.",
      icon: <FaFileImage className="w-8 h-8" />,
      gradient: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-50 to-yellow-50",
      delay: 0.3,
    },
    {
      title: "Performance Optimization",
      description:
        "Speeding up your site with advanced techniques for a seamless experience.",
      icon: <FaRocket className="w-8 h-8" />,
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      delay: 0.4,
    },
    {
      title: "SEO Best Practices",
      description:
        "Enhancing visibility with optimized content and search-friendly structures.",
      icon: <FaSearch className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      delay: 0.5,
    },
    {
      title: "Brand Consistency",
      description:
        "We ensure your website aligns with your brand's visual identity and voice.",
      icon: <FaPalette className="w-8 h-8" />,
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      delay: 0.6,
    },
  ];

  const features = [
    {
      icon: <FaRocket className="w-6 h-6" />,
      text: "Modern Design",
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      text: "Clean Code",
    },
    {
      icon: <FaGlobe className="w-6 h-6" />,
      text: "Global Reach",
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      text: "User-Centric",
    },
  ];

  const stats = [
    { number: "400+", label: "Websites Designed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Design Awards" },
    { number: "24/7", label: "Support" },
  ];

  useEffect(() => {
    ScrollReveal().reveal(".card", {
      duration: 1000,
      origin: "bottom",
      distance: "60px",
      easing: "ease-out",
      interval: 150,
      reset: false,
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-rose-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-40 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-sm font-medium mb-6">
            <FaPalette className="w-4 h-4 mr-2" />
            Web Design Excellence
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-pink-800 to-rose-800 bg-clip-text text-transparent leading-tight">
            Create Beautiful
            <span className="block bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Web Experiences
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We design stunning websites that captivate users, drive conversions, 
            and create memorable digital experiences that reflect your brand's vision.
          </p>

          {/* Features Row */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              >
                <div className="text-pink-500">{feature.icon}</div>
                <span className="text-gray-700 font-medium text-sm">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {cardsContent.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: card.delay }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 group-hover:border-transparent">
                {/* Icon Container */}
                <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {card.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {card.description}
                </p>
                
                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${card.gradient} rounded-full transition-all duration-500 group-hover:w-full w-0`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 p-8 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Design Your Website?
            </h2>
            <p className="text-pink-100 mb-6 text-lg">
              Let's create a beautiful web experience that captivates your audience
            </p>
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Web Design
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDesign;
