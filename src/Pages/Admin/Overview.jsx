import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaBriefcase,
  FaClipboardList,
  FaEnvelope,
  FaProjectDiagram,
  FaUserCheck,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";

const Overview = () => {
  const [stats, setStats] = useState([
    // {
    //   key: "users",
    //   icon: <FaUsers size={24} />,
    //   label: "Total Users",
    //   value: 0,
    //   bg: "bg-yellow-500",
    // },
    {
      key: "enquiries",
      icon: <FaEnvelope size={24} />,
      label: "Enquiry Requests",
      value: 0,
      bg: "bg-blue-400",
    },
    {
      key: "career",
      icon: <FaBriefcase size={24} />,
      label: "Career Requests",
      value: 0,
      bg: "bg-green-500",
    },
    {
      key: "contact",
      icon: <FaClipboardList size={24} />,
      label: "Contact Us Requests",
      value: 0,
      bg: "bg-rose-400",
    },
    {
      key: "employees",
      icon: <FaUserTie size={24} />,
      label: "Employees",
      value: 0,
      bg: "bg-purple-400",
    },
    // {
    //   key: "totalRP",
    //   icon: <FaProjectDiagram size={24} />,
    //   label: "Total RP",
    //   value: 0,
    //   bg: "bg-sky-400",
    // },
    // {
    //   key: "totalCP",
    //   icon: <FaUserCheck size={24} />,
    //   label: "Total CP",
    //   value: 0,
    //   bg: "bg-gray-500",
    // },
    // {
    //   key: "totalBP",
    //   icon: <FaUserCheck size={24} />,
    //   label: "Total BP",
    //   value: 0,
    //   bg: "bg-orange-400",
    // },
    {
      key: "followups",
      icon: <FaClipboardList size={24} />,
      label: "Total Follow Ups",
      value: 0,
      bg: "bg-teal-500",
    },
  ]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("user");
        if (!token) {
          console.error("No token found");
          return;
        }

        const API_BASE = import.meta.env.VITE_BACKEND_BASE_URL;

        // Define API requests
        const requests = {
          users: axios.get(`${API_BASE}/user/all-users`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          enquiries: axios.get(`${API_BASE}/quotes`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          career: axios.get(`${API_BASE}/career`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          contact: axios.get(`${API_BASE}/contact/getcontact`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          employees: axios.get(`${API_BASE}/employee`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          totalRP: axios.get(`${API_BASE}/rp`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          totalCP: axios.get(`${API_BASE}/cp`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          totalBP: axios.get(`${API_BASE}/bp`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          followups: axios.get(`${API_BASE}/followup`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        };

        // Fetch all API responses
        const results = await Promise.allSettled(
          Object.entries(requests).map(
            ([key, request]) =>
              request.then((res) => ({ key, value: res.data.length })) // Extract key-value pair
          )
        );

        // Transform API data into stats format
        const updatedStats = stats.map((stat) => {
          const found = results.find(
            (result) =>
              result.status === "fulfilled" && result.value.key === stat.key
          );
          return found ? { ...stat, value: found.value.value } : stat;
        });

        setStats(updatedStats);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-[360px] md:w-5xl h-12 md:h-10  gap-6 p-3 md:p-5">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-lg shadow-md flex flex-col items-start border border-gray-200"
        >
          <div className="flex items-center space-x-4 mb-3">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full ${stat.bg} text-white`}
            >
              {stat.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {stat.label}
              </h3>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Overview;
