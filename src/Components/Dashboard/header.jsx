// Header.jsx
import React, { useEffect, useRef, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import UserPage from "../../Drawer/UserPage";
import NotificationModal from "../../Drawer/NotificationModal";

const Header = ({ toggleSidebar }) => {

  const [showNotification, setShowNotification] = useState(false);
  const [isOpen, setOpen] = useState(false)
  const notificationRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotification(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="sticky top-0 bg-gradient-to-tl from-sky-800 to-sky-900 text-white p-3  shadow-md z-40">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="md:hidden text-white" onClick={toggleSidebar}>
            <FiMenu size={24} />
          </button>
          <div className=" md:hidden bottom-2 ">
            <img
            src="/itsybizz.png"
            alt="logo"
            className=" absolute top-6 left-24 h-20 w-40 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
            />
        
          </div>
        </div>

        <div className="flex items-center gap-6 mr-4">
          {/* <button onClick={() => setShowNotification(!showNotification)}>
            <IoNotifications size={25} className="text-white" />
            <span className="absolute top-1 right-16 bg-red-500 text-white text-xs rounded-full px-1.5">
              13
            </span>
          </button> */}
          {showNotification && (
            <div ref={notificationRef} className="absolute right-0 top-8 z-50">
              <NotificationModal />
            </div>
          )}
          <button onClick={()=> setOpen(!isOpen)}>
            <FaCircleUser size={28} className="text-white cursor-pointer" />
          </button>
        </div>
      </div>

      {/* UserPage Drawer */}
      <UserPage isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};

export default Header;
