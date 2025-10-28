import React from "react";
import { motion } from "framer-motion";

export default function IncidentCard() {
  return (
    <motion.div
      className="relative flex justify-center items-center mt-10 px-4 sm:px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Card Container with gradient and compact height */}
      <motion.div
        className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-gradient-to-br from-white via-slate-100 to-sky-100 flex flex-col items-center p-5 sm:p-6 rounded-2xl shadow-xl border border-gray-200"
        whileHover={{ scale: 1.02 }}
      >
        {/* Profile Image */}
        <motion.div
          className="absolute -top-12 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-sky-700 shadow-xl bg-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <img
            src="https://www.servicenow.com/content/dam/servicenow-assets/public/scripts/homepage-redesign/headshot/headshot-6.png"
            alt="User"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Card Content */}
        <div className="pt-14 text-center w-full">
          <h1 className="text-lg font-bold text-gray-800 mb-2">
          🔍 Purchase summarized by AI agents
          </h1>

          <motion.div
            className="bg-white/90 p-3 sm:p-4 mt-2 rounded-xl shadow border border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Issue Section */}
            <div className="text-left">
              <h2 className="font-semibold text-gray-800 text-sm sm:text-base">
                🗂 Issue
              </h2>
              <p className="text-gray-600 font-normal text-sm mt-1">
                Phishing attack detected on multiple laptops.
              </p>
            </div>

            {/* Action Taken */}
            <div className="mt-3 text-left space-y-2">
              <div className="bg-blue-100 border-l-4 border-blue-500 p-2 rounded-lg text-sm">
                <strong className="text-blue-800">Purchase Lines were approved.</strong>
              </div>

              <div className="bg-green-100 border-l-4 border-green-500 p-2 rounded-lg text-sm">
                <strong className="text-green-800">A purchase order were created.</strong>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex justify-center gap-4 w-full mt-4 px-2 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="cursor-pointer hover:text-blue-600">👍 Like</span>
            <span className="cursor-pointer hover:text-red-600">👎 Dislike</span>
            <span className="cursor-pointer hover:text-gray-800">💬 Comment</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}




























