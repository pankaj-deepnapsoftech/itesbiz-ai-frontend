import React, { useState, useEffect } from "react";
import Modal from "../../Components/Dashboard/Modal";
import FormComponent from "../../Components/Dashboard/FormComponent";
import DetailsComponent from "../../Components/Dashboard/DetailsComponent";
import { FaEdit, FaEye, FaPlus, FaSearch } from "react-icons/fa";
import { MdDelete, MdViewModule } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";
import EditFollowupForm from "../../Components/EditForms/EditFollowupForm";

const Followup = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [followList, setFollowList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFollowup, setSelectedFollowup] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const itemsPerPage = 10;

  const[searchBy,setSearchBy]=useState("name")
  const followupFields = [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "mobile", label: "Mobile No.", type: "text", required: true },
    { name: "email", label: "Email", type: "text", required: true },
    {
      name: "status",
      label: "Status",
      type: "select",
      options: ["Pending", "In Progress", "Completed"],
      required: true,
    },
    { name: "remarks", label: "Remarks", type: "textarea" },
  ];

  useEffect(() => {
    const getFollowups = async () => {
      try {
        const token = localStorage.getItem("user");
        if (!token) {
          console.error("No token found");
          toast.error("Authentication token missing");
          return;
        }

        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/followup`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (Array.isArray(response.data)) {
          setFollowList(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
          setFollowList([]);
        }
      } catch (err) {
        console.error(
          "Fetching follow-ups failed:",
          err.response?.data || err.message
        );
        toast.error("Failed to fetch follow-ups");
        setFollowList([]);
      } finally {
        setIsLoading(false);
      }
    };

    getFollowups();
  }, []);

  const handleAddFollowup = async (formData) => {
    try {
      const token = localStorage.getItem("user");
      if (!token) {
        toast.error("Authentication token not found. Please log in.");
        return;
      }

      const followupData = {
        ...formData,
        remarks: formData.remarks
          ? [{ val: formData.remarks, date: new Date() }]
          : [],
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/followup`,
        followupData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setFollowList([...followList, response.data]);
      setIsModalOpen(false);
      toast.success("Follow-up added successfully");
    } catch (error) {
      if (error.response?.data?.error) {
        toast.error(error.response.data.error);
      } else {
        console.error(
          "Adding follow-up failed:",
          error.response?.data || error.message
        );
        toast.error("Failed to add follow-up");
      }
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!userId) {
      console.error("User ID is undefined or invalid");
      toast.error("Invalid user ID");
      return;
    }

    try {
      const token = localStorage.getItem("user");
      if (!token) {
        toast.error("Authentication token missing");
        return;
      }

      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/followup/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFollowList((prevList) =>
        prevList.filter((user) => user._id !== userId)
      );
      toast.success("Follow-up deleted successfully");
    } catch (error) {
      console.error(
        "Deleting follow-up failed:",
        error.response?.data || error.message
      );
      toast.error(
        `Failed to delete follow-up: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  const handleView = (followupData) => {
    setSelectedFollowup(followupData);
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedFollowup(null);
  };

  const handleEdit = (followup) => {
    setSelectedFollowup(followup);
    setIsEditModalOpen(true);
  };

  const handleUpdateFollowup = (updatedFollowup) => {
    setFollowList((prevList) =>
      prevList.map((item) =>
        item._id === updatedFollowup._id ? updatedFollowup : item
      )
    );
  };

  
   const filteredFollowups = followList.filter((user) => {
  const value = user[searchBy]?.toString().toLowerCase() || "";
  return value.includes(search.toLowerCase());
});


  const totalPages = Math.ceil(filteredFollowups.length / itemsPerPage);
  const paginatedData = filteredFollowups.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const details = selectedFollowup
    ? [
        { label: "Name", value: selectedFollowup.name },
        { label: "Mobile", value: selectedFollowup.mobile },
        { label: "Status", value: selectedFollowup.status },
        {
          label: "Latest Remark",
          value:
            selectedFollowup.remarks?.length > 0
              ? selectedFollowup.remarks[selectedFollowup.remarks.length - 1]
                  .val
              : "No remarks",
        },
      ]
    : [];

  return (
    <div className="p-2">
      
     <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5">

        <h2 className="text-2xl md:text-3xl text-sky-900 font-bold ">Follow-Ups</h2>
      <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full md:w-auto">
  <div className="w-full sm:w-auto border border-gray-300 rounded shadow-sm px-3 py-2 flex items-center gap-2 bg-white">
    <FaSearch className="text-gray-500" />
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder={`Search by ${searchBy}`}
      className="flex-grow outline-none text-sm text-gray-800 placeholder-gray-400"
    />
    <select
      value={searchBy}
      onChange={(e) => setSearchBy(e.target.value)}
      className="text-sm bg-transparent text-gray-700 outline-none"
    >
      <option value="name">By name</option>
      <option value="email">By email</option>
      <option value="mobile">By mobile</option>
      <option value="role">By role</option>
    </select>
    <MdViewModule className="text-gray-700 text-xl cursor-pointer" />
  </div>

  <button
    className="w-full sm:w-auto py-3 px-3 rounded-md bg-sky-800 border hover:border-sky-800 hover:bg-white text-white hover:text-sky-800 font-semibold transition-all ease-in flex items-center justify-center sm:justify-start gap-2"
    onClick={() => setIsModalOpen(true)}
  >
    <FaPlus /> Add Follow-ups
  </button>
</div>

      </div>

      {isLoading ? (
        <div className="text-center py-4">Loading...</div>
      ) : paginatedData.length === 0 ? (
        <div className="text-center py-4 text-gray-600">
          No follow-ups found
        </div>
      ) : (
        <>
        <div className="table-scroll max-h-[calc(100vh-200px)] rounded shadow">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-sky-800 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Mobile</th>
                <th className="px-6 py-3">Remark</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((fu, index) => (
                <tr
                  key={fu._id}
                  className="odd:bg-white even:bg-gray-50 border-b"
                >
                  <td className="p-3 font-semibold">{index + 1}</td>
                  <td className="p-3">{fu.name}</td>
                  <td className="p-3">{fu.mobile}</td>
                  <td className="p-3">
                    {fu.remarks?.length > 0
                      ? fu.remarks[fu.remarks.length - 1].val
                      : "No remarks"}
                  </td>
                  <td className="p-3">{fu.status}</td>
                  <td className="p-3 flex">
                    <button
                      className="px-4 py-2 text-lg text-green-500 rounded hover:text-green-600"
                      onClick={() => handleView(fu)}
                    >
                      <FaEye />
                    </button>
                    <button
                      onClick={() => handleEdit(fu)}
                      className="px-2 py-2 text-lg text-blue-500 rounded hover:text-blue-600"
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="px-2 py-2 text-lg text-orange-500 rounded hover:text-orange-600"
                      onClick={() => handleDeleteUser(fu._id)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
</div>
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
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
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
        </>
      )}

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <FormComponent
            title="Add Follow-up"
            fields={followupFields}
            onSubmit={handleAddFollowup}
          />
        </Modal>
      )}

      {isViewModalOpen && (
        <Modal onClose={closeViewModal}>
          <DetailsComponent details={details} />
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal onClose={() => setIsEditModalOpen(false)}>
          <EditFollowupForm
            followup={selectedFollowup}
            onClose={() => setIsEditModalOpen(false)}
            onUpdate={handleUpdateFollowup}
          />
        </Modal>
      )}
    </div>
  );
};

export default Followup;
