import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Modal = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-3 rounded-lg shadow-lg w-[90%] max-w-md h-[400px] table-scroll relative">
        <button className="absolute top-4 right-6  text-gray-600 hover:text-red-500" onClick={onClose}>
        <IoClose size={20}/>
        </button>
        {children}
      </div>
      
    </div>
    );
};

export default Modal;
