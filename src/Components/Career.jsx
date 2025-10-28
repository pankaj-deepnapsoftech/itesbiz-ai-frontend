import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    resume: null,
  });

  const [loading, setLoading] = useState(false);

  const designations = [
    { text: "Select Position you are applying for", value: "" },
    { text: "Web Designer", value: "WD" },
    { text: "Web Developer", value: "WBD" },
    { text: "Software Developer", value: "SD" },
    { text: "App Developer", value: "AD" },
    { text: "Hybrid Web Developer", value: "HWD" },
    { text: "Sales Executive", value: "SE" },
    { text: "Sales Manager", value: "SM" },
    { text: "Relationship Manager", value: "RM" },
    { text: "Business Analyst", value: "BA" },
  ];

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      ["application/pdf", "image/jpeg", "image/png"].includes(file.type)
    ) {
      setFormData({ ...formData, resume: file });
    } else {
      toast.error("Invalid file format. Please upload a PDF, JPG, or PNG.");
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("designation", formData.designation);
    formDataToSend.append("resume", formData.resume); // Append the file

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/career`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // ✅ Ensure we only set a string
      toast.success(response.data.message);
    } catch (error) {
      // ✅ Handle error correctly
      const errorMessage =
        error.response?.data?.message || "Something went wrong.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center p-8 bg-gray-50 w-full">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center reveal">
        <img
          className="w-full max-w-xs md:max-w-sm rounded-lg"
          src="/career.png"
          alt="Career"
        />
      </div>

      {/* Form Section */}
      <div className="p-8 bg-white rounded-lg reveal">
        <h2 className="text-2xl font-semibold">Career</h2>
        <p>Accelerate your career by applying today!</p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 p-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="phone"
            placeholder="Enter Your Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
            className="col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {designations.map((val, id) => (
              <option key={id} value={val.value} className="capitalize">
                {val.text}
              </option>
            ))}
          </select>

          <label>Upload your CV (PDF or image)</label>
          <input
            type="file"
            name="resume"
            accept=".pdf, .jpg, .png"
            onChange={handleFileChange}
            className="border p-2 rounded-md"
          />

          <button
            type="submit"
            disabled={loading}
            className="col-span-2 hover:bg-green-700 text-white py-2 rounded-lg font-semibold text-lg shadow-md bg-green-600 transition-all duration-300"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Career;
