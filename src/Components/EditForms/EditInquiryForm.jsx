import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const EditInquiryForm = ({ data, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: data?.name || "",
    email: data?.email || "",
    phone: data?.phone || "",
    requirement: data?.requirement || "",
   
  });

  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Prevent multiple submissions

    try {
      const token = localStorage.getItem("user");
      if (!token) {
        toast.error("Authentication token not found. Please log in.");
        return;
      }

      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/quotes/updatequotes/${data._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Inquiry updated successfully!");
      onSave(response.data.updatedInquiry);
    
    } catch (error) {
      console.error("Error updating inquiry:", error.response?.data || error.message);
      toast.error(`Failed to update inquiry: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-semibold text-sky-700 mb-4 border-b pb-2">Edit Inquiry</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
           
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Requirement</label>
          <select
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          
          >
            <option value="" disabled>Select Your Requirement</option>
            <option value="static-web-dev">Static Web Development</option>
            <option value="dynamic-web-dev">Dynamic Web Development</option>
            <option value="ecom">E-Commerce Development</option>
            <option value="crm">CRM Development</option>
            <option value="hrm">HRM Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="software-dev">Software Development</option>
            <option value="appointment-booking">Appointment Booking Web Dev</option>
            <option value="online-reputation">Online Reputation Management</option>
          </select>
        </div>

       
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`px-4 py-2 text-white rounded-md ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-sky-600 hover:bg-sky-700"}`}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditInquiryForm;
