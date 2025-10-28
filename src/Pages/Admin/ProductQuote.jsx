import React, { useState, useEffect } from "react";
import { FaEdit, FaEye, FaSearch } from "react-icons/fa";
import { MdDelete, MdViewModule } from "react-icons/md";
import Modal from "../../Components/Dashboard/Modal";
import DetailsComponent from "../../Components/Dashboard/DetailsComponent"; // Import the DetailsComponent
import axios from "axios";
import { toast } from "react-hot-toast";

const ProductQuote = () => {
  const [search, setSearch] = useState("");
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProductQuote, setSelectedProductQuote] = useState(null); // State for selected product quote
  const [isViewModalOpen, setIsViewModalOpen] = useState(false); // State for view modal visibility
  const itemsPerPage = 10; // Show only 10 items per page

  const [searchBy, setSearchBy] = useState("name"); // default to "name"

  useEffect(() => {
    const getUsers = async () => {
      try {
        const token = localStorage.getItem("user"); // Assuming token is stored in localStorage
        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/iot/quote/all`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Attach token
              "Content-Type": "application/json",
            },
          }
        );

        if (Array.isArray(response.data)) {
          setProductList(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
          setProductList([]);
        }
      } catch (err) {
        console.error(
          "Fetching users failed:",
          err.response?.data || err.message
        );
        setProductList([]);
      }
    };

    getUsers();
  }, []);

  // Handle Delete Function
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("user");
      if (!token) {
        toast.error("Authentication token missing");
        return;
      }

      // Send DELETE request to the backend
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/iot/quote/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Remove the deleted item from the UI
      setProductList((prevList) => prevList.filter((item) => item._id !== id));

      toast.success("Quote deleted successfully!");
    } catch (error) {
      console.error("Error deleting quote:", error);
      toast.error("Failed to delete quote");
    }
  };

  const filteredProducts = productList.filter((user) => {
  const value = user[searchBy]?.toString().toLowerCase() || "";
  return value.includes(search.toLowerCase());
});


  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedData = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle View Function
  const handleView = (productQuoteData) => {
    setSelectedProductQuote(productQuoteData); // Set selected product quote data
    setIsViewModalOpen(true); // Open the view modal
  };

  // Close View Modal Function
  const closeViewModal = () => {
    setIsViewModalOpen(false); // Close the view modal
    setSelectedProductQuote(null); // Clear selected product quote data
  };

  // Prepare details for the DetailsComponent
  const details = selectedProductQuote
    ? [
        { label: "Name", value: selectedProductQuote.name },
        { label: "Email", value: selectedProductQuote.email },
        { label: "Phone", value: selectedProductQuote.phone },
        { label: "Product Name", value: selectedProductQuote.productName },
      ]
    : [];

  return (
    <div className="p-2">
    
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5">

        <h2 className=" text-xl md:text-3xl text-sky-900 font-bold ">IoT Product Quote</h2>
        <div className="w-xl max-w-[360px] max-h-12 border border-gray-300 rounded shadow-sm  px-3 py-2  flex items-center justify-end gap-1 bg-white">
          {/* Search Icon */}
          <FaSearch className="text-gray-500" />

          {/* Input */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search by ${searchBy}`}
            className="flex-grow outline-none text-sm text-gray-800 placeholder-gray-400"
          />

          {/* Dropdown (stubbed) */}
          <select
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
            className="text-sm bg-transparent text-gray-700 outline-none"
          >
            <option value="name">By name</option>
            <option value="email">By email</option>
            <option value="mobile">By mobile</option>
            <option value="product name">By P.name</option>
          </select>

          {/* Grid Icon */}
          <MdViewModule className="text-gray-700 text-xl cursor-pointer" />
        </div>
      </div>
<div className="table-scroll max-h-[calc(100vh-200px)] rounded shadow">
      <table className="w-full text-sm text-left text-gray-600 ">
       <thead className="text-xs  uppercase bg-gray-100 text-gray-800 bg-gradient-to-b from-gray-100 to-gray-100  rounded-lg   font-bold px-8 py-4 shadow-inner shadow-[#ffffff99] drop-shadow-md tracking-wide ">
          <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Phone</th>
            <th className="px-6 py-4">Product Name</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((product) => (
            <tr
              key={product._id} // Use _id instead of id
              className="odd:bg-white even:bg-gray-100 border-b border-gray-200"
            >
              <td className="p-3">{product.name}</td>
              <td className="p-3">{product.email}</td>
              <td className="p-3">{product.phone}</td>
              <td className="p-3">{product.productName}</td>
              <td className="p-3 flex">
                <button
                  className="px-4 py-2 text-lg text-green-500 rounded hover:text-green-600"
                  onClick={() => handleView(product)} // Open view modal on click
                >
                  <FaEye />
                </button>

                <button
                  className="px-2 py-2 text-lg text-red-500 rounded hover:text-red-600"
                  onClick={() => handleDelete(product._id)} // Delete the quote
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
</div>
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

      {/* View Product Quote Modal */}
      {isViewModalOpen && (
        <Modal onClose={closeViewModal}>
          <DetailsComponent details={details} />
        </Modal>
      )}
    </div>
  );
};

export default ProductQuote;