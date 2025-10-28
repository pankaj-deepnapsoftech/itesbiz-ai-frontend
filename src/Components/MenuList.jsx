import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const MenuList = ({ listName, list, onLinkClick }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  // Function to handle link clicks and close menu
  const handleLinkClick = () => {
    setOpenDropdown(null);
    if (onLinkClick) {
      onLinkClick();
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} onMouseLeave={() => setOpenDropdown(null)}>
      <div
        className="text-white/80 flex p-4 items-center justify-between hover:text-white cursor-pointer w-full group transition-all duration-300"
        onClick={() => toggleDropdown("products")}
        onMouseEnter={() => setOpenDropdown("products")}
      >
        <span className="text-lg font-medium relative">
          {listName}
          {/* Hover line effect */}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
        </span>
        <svg
          className={`w-4 h-4 transition-transform ml-1 mt-[2px] text-cyan-400 ${
            openDropdown === "products" ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
        </svg>
      </div>

             {openDropdown === "products" && (
         <motion.ul 
           initial={{ opacity: 0, y: -10, scale: 0.95 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           exit={{ opacity: 0, y: -10, scale: 0.95 }}
           transition={{ duration: 0.2 }}
           className="md:absolute bg-gradient-to-br from-[#053d5e]/95 via-[#0a5a7a]/95 to-[#053d5e]/95 backdrop-blur-xl rounded-xl md:rounded-2xl p-3 w-[410px] md:w-56 shadow-2xl flex flex-col z-50 border border-[#0a5a7a]/30"
         >
           {list.map((item, index) => (
             <motion.li
               key={index}
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.2, delay: index * 0.05 }}
               className={`p-3 hover:bg-gradient-to-r hover:from-[#0a5a7a]/40 hover:to-[#0d6b8a]/40 rounded-lg transition-all duration-300 group ${
                 index !== list.length - 1 ? "border-b border-[#0a5a7a]/20" : ""
               }`}
             >
              {item.external ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="block text-white/90 text-base font-medium hover:text-white transition-all duration-300 group-hover:translate-x-1"
                >
                  {item.title}
                </a>
              ) : (
                <NavLink
                  to={item.link}
                  onClick={handleLinkClick}
                  className="block text-white/90 text-base font-medium hover:text-white transition-all duration-300 group-hover:translate-x-1"
                >
                  {item.title}
                </NavLink>
              )}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default MenuList;
