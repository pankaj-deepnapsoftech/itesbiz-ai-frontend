import React from "react";
import { motion } from "framer-motion";
import IncidentCard6 from "../Cards/IncidentCard6";
import { IoClose } from "react-icons/io5"; // Close icon from react-icons

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
      <div className="relative flex flex-col lg:flex-row justify-between items-start mx-4 sm:mx-8 lg:mx-16 rounded-lg sm:px-6 lg:px-10 py-8 gap-8 bg-gradient-to-r from-[#27725c] to-[#1bb392] shadow-2xl w-[85%] max-w-2xl lg:max-w-6xl max-h-[95vh]">

     
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Close"
        >
          <IoClose size={28} />
        </button>

       
        <div className="w-full lg:w-2/3 p-4">
          <motion.h2
            className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            ✅ Deliver Core Business Services with Intelligent Automation
          </motion.h2>
          <p className="text-white mb-4 text-sm sm:text-base font-medium">
            ServiceNow AI simplifies workflows and decision-making processes for finance and procurement, enabling smarter, faster operations by reducing manual effort.
          </p>

          <button className="mb-6 text-gray-800 font-semibold px-6 sm:px-10 py-2 bg-green-300 rounded-full hover:bg-green-400 transition-all hover:text-white">
            Learn More
          </button>

          <div>
            {[
              "Sourcing and Procurement Operations",
              "Accounts Payable Operations",
              "Supplier Lifecycle Operations",
            ].map((item, index) => (
              <motion.p
                key={index}
                className="mb-3 text-white text-base sm:text-lg font-medium hover:text-green-200 flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <span className="text-green-300 transform scale-x-150">➔</span>
                <span>{item}</span>
              </motion.p>
            ))}
          </div>
        </div>

   
        <div className="w-full lg:w-1/3 relative -top-10 md:-top-5 flex justify-center">
          <IncidentCard6 />
        </div>
      </div>
    </motion.section>
  );
};

export default It;
