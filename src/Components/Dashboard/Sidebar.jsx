import React, { useEffect, useRef } from "react";


import {
  FiMenu,
  FiX,
  FiHome,
  FiUsers,
  FiBriefcase,
  FiMessageCircle,
  FiPhone,
  FiPackage,
  FiList,
  FiUserPlus,
  FiUserCheck,
  FiClipboard,
  FiPlusCircle,
  FiTrendingUp,
  FiDollarSign,
  FiEdit3,
} from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Sidebar = ({ toggleSidebar, isOpen }) => {
  const sidebarRef=useRef(false)
  const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.removeItem("user");
    toast.success("Logout successfully.");
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        window.innerWidth < 768 &&
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        toggleSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <aside
    ref={sidebarRef}
      className={`sidebar-scroll fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-sky-900 to-sky-800 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-64`}
    >
      <div className="h-screen sidebar-scroll">
        <nav className="p-3 ">
          <div className=" flex items-center justify-between font-bold text-xl mb-6 ml-7">
            <div className="relative bottom-2 h-16 w-44">
           <img 
           src="/itsybizz.png"
           alt="logo"
           className="absolute top-1/2 left-12 h-32 w-52 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
           />
           </div>
            <button className="md:hidden text-white" onClick={toggleSidebar}>
              {isOpen ? <FiX size={24} className="mb-10"/> : ""}
            </button>
          </div>
          <ul className="space-y-4">
            <NavLink
              to="/dashboard"
              onClick={() => {
                if (window.innerWidth < 768) toggleSidebar();
              }}
              className="flex items-center text-lg font-semibold space-x-2  p-2 hover:bg-sky-950 rounded-xl cursor-pointer"
            >
              <FiHome /> <span>Dashboard</span>
            </NavLink>

            {/* <NavLink
              to="users"
              onClick={() => {
                if (window.innerWidth < 768) toggleSidebar();
              }}
              className="flex items-center  text-lg font-semibold space-x-2 hover:bg-sky-950 p-2 rounded-xl cursor-pointer"
            >
              <FiUsers /> <span>Users</span>
            </NavLink> */}

            <NavLink
              to="career"
              onClick={() => {
                if (window.innerWidth < 768) toggleSidebar();
              }}
              className="flex items-center  text-lg font-semibold space-x-2  hover:bg-sky-950 p-2 rounded-xl cursor-pointer"
            >
              <FiBriefcase /> <span>Career</span>
            </NavLink>

            <NavLink
              to="enquiry"
              onClick={() => {
                if (window.innerWidth < 768) toggleSidebar();
              }}
              className="flex items-center  text-lg font-semibold  space-x-2 hover:bg-sky-950 p-2 rounded-xl cursor-pointer"
            >
              <FiMessageCircle /> <span>Enquiry</span>
            </NavLink>

            <NavLink
              to="contact-list"
              onClick={() => {
                if (window.innerWidth < 768) toggleSidebar();
              }}
              className="flex items-center  text-lg font-semibold  space-x-2 hover:bg-sky-950 p-3 rounded-xl cursor-pointer"
            >
              <FiPhone /> <span>Contact</span>
            </NavLink>
{/* 
            <NavLink
              onClick={() => {
                if (window.innerWidth < 768) toggleSidebar();
              }}
              to="products"
              className="flex items-center  text-lg font-semibold  space-x-2 hover:bg-sky-950 p-3 rounded-xl cursor-pointer"
            >
              <FiPackage /> <span>IOT Products</span>
            </NavLink> */}

            {/* <NavLink
              to="products/quote"
              onClick={() => {
                if (window.innerWidth < 768) toggleSidebar();
              }}
              className="flex items-center  text-lg font-semibold  space-x-2 hover:bg-sky-950 p-3 rounded-xl cursor-pointer"
            >
              <FiClipboard /> <span>IOT Products Quote</span>
            </NavLink> */}

            <NavLink
              to="employees"
              onClick={() => {
                if (window.innerWidth < 768) toggleSidebar();
              }}
              className="flex items-center  text-lg font-semibold  space-x-2 hover:bg-sky-950 p-3 rounded-xl cursor-pointer"
            >
              <FiUserCheck /> <span>Employee</span>
            </NavLink>

            <NavLink
              to="followups"
              onClick={() => {
                if (window.innerWidth < 768) toggleSidebar();
              }}
              className="flex items-center  text-lg font-semibold  space-x-2 hover:bg-sky-950 p-3 rounded-xl cursor-pointer"
            >
              <FiClipboard /> <span>Follow Ups</span>
            </NavLink>

            <NavLink
              to="blogs"
              onClick={() => {
                if (window.innerWidth < 768) toggleSidebar();
              }}
              className="flex items-center  text-lg font-semibold  space-x-2 hover:bg-sky-950 p-3 rounded-xl cursor-pointer"
            >
              <FiEdit3 /> <span>Blogs</span>
            </NavLink>

            {/* <NavLink to="refferal" className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiTrendingUp /> <span>Refferal Program</span></NavLink>
         
          <NavLink to="business" className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiDollarSign /> <span>Business</span></NavLink>

          <NavLink to="corporate" className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FaBuilding /> <span>Corporate</span></NavLink> */}
          </ul>

          <button
            className="w-full  hover:text-sky-800 transition-all ease-in  mt-5 text-center p-2
           bg-gradient-to-b from-sky-700 to-sky-400  rounded-lg text-white text-lg font-bold px-8 py-3 shadow-inner shadow-[#ffffff99] drop-shadow-md tracking-wide hover:from-sky-600 hover:to-sky-400"
            onClick={handlelogout}
          >
            Logout
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
