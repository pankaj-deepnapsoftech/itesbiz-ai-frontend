import React, { useState, useEffect } from "react";
import { FaEdit, FaEye, FaPlus, FaSearch } from "react-icons/fa";
import { MdDelete, MdViewModule } from "react-icons/md";
import Modal from "../../Components/Dashboard/Modal";
import FormComponent from "../../Components/Dashboard/FormComponent";
import DetailsComponent from "../../Components/Dashboard/DetailsComponent";
import axios from "axios";
import { toast } from "react-toastify";
import EditProductForm from "../../Components/EditForms/EditProductForm";

const Products = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [isEditOpen, setIsEditOpen] = useState(false);

  const itemsPerPage = 10;

  const [searchBy, setSearchBy] = useState("name"); // default to "name"

  const productFields = [
    {
      name: "productName",
      label: "Product Name",
      type: "text",
      required: true,
    },
    { name: "brandName", label: "Brand", type: "text", required: true }, // Updated to match backend
    { name: "category", label: "Category", type: "text", required: true },
    { name: "subcategory", label: "Subcategory", type: "text", required: true },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
    },
    {
      name: "specification",
      label: "Specification",
      type: "textarea",
      required: true,
    },
    { name: "image", label: "Upload Image", type: "file", required: true }, // Add file upload field
  ];

  // Fetch products from the backend

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("user");
      if (!token) {
        console.error("No token found");
        toast.error("Authentication token missing");
        return;
      }

      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/iot/prodcuts/all`,
        {
          headers: {
            Authorization: `Bearer ${token}`,

            headers: { "Content-Type": "multipart/form-data" },
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
        "Fetching products failed:",
        err.response?.data || err.message
      );
      toast.error("Failed to fetch products");
      setProductList([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle adding a new product
  const handleAddProduct = async (formData) => {
    try {
      const token = localStorage.getItem("user");
      if (!token) {
        toast.error("Authentication token not found. Please log in.");
        return;
      }

      // Create FormData for file upload
      const data = new FormData();

      // Append all fields to FormData
      for (const key in formData) {
        if (key === "specification" && typeof formData[key] === "string") {
          // Convert specification to array if it's a string
          data.append(
            key,
            JSON.stringify(formData[key].split("\n").map((spec) => spec.trim()))
          );
        } else if (key === "image" && formData[key] instanceof File) {
          // Append the image file
          data.append(key, formData[key]);
        } else {
          // Append other fields
          data.append(key, formData[key]);
        }
      }

      setIsLoading(true); // Start loading
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/iot/prodcuts`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Use multipart/form-data for file upload
          },
        }
      );

      // Update the product list with the new product
      setProductList([...productList, response.data.product]);
      setIsModalOpen(false);
      toast.success("Product added successfully");
    } catch (error) {
      console.error(
        "Adding product failed:",
        error.response?.data || error.message
      );
      toast.error(
        `Failed to add product: ${
          error.response?.data?.message || error.message
        }`
      );
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  // Handle deleting a product
  const handleDeleteUser = async (productId) => {
    if (!productId) {
      console.error("Product ID is undefined or invalid");
      toast.error("Invalid product ID");
      return;
    }

    try {
      const token = localStorage.getItem("user");
      if (!token) {
        toast.error("Authentication token missing");
        return;
      }

      await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/iot/prodcuts/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update state to reflect deletion
      setProductList(
        productList.filter((product) => product._id !== productId)
      );
      toast.success("Product deleted successfully");
    } catch (error) {
      console.error(
        "Deleting product failed:",
        error.response?.data || error.message
      );
      toast.error("Failed to delete product");
    }
  };

  // Handle viewing product details
  const handleView = (productData) => {
    setSelectedProduct(productData);
    setIsViewModalOpen(true);
  };

  // Close the view modal
  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedProduct(null);
  };

  // Filter products based on search
  
  const filteredProducts = productList.filter((user) => {
  const value = user[searchBy]?.toString().toLowerCase() || "";
  return value.includes(search.toLowerCase());
});


  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedData = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditOpen(true);
  };

  // Prepare details for the DetailsComponent
  const details = selectedProduct
    ? [
        { label: "Product Name", value: selectedProduct.productName },
        { label: "Brand", value: selectedProduct.brandName },
        { label: "Category", value: selectedProduct.category },
        { label: "Subcategory", value: selectedProduct.subcategory },
        { label: "Description", value: selectedProduct.description },
        {
          label: "Specification",
          value: selectedProduct.specification?.join("\n") || "N/A",
        },
        { label: "Image", value: selectedProduct.image, type: "image" }, // Display image
      ]
    : [];

  return (
    <div className="p-2">
     
    <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5">
        <h2 className="text-xl md:text-3xl text-sky-900 font-bold ">IoT Products</h2>

         <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
        <div className="w-xl max-w-[360px]  border border-gray-300 rounded shadow-sm  px-3 py-2  flex items-center justify-end gap-3 bg-white">
          {/* Search Icon */}
          <FaSearch  className="text-gray-500 text-xl" />

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
            <option value="product name">By name</option>
            <option value="brand">By brand</option>
            <option value="category">By category</option>
            <option value="subcategory">By s.category</option>
          </select>

          {/* Grid Icon */}
          <MdViewModule className="text-gray-700 text-2xl cursor-pointer" />
        </div>
        <button
              className="w-full md:w-auto py-2 md:py-2 px-3 rounded-md bg-sky-800 border hover:border-sky-800 hover:bg-white text-white hover:text-sky-800 font-semibold transition-all ease-in flex items-center justify-center md:justify-start gap-2"
              onClick={() => setIsModalOpen(true)}
            >
              <FaPlus />Add IoT Products
            </button>
      </div>
      </div>
<div className="table-scroll max-h-[calc(100vh-200px)] rounded shadow">
      <table className="w-full text-sm text-left text-gray-600">
        <thead className="text-xs  uppercase bg-gray-100 text-gray-800 bg-gradient-to-b from-gray-100 to-gray-100  rounded-lg   font-bold px-8 py-4 shadow-inner shadow-[#ffffff99] drop-shadow-lg tracking-wide ">
          <tr>
            <th className="px-6 py-4">Product Name</th>
            <th className="px-6 py-4">Brand</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4">Subcategory</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((product) => (
            <tr
              key={product._id}
              className="odd:bg-white even:bg-gray-100 border-b border-gray-200"
            >
              <td className="p-4">{product.productName}</td>
              <td className="p-4">{product.brandName}</td>
              <td className="p-4">{product.category}</td>
              <td className="p-4">{product.subcategory}</td>
              <td className="p-4 flex">
                <button
                  className="px-4 py-2 text-lg text-green-500 rounded hover:text-green-600"
                  onClick={() => handleView(product)}
                >
                  <FaEye />
                </button>
                <button
                  onClick={() => handleEdit(product)}
                  className="px-2 py-2 text-lg text-blue-500 rounded hover:text-blue-600"
                >
                  <FaEdit />
                </button>
                <button
                  className="px-2 py-2 text-lg text-red-500 rounded hover:text-red-600"
                  onClick={() => handleDeleteUser(product._id)}
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

      {/* Add Product Modal */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <FormComponent
            title="Add Product"
            fields={productFields}
            onSubmit={handleAddProduct}
            isLoading={isLoading} // Pass loading state
          />
        </Modal>
      )}

      {/* View Product Modal */}
      {isViewModalOpen && (
        <Modal onClose={closeViewModal}>
          <DetailsComponent details={details} />
        </Modal>
      )}

      {isEditOpen && (
        <EditProductForm
          product={selectedProduct}
          onClose={() => setIsEditOpen(false)}
          onUpdate={fetchProducts} // Function to refresh product list
        />
      )}
    </div>
  );
};

export default Products;
