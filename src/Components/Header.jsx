import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle, FaBars, FaTimes, FaUser, FaRocket, FaGem, FaShieldAlt, FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import MenuList from "./MenuList";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [isScroll, setIsScroll] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Function to close the hamburger menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const developmentmenu = [
    { title: "Web Development", link: "/development?title=Web%20Development" },
    { title: "Web Design", link: "/development?title=Web%20Design" },
    {
      title: "Software Development",
      link: "/development?title=Software%20Development",
    },
    { title: "App Development", link: "/development?title=App%20Development" },
    { title: "CRM Development", link: "/development?title=CRM%20Development" },
  ];

  const becomeBrand = [
    { title: "Brand Building", link: "/brand?title=Brand%20Building" },
    { title: "ORM", link: "/brand?title=ORM" },
    { title: "Public Relations", link: "/brand?title=Public%20Relations" },
    { title: "Digital Marketing", link: "/brand?title=Digital%20Marketing" },
    {
      title: "Influence Marketing",
      link: "/brand?title=Influence%20Marketing",
    },
    {
      title: "Social Media Presence",
      link: "/brand?title=Social%20Media%20Presence",
    },
  ];

  const products = [
    { title: "IoT Products", link: "/Iot-products" },
    {
      title: "Real Time Production Automation Software(RTPAS)",
      link: "/Real-Time-Production-Automation-Software",
    },
    {
      title: "Client Relation Management (CRM)",
      link: "/client-relationship-management",
    },
    {
      title: "Human Resource Management (HRM)",
      link: "/human-resource-management",
    },
    {
      title: "SOPAS",
      link: "https://sopasb2c.deepmart.shop/login",
      external: true,
    },
   
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Handle external clicks if needed
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-700 ${
        isScroll 
          ? "bg-gradient-to-r from-[#053d5e]/95 via-[#0a5a7a]/95 to-[#053d5e]/95 backdrop-blur-2xl shadow-2xl border-b border-[#0a5a7a]/30" 
          : "bg-gradient-to-r from-transparent via-[#053d5e]/20 to-transparent"
      }`}
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Floating orbs with enhanced effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ping opacity-80 shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-8 right-1/3 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-80 shadow-lg shadow-purple-400/50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-4 left-1/2 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-ping opacity-80 shadow-lg shadow-green-400/50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-12 left-1/2 w-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping opacity-60 shadow-lg shadow-yellow-400/50" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-[1920px] 2xl:px-8">
        <div className="flex items-center justify-between h-20 2xl:h-24">
          {/* Enhanced Logo Section */}
          <motion.div 
            className="flex items-center space-x-4 2xl:flex-1 2xl:justify-s"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" onClick={closeMenu} className="relative group">
              <motion.div
                className="relative"
                whileHover={{ 
                  filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))"
                }}
              >
                <img
                  src="itsybizz.png"
                  alt="Logo"
                  className="h-28 w-auto object-contain"
                />
                {/* Logo glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Navigation Links */}
            <motion.div className="flex items-center space-x-1">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "#", hasDropdown: true, list: products },
                { name: "Development", path: "#", hasDropdown: true, list: developmentmenu },
                { name: "Brand Building", path: "#", hasDropdown: true, list: becomeBrand },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact-us" },
                { name: "About", path: "/about-us" }
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative group"
                >
                  {item.hasDropdown ? (
                    <MenuList listName={item.name} list={item.list} onLinkClick={closeMenu} />
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={closeMenu}
                      className="relative px-4 py-2 2xl:px-5 2xl:py-2.5 text-white/80 hover:text-white font-medium 2xl:text-base transition-all duration-300 group"
                    >
                      <span className="relative z-10">{item.name}</span>
                      {/* Hover line effect */}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </NavLink>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex items-center space-x-3 ml-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >

              {/* Login Button */}
              <NavLink
                to="/login"
                onClick={closeMenu}
                className="relative px-6 py-2.5 text-white font-semibold rounded-full group overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center space-x-2">
                  <FaBolt className="w-4 h-4" />
                  <span>Login</span>
                </span>
              </NavLink>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative p-2 text-white rounded-lg hover:bg-[#0a5a7a]/30 transition-all duration-300"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTimes className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaBars className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gradient-to-br from-[#053d5e]/95 via-[#0a5a7a]/95 to-[#053d5e]/95 backdrop-blur-xl border-t border-[#0a5a7a]/30"
            >
              <div className="px-4 py-6 space-y-4">
                {[
                  { name: "Home", path: "/" },
                  { name: "Products", path: "#", hasDropdown: true, list: products },
                  { name: "Development", path: "#", hasDropdown: true, list: developmentmenu },
                  { name: "Brand Building", path: "#", hasDropdown: true, list: becomeBrand },
                  { name: "Portfolio", path: "/portfolio" },
                  { name: "Contact Us", path: "/contact-us" },
                  { name: "About Us", path: "/about-us" }
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.hasDropdown ? (
                      <MenuList listName={item.name} list={item.list} onLinkClick={closeMenu} />
                    ) : (
                      <NavLink
                        to={item.path}
                        onClick={closeMenu}
                        className="block py-3 text-white/80 hover:text-white font-medium transition-colors duration-300"
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </motion.div>
                ))}
                
                {/* Mobile Action Buttons */}
                <div className="pt-4 space-y-3">
                  <NavLink
                    to="/login"
                    onClick={closeMenu}
                    className="block w-full text-center py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg"
                  >
                    Login
                  </NavLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Header;
