// src/Components/NotificationModal.jsx
import React from "react";

const notifications = [
  { label: "Profile visitors", count: 277, color: "bg-gray-300 text-gray-700" },
  { label: "Rated your photos", count: "+47", color: "bg-purple-400 text-white" },
  { label: "Matches", count: "+79", color: "bg-red-500 text-white" },
  { label: "Favourites", count: "+8", color: "bg-yellow-400 text-white" },
  { label: "Blocked", count: "+1", color: "bg-gray-500 text-white" },
];

const NotificationModal = () => {
  return (
    <div className="absolute right-2 top-12 w-64 bg-white text-gray-600 rounded shadow-lg z-50">
          <div className="absolute top-[-10px] right-18 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-blue-500"></div>

      <div className="bg-sky-600 text-white px-4 py-2 rounded-t flex justify-between items-center">
        <span className="font-semibold">Notifications</span>
        <span className="text-sm">135 new</span>
      </div>
      <ul className="p-4 space-y-3">
        {notifications.map((item, index) => (
          <li key={index} className="flex justify-between items-center text-sm">
            <span>{item.label}</span>
            <span className={`px-2 py-1 text-xs rounded-full ${item.color}`}>
              {item.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationModal;
