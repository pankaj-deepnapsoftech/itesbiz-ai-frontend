import React, { useRef } from "react";
import { motion } from "framer-motion";
import IncidentCard from "../Cards/IncidentCard";
import { IoClose } from "react-icons/io5";

const It = ({ show, onClose }) => {
  const modalRef = useRef();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`${show ? "visible" : "invisible"} fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex justify-center items-center z-50`}
    >
      <div
        ref={modalRef}
        className="relative flex flex-col lg:flex-row justify-between items-start mx-2 sm:mx-4 lg:mx-16 rounded-lg p-4 sm:px-6 lg:px-10 py-6 gap-6 bg-gradient-to-r from-[#27725c] to-[#1bb392] shadow-2xl w-[85%] max-w-2xl lg:max-w-6xl max-h-[90vh] "
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-300 transition-colors"
          aria-label="Close"
        >
          <IoClose size={24} />
        </button>

        <div className="w-full lg:w-2/3">
          <motion.p
            className="text-white text-lg sm:text-2xl lg:text-4xl font-extrabold leading-snug font-serif mb-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
          Run Your Enterprise IT on a Unified AI Platform
          </motion.p>

          <p className="text-white mb-4 text-sm sm:text-base font-medium">
            Streamline your core IT functions by bringing together your AI, data, and workflows—on one intelligent platform.
          </p>

          <button className="mb-4 sm:mb-6 text-gray-700 font-semibold px-4 sm:px-8 py-2 bg-white rounded-full hover:bg-green-500 hover:text-white transition-all shadow-md text-sm sm:text-base">
            Learn More
          </button>

          <div>
            {[
              "IT Service Management (ITSM)",
              "IT Operations Management (ITOM)",
              "IT Asset Management (ITAM)",
              "Strategic Portfolio Management (SPM)",
            ].map((item, index) => (
              <motion.p
                key={index}
                className="mb-2 sm:mb-3 text-white text-sm sm:text-base flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <span className="text-white">➤</span>
                <span className="font-bold">{item}</span>
              </motion.p>
            ))}
          </div>
        </div>

        <div className=" md:w-full lg:w-1/3 flex justify-center">
          <IncidentCard />
        </div>
      </div>
    </motion.section>
  );
};

export default It;
