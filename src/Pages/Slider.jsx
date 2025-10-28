import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import It from "./task/It";
import Security from "./task/Secuirity";
import HumanResource from "./task/HumanResource";
import CRM from "./task/Crm";
import AppDevelopment from "./task/AppDev";
import Finance from "./task/Finance";
import { FaRocket, FaShieldAlt, FaUsers, FaMobile, FaChartLine, FaCogs } from "react-icons/fa";

import gsap from "gsap";
import "../Css/SliderAnimation.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TabBar = () => {
  const [activeModal, setActiveModal] = useState(null);
  gsap.set(".fade-in-content", { opacity: 1 });

  const serviceData = [
    {
      id: "IT",
      title: "IT",
      icon: FaCogs,
      color: "from-blue-500 to-cyan-500",
      description: "Information Technology"
    },
    {
      id: "CRM",
      title: "CRM",
      icon: FaUsers,
      color: "from-green-500 to-emerald-500",
      description: "Customer Relationship"
    },
    {
      id: "Security And Risk",
      title: "Security & Risk",
      icon: FaShieldAlt,
      color: "from-red-500 to-pink-500",
      description: "Security Management"
    },
    {
      id: "Finance and Supply",
      title: "Finance & Supply",
      icon: FaChartLine,
      color: "from-purple-500 to-indigo-500",
      description: "Financial Solutions"
    },
    {
      id: "Human Resources",
      title: "Human Resources",
      icon: FaUsers,
      color: "from-orange-500 to-yellow-500",
      description: "HR Management"
    },
    {
      id: "App Development",
      title: "App Development",
      icon: FaMobile,
      color: "from-teal-500 to-green-500",
      description: "Mobile Applications"
    }
  ];
  
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".draw-path ",
      start: "top 30%",
      end: "top 0%",
      scrub: true,

      onEnter: () => {
        gsap.to(".fade-in-content", { opacity: 1, duration: 1.5 });
        gsap.from("#img1,#img2,#img-text1,#img-text2", {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          delay: 1,
          ease: "power2.out"
        });
        gsap.from("#first-text", {
          y: -40,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        });
        gsap.from("#text-2", {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          delay: 1,
          ease: "power2.out"
        });
        gsap.from("#first-cercle", {
          x: -100,
          duration: 1,
          opacity: 0
        })
        gsap.from("#sec-cercle", {
          x: 100,
          duration: 1,
          opacity: 0
        })
        gsap.from("#third-cercle", {
          x: -100,
          duration: 1,
          opacity: 0
        })
        gsap.from("#fourth-cercle", {
          x: 100,
          duration: 1,
          opacity: 0
        })
        gsap.from("#five-cercle", {
          y: 100,
          duration: 1,
          opacity: 0
        })
        gsap.from("#six-cercle", {
          y: 100,
          duration: 1,
          opacity: 0
        })
      },
      onLeaveBack: () => {
        gsap.to(".fade-in-content", { opacity: 0, duration: 0.3 });
      }
    });

    gsap.fromTo(
      ".draw-path path",
      { strokeDashoffset: 1000 },
      {
        strokeDashoffset: 0,
        duration: 4,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".draw-path",
          start: "top 40%",
          end: "top 0%",
          scrub: true
        }
      }
    );
  }, []);

  useEffect(() => {
    const element = document.querySelector(".draw-path");

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.6 &&
        rect.bottom > window.innerHeight * 0.1;

      if (inView) {
        element.classList.add("animate");
      } else {
        element.classList.remove("animate");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const CircleDot = ({ service, isActive }) => (
    <motion.div 
      className={`w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-full flex items-center justify-center bg-gradient-to-r ${service.color} shadow-lg hover:shadow-xl transition-all duration-300 ${isActive ? 'glow-effect' : 'hover-glow'}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] md:w-[24px] md:h-[24px] lg:w-[30px] lg:h-[30px] rounded-full bg-white border-2 border-white shadow-inner"></div>
    </motion.div>
  );

  // Service Card Component for all screen sizes
  const ServiceCard = ({ service, isActive }) => (
    <motion.button
      onClick={() => setActiveModal(service.id)}
      className="service-card group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-col items-center space-y-3">
        <CircleDot service={service} isActive={isActive} />
        <p className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-medium text-white group-hover:text-green-400 transition-colors duration-300 text-center">
          {service.title}
        </p>
      </div>
    </motion.button>
  );

  return (
    <div className="w-full relative overflow-hidden min-h-screen max-w-[2480px] mx-auto layout-stable">

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>

      <div className="pt-5 pb-16 2xl:pt-8 2xl:pb-24 relative z-10 responsive-padding">
        
        {/* Header Section - Same for all screen sizes */}
        <motion.div 
          className="text-center px-4 pt-8 pb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold text-white leading-tight">
            <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              The AI platform
            </span> <br />
            <span className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              for business transformation
            </span>
          </h1>
        </motion.div>

        {/* Services Grid - Consistent across all screen sizes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-8 lg:px-12 mb-8">
          {serviceData.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              isActive={activeModal === service.id} 
            />
          ))}
        </div>

        {/* Center Section - Consistent layout across all screens */}
        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 lg:space-x-12 px-4 md:px-8 lg:px-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Employees */}
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/menLogo.avif"
              alt="Employees"
              className="responsive-image rounded-full border-3 md:border-4 border-blue-500 shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="mt-2 px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-medium shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              Employees
            </motion.div>
          </motion.div>

          {/* AI AGENTS */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-stroke font-extrabold leading-tight text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px]">
              <span className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[60px] bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                AI
              </span>
              <br />
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                AGENTS
              </span>
            </p>
          </motion.div>

          {/* Customers */}
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/womenLogo.avif"
              alt="Customers"
              className="responsive-image rounded-full border-3 md:border-4 border-purple-500 shadow-lg"
              whileHover={{ scale: 1.05, rotate: -5 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="mt-2 px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full text-white text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-medium shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              Customers
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Optional: SVG Background for larger screens */}
        <div className="hidden lg:block">
          <svg
            width="100%"
            viewBox="50 10 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="draw-path w-full h-[40vh] absolute top-0 left-0 -z-10 opacity-30"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="myGradient" x1="0%" y1="30%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3333FF" />
                <stop offset="25%" stopColor="#26BD4C" />
                <stop offset="50%" stopColor="#26BD4C" />
                <stop offset="75%" stopColor="#254299" />
                <stop offset="100%" stopColor="#3333FF" />
              </linearGradient>
            </defs>
            <g transform="scale(8,5) translate(1, 1)">
              <path
                d="M5.63636 16C2.90909 16 2 14 2 12C2 10 2.90909 8 5.63636 8C9.27273 8 14.7273 16 18.3636 16C21.0909 16 22 14 22 12C22 10 21.0909 8 18.3636 8C14.7273 8 9.27273 16 5.63636 16Z"
                stroke="url(#myGradient)"
                strokeWidth="0.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(0, -6) scale(1, 1.5)"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* AnimatePresence Modals */}
      <AnimatePresence>
        {activeModal === "IT" && <It show={true} onClose={() => setActiveModal(null)} />}
        {activeModal === "CRM" && <CRM show={true} onClose={() => setActiveModal(null)} />}
        {activeModal === "Security And Risk" && <Security show={true} onClose={() => setActiveModal(null)} />}
        {activeModal === "Human Resources" && <HumanResource show={true} onClose={() => setActiveModal(null)} />}
        {activeModal === "App Development" && <AppDevelopment show={true} onClose={() => setActiveModal(null)} />}
        {activeModal === "Finance and Supply" && <Finance show={true} onClose={() => setActiveModal(null)} />}
      </AnimatePresence>
    </div>
  );
}

export default TabBar;