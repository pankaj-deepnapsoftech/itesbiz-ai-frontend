import React, { useEffect } from "react";
import {
  FaShieldAlt,
  FaLaptopCode,
  FaShoppingCart,
  FaFileAlt,
  FaGlobe,
  FaTools,
  FaRocket,
  FaCode,
  FaMobile,
} from "react-icons/fa";
import { MdSpeed, MdSecurity, MdTrendingUp } from "react-icons/md";
import ScrollReveal from "scrollreveal";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const WebDevelopment = () => {
  const cardsContent = [
    {
      title: " Live Production & Quantity Tracking ",
      description:
        "Track your production progress in real-time with precise data. Instantly see what’s completed, what’s pending, and the exact quantity produced – so you always know where your factory stands.",
      icon: <FaGlobe className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: 0.1,
    },
    {
      title: "Machine ON/OFF Status in Real Time ",
      description:
        "No more waiting for updates from supervisors. Monitor every machine’s status – ON or OFF – directly from your dashboard, ensuring you’re always aware of operations.",
      icon: <FaLaptopCode className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      delay: 0.2,
    },
    {
      title: " Instant Error & Downtime Alerts",
      description:
        "Stay ahead of problems with smart alerts. The system notifies you immediately when errors or downtime occur, allowing you to take quick action and avoid costly delays.",
      icon: <FaShoppingCart className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      delay: 0.3,
    },
    {
      title: "Date-Wise Detailed Reports ",
      description:
        "Get clear, easy-to-read reports for any date range. Whether it’s yesterday’s performance or last month’s trends, access complete insights whenever you need them.",
      icon: <FaFileAlt className="w-8 h-8" />,
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      delay: 0.4,
    },
    {
      title: "Clear Insights for Faster Decisions ",
      description:
        "Turn data into action. With all key metrics at your fingertips, you can make informed decisions faster – boosting efficiency, reducing errors, and improving overall productivity.",
      icon: <FaShieldAlt className="w-8 h-8" />,
      gradient: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-50 to-yellow-50",
      delay: 0.5,
    },
    {
      title: "Employee Productivity Tracking",
      description:
        "Measure operator-wise performance with real-time data. Identify top performers, detect bottlenecks, and ensure every team member is contributing effectively to overall production goals.",
      icon: <FaTools className="w-8 h-8" />,
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      delay: 0.6,
    },
  ];

  const features = [
    {
      icon: <FaRocket className="w-6 h-6" />,
      text: "Complete Automation ",
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      text: "High ROI",
    },
    {
      icon: <FaMobile className="w-6 h-6" />,
      text: "Secure Reliable",
    },
    {
      icon: <MdSpeed className="w-6 h-6" />,
      text: "Scalable Customizable",
    },
  ];

  const stats = [
    { number: "10K+", label: "Machines Connected" },
    { number: "99.9%", label: "System Uptime" },
    { number: "30%+", label: "Downtime Reduced" },
    { number: "24/7", label: "Monitoring & Support" },
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
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-40 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-medium mb-6">
            <FaCode className="w-4 h-4 mr-2" />
            Automation Development Excellence
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight">
           Real Time Production 
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Automation Software
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Our
          <strong className="text-bold"> RTPAS – Real Time Production Automation Suite </strong>– empowers manufacturers with smart data, automation, and real-time factory visibility. It seamlessly integrates with all machines to optimize operations, boost efficiency, and increase profitability.
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
                <div className="text-blue-500">{feature.icon}</div>
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
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
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
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your Automation software?
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Let's create a powerful  presence that drives your business forward
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Automation Development
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopment;
