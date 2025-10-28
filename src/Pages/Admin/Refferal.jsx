import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import toast from "react-hot-toast";
import Modal from "../../Components/Dashboard/Modal";

const Refferal = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRefferal, setSelectedRefferal] = useState(null); // State for selected referral
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [isAddReferralModalOpen, setIsAddReferralModalOpen] = useState(false); // State for Add Referral modal
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    dateOfJoining: "",
    gender: "",
    verified: "",
    photo: null,
    remark: "",
  });
  const itemsPerPage = 10; // Show only 10 items per page

  // Dummy data for referrals
  const dummyRefferalData = [
    {
      _id: "1",
      name: "John Doe",
      mobile: "1234567890",
      remark: "Regular Customer",
      customers: [
        { name: "Customer 1", mobile: "1111111111", interestedProduct: "Product A" },
        { name: "Customer 2", mobile: "2222222222", interestedProduct: "Product B" },
        { name: "Customer 3", mobile: "3333333333", interestedProduct: "Product C" },
      ],
    },
    {
      _id: "2",
      name: "Jane Smith",
      mobile: "9876543210",
      remark: "New Customer",
      customers: [
        { name: "Customer 4", mobile: "4444444444", interestedProduct: "Product D" },
      ],
    },
    {
      _id: "3",
      name: "Alice Johnson",
      mobile: "5555555555",
      remark: "VIP Customer",
      customers: [
        { name: "Customer 5", mobile: "5555555555", interestedProduct: "Product E" },
        { name: "Customer 6", mobile: "6666666666", interestedProduct: "Product F" },
      ],
    },
  ];

  // Filtered data based on search query
  const filteredRefferal = dummyRefferalData.filter(
    (entry) =>
      entry?.name?.toLowerCase().includes(search.toLowerCase()) ||
      entry?.mobile?.includes(search) ||
      entry?.remark?.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredRefferal.length / itemsPerPage);
  const paginatedData = filteredRefferal.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle View Function for Customers
  const handleViewCustomers = (refferalData) => {
    setSelectedRefferal(refferalData); // Set selected referral data
    setIsModalOpen(true); // Open the modal
  };

  // Close Modal Function
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedRefferal(null); // Clear selected referral data
  };

  // Handle Add Referral Button Click
  const handleAddReferral = () => {
    setIsAddReferralModalOpen(true); // Open the Add Referral modal
  };

  // Handle Form Input Changes
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    toast.success("Referral added successfully!");
    setIsAddReferralModalOpen(false); // Close the modal
    setFormData({
      name: "",
      mobile: "",
      email: "",
      dateOfJoining: "",
      gender: "",
      verified: "",
      photo: null,
      remark: "",
    });
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl text-sky-900 font-bold mb-4">Referral Programs</h2>
      <div className="mb-4 flex justify-end space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-200 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="py-2 rounded-md hover:bg-sky-800 border border-sky-800 bg-white hover:text-white text-sky-800 font-semibold px-3 transition-all ease-in"
          onClick={handleAddReferral}
        >
          Add Referral
        </button>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-sky-50 uppercase bg-sky-800 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Mobile</th>
            <th className="px-6 py-3">Remark</th>
            <th className="px-6 py-3">Customers</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((entry, index) => (
            <tr
              key={entry._id} // Use _id instead of id
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
            >
              <td className="p-3 font-semibold">
                {(currentPage - 1) * itemsPerPage + index + 1}
              </td>
              <td className="p-3">{entry.name}</td>
              <td className="p-3">{entry.mobile}</td>
              <td className="p-3">{entry.remark}</td>
              <td className="p-3">
                <button
                  className="text-blue-500 hover:text-blue-600 underline"
                  onClick={() => handleViewCustomers(entry)} // Open modal on click
                >
                  {entry.customers.length} Customers
                </button>
              </td>
              <td className="p-3 flex">
                <button
                  className="px-4 py-2 text-lg text-green-500 rounded hover:text-green-600"
                  onClick={() => handleViewCustomers(entry)} // Open modal on click
                >
                  <FaEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-4 flex justify-center items-center space-x-4">
          <button
            className={`px-4 py-2 text-white bg-sky-600 rounded ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-gray-700 font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`px-4 py-2 text-white bg-sky-600 rounded ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Modal for Customers List */}
      {isModalOpen && selectedRefferal && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Customers List</h2>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-sky-50 uppercase bg-sky-800 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3">#</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Mobile</th>
                  <th className="px-6 py-3">Interested Product</th>
                </tr>
              </thead>
              <tbody>
                {selectedRefferal.customers.map((customer, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                  >
                    <td className="p-3 font-semibold">{index + 1}</td>
                    <td className="p-3">{customer.name}</td>
                    <td className="p-3">{customer.mobile}</td>
                    <td className="p-3">{customer.interestedProduct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Modal>
      )}

      {/* Add Referral Modal */}
      {isAddReferralModalOpen && (
        <Modal isOpen={isAddReferralModalOpen} onClose={() => setIsAddReferralModalOpen(false)}>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Add Referral</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>

              {/* Date of Joining */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Joining</label>
                <input
                  type="date"
                  name="dateOfJoining"
                  value={formData.dateOfJoining}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Verified */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Verified</label>
                <select
                  name="verified"
                  value={formData.verified}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="" disabled>Select Verification Status</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Photo */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Photo</label>
                <input
                  type="file"
                  name="photo"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              {/* Remark */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Remark</label>
                <textarea
                  name="remark"
                  value={formData.remark}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  rows="3"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Refferal;