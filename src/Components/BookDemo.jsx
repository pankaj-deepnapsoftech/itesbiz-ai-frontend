import React, { useEffect, useState } from "react";
import WavyScrollText from "./WavyScroll";
import ScrollReveal from "scrollreveal";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClipboardList, FaRocket } from "react-icons/fa";

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
`;

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    requirement: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.city ||
      !formData.requirement
    ) {
      setMessage("All fields are required.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/quotes`,
        formData
      );

      if (response.status === 200) {
        setMessage("Your demo request has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          requirement: "",
        }); // Clear form
        toast.success("Your demo request has been sent successfully!");
      } else {
        setMessage("Failed to send request. Please try again.");
      }
    } catch (err) {
      setMessage(
        "Error: " + (err.response?.data?.message || "Something went wrong")
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "50px",
      duration: 800,
      delay: 100,
      opacity: 0,
      scale: 0.85,
      easing: "ease-in-out",
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
    <div className="w-full relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
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

      <div className="relative z-10 flex items-center justify-between text-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-12 w-full max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <motion.div 
            className="text-start mt-10 lg:mt-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <WavyScrollText highlight="Let's get" text=" to work" />
            <motion.p 
              className="text-gray-200 text-xl mt-6 font-semibold leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              See how we can put AI to work for your people.
            </motion.p>
            
            {/* Feature Pills */}
            <motion.div 
              className="flex flex-wrap gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                { text: "AI-Powered", color: "from-green-500 to-emerald-500" },
                { text: "Custom Solutions", color: "from-blue-500 to-cyan-500" },
                { text: "24/7 Support", color: "from-purple-500 to-pink-500" }
              ].map((pill, index) => (
                <motion.span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${pill.color} text-white shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {pill.text}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Book a Demo Form */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl rounded-2xl p-8 w-full max-w-lg mx-auto reveal"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaRocket className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Book a Demo
              </h2>
              <p className="text-gray-300 text-sm">
                Get started with your AI transformation journey
              </p>
            </motion.div>

            {message && (
              <motion.div 
                className={`mb-6 p-4 rounded-xl ${
                  message.includes("Error") 
                    ? "bg-red-500/20 border border-red-400 text-red-200" 
                    : "bg-green-500/20 border border-green-400 text-green-200"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-semibold">{message}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 text-white border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/10 backdrop-blur-sm placeholder-gray-300"
                  required
                />
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 text-white border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/10 backdrop-blur-sm placeholder-gray-300"
                  required
                />
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 text-white border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/10 backdrop-blur-sm placeholder-gray-300"
                  required
                />
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  name="city"
                  placeholder="Your City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 text-white border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/10 backdrop-blur-sm placeholder-gray-300"
                  required
                />
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <FaClipboardList className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 text-white border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/10 backdrop-blur-sm"
                  required
                >
                  <option value="" disabled className="text-gray-800">
                    Select Your Requirement
                  </option>
                  <option value="static-web-dev" className="text-gray-800">Static Web Development</option>
                  <option value="dynamic-web-dev" className="text-gray-800">Dynamic Web Development</option>
                  <option value="ecom" className="text-gray-800">E-Commerce Development</option>
                  <option value="crm" className="text-gray-800">CRM Development</option>
                  <option value="hrm" className="text-gray-800">HRM Development</option>
                  <option value="digital-marketing" className="text-gray-800">Digital Marketing</option>
                  <option value="software-dev" className="text-gray-800">Software Development</option>
                  <option value="appointment-booking" className="text-gray-800">Appointment Booking Web Dev</option>
                  <option value="online-reputation" className="text-gray-800">Online Reputation Management</option>
                </select>
              </motion.div>

              <motion.button
                type="submit"
                disabled={loading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
                
                <span className="relative z-10 flex items-center justify-center">
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <FaRocket className="w-5 h-5 mr-2" />
                      Submit Request
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
