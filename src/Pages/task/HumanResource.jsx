import React, { useRef } from "react";
import { motion } from "framer-motion";
import IncidentCard3 from "../Cards/IncidentCard3";
import { IoClose } from "react-icons/io5";

const It = ({ show, onClose }) => {


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`${show ? "visible" : "invisible"
        } fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex justify-center items-center z-50`}
    >
      <div className="relative flex flex-col lg:flex-row justify-between items-start mx-4 sm:mx-8 lg:mx-16 rounded-lg sm:px-6 lg:px-10 py-8 gap-8 bg-gradient-to-r from-[#27725c] to-[#1bb392] shadow-2xl w-[85%] max-w-2xl lg:max-w-6xl max-h-[90vh]">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Close"
        >
          <IoClose size={28} />
        </button>
        <div className="w-full lg:w-2/3 p-4">

          <motion.p
            className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
          Empower Your Workforce with ServiceNow AI
          </motion.p>

          <p className="text-white mb-4 text-sm sm:text-base font-medium">
            Boost employee satisfaction and efficiency with AI-powered self-service. 
          </p>

          <button className="mb-6 text-gray-700 font-semibold px-6 sm:px-10 py-2 bg-green-400 rounded-full hover:bg-green-500 transition-all border border-black hover:text-white">
            Learn More
          </button>


          <div>
            {[
              " HR Service Delivery",
              "Talent Development",
              "Workplace Service Delivery",
            ].map((item, index) => (
              <motion.p
                key={index}
                className="mb-3 text-white text-base sm:text-lg font-normal hover:text-green-400 flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <span className="text-green-400 transform scale-x-150">➔</span>
                <span className="font-bold">{item}</span>
              </motion.p>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 relative -top-10 md:-top-0 flex justify-center">
          <IncidentCard3 />
        </div>
      </div>
    </motion.section>
  );
};

export default It;

