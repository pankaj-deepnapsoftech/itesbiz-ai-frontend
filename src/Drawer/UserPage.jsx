import React from "react";
import {
  FiUser,
  FiHelpCircle, 
  FiLogOut,
} from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { CiUnlock } from "react-icons/ci";


const UserPage = ({ isOpen, setOpen }) => {
     const navigate = useNavigate();
  if (!isOpen) return null;
 const handlelogout = () => {
    localStorage.removeItem("user");
    toast.success("Logout successfully.");
    navigate("/");
  };

  return (
    <div className={` ${isOpen ? "translate-x-0" : "-translate-x-64"} fixed inset-0 z-50 flex justify-end  transition-transform duration-300 ease-in-out` }>
      {/* Overlay */}
      {/* <div className="transition-transform duration-500 ease-in-out fixed inset-0 bg-black/30 " onClick={()=> setOpen(false)}></div> */}

      {/* Drawer Content */}
      <div className=" relative w-72 bg-[#0d3b66] text-white shadow-lg flex flex-col items-center py-6 rounded-l-lg">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-white text-xl"
          onClick={()=> setOpen(false)}
        >
          ✕
        </button>

        {/* Profile Image */}
        <img
          src="/user.png"
          alt="User"
          className="w-20 h-20 rounded-full border-2 border-white mb-3"
        />

        {/* Name and Role */}
        <div className="text-center">
          <h3 className="font-semibold text-lg">John Smith</h3>
          <p className="text-sm text-gray-200">Software Engineer</p>
        </div>
 
        {/* Navigation */}
       
        <nav className="mt-8 w-full px-6">
             <hr className="my-2 border-gray-400" />
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li>
              <button className="flex items-center gap-3 w-full p-2 rounded hover:bg-sky-900 transition"
              >
                <CiUnlock size={20} strokeWidth={1}/>
                Change password
              </button>
            </li>
            <li>
              <button className="flex items-center gap-3 w-full p-2 rounded hover:bg-sky-900 transition">
                <FiUser size={18} />
                Account setting
              </button>
            </li>
            <li>
              <button className="flex items-center gap-3 text-red-200 w-full p-2 rounded hover:bg-sky-900 transition"
               onClick={handlelogout}>
                <FiLogOut size={18} className="shrink-0" />
                Logout
              </button>
            </li>
            <hr className="my-2 border-gray-400" />
            <li>
              <button className="flex items-center gap-3 w-full p-2 rounded hover:bg-sky-900 transition">
                <FiHelpCircle size={18} />
                Help
              </button>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-2 text-xs text-gray-300 text-center w-full">
          © 2025 Your Company
        </div>
      </div>
    </div>
  );
};

export default UserPage;
