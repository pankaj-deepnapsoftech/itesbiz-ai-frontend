import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import Header from "../../Components/Dashboard/Header";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  // Retrieve token from localStorage
  const token = localStorage.getItem("user");

  // Redirect if no token found
  useEffect(() => {
    if (!token) {
      navigate("/login"); // Redirect to login if no token
    }
  }, [token, navigate]);

  if (!token) {
    return null; // Prevent rendering until redirected
  }

  return (
    <div className="relative min-h-screen flex w-full">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col w-full">
       
        <Header toggleSidebar={toggleSidebar}/>
        
        <main className="flex-grow p-5 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
