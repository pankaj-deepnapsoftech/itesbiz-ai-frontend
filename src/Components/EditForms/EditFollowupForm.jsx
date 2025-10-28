import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const EditFollowupForm = ({ followup, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: followup.name,
    mobile: followup.mobile,
    status: followup.status,
    remarks: followup.remarks?.[followup.remarks.length - 1]?.val || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("user");
      if (!token) {
        toast.error("Authentication token not found. Please log in.");
        return;
      }

      const updatedFollowup = {
        ...followup,
        ...formData,
        remarks: [
          ...followup.remarks,
          { val: formData.remarks, date: new Date() },
        ],
      };

      await axios.put(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/followup/${followup._id}`,
        updatedFollowup,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      onUpdate(updatedFollowup);
      toast.success("Follow-up updated successfully");
      onClose();
    } catch (error) {
      console.error(
        "Updating follow-up failed:",
        error.response?.data || error.message
      );
      toast.error("Failed to update follow-up");
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold text-sky-800 mb-4">Edit Follow-up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <textarea
          name="remarks"
          value={formData.remarks}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Add remark"
        ></textarea>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-sky-800 text-white rounded"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditFollowupForm;
