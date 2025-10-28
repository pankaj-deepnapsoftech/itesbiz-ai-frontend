import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaEye, FaSearch } from "react-icons/fa";
import { MdDelete, MdViewModule } from "react-icons/md";
import Modal from "../../Components/Dashboard/Modal";
import DetailsComponent from "../../Components/Dashboard/DetailsComponent";
import FormComponent from "../../Components/Dashboard/FormComponent";

const Users = () => {
  const [search, setSearch] = useState("");
  const [userdata, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 10;

  const [searchBy, setSearchBy] = useState("name"); // default to "name"

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/user/all-users`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`,
            },
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error(
          "Fetching users failed:",
          error.response?.data || error.message
        );
        toast.error("Failed to fetch users");
      }
    };

    getUsers();
  }, []);

 const filteredUsers = userdata.filter((user) => {
  const value = user[searchBy]?.toString().toLowerCase() || "";
  return value.includes(search.toLowerCase());
});

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedData = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDeleteUser = async (userId) => {
    if (!userId) {
      console.error("User ID is undefined or invalid");
      return;
    }

    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}`,
          },
        }
      );
      setUserData(userdata.filter((user) => user._id !== userId));
      toast.success("User deleted successfully");
    } catch (error) {
      console.error(
        "Deleting user failed:",
        error.response?.data || error.message
      );
      toast.error("Failed to delete user");
    }
  };

  const handleEdit = (userData) => {
    setSelectedUser(userData);
    setIsEditModalOpen(true);
  };

  const handleView = (e, userData) => {
    e.preventDefault();
    setSelectedUser(userData);
    setIsViewModalOpen(true);
  };

  const closeModal = () => {
    setIsViewModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedUser(null);
  };

  const handleEditSubmit = async (updatedData) => {
    try {
      setIsLoading(true);

      if (updatedData.role) {
        // Update user role
        await axios.put(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/user/edit-role/${
            selectedUser._id
          }`,
          { role: updatedData.role },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`,
            },
          }
        );
        toast.success("User role updated successfully");
      } else if (updatedData.isBlocked !== undefined) {
        // Block or unblock user
        const endpoint =
          updatedData.isBlocked === "Yes"
            ? `/user/block-user/${selectedUser._id}`
            : `/user/unblock-user/${selectedUser._id}`;

        await axios.put(
          `${import.meta.env.VITE_BACKEND_BASE_URL}${endpoint}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`,
            },
          }
        );
        toast.success(
          updatedData.isBlocked === "Yes"
            ? "User blocked successfully"
            : "User unblocked successfully"
        );
      } else {
        // Update user details
        await axios.put(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/user/edit-user`,
          updatedData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`,
            },
          }
        );
        toast.success("User details updated successfully");
      }

      // Refresh the user list
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/user/all-users`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}`,
          },
        }
      );
      setUserData(response.data);
      setIsEditModalOpen(false);
    } catch (error) {
      console.error(
        "Updating user failed:",
        error.response?.data || error.message
      );
      toast.error("Failed to update user");
    } finally {
      setIsLoading(false);
    }
  };

  const details = selectedUser
    ? [
        { label: "Name", value: selectedUser.name },
        { label: "Email", value: selectedUser.email },
        { label: "Mobile", value: selectedUser.mobile },
        { label: "Role", value: selectedUser.role },
        {
          label: "Created At",
          value: new Date(selectedUser.createdAt).toLocaleDateString(),
        },
        { label: "Is Blocked", value: selectedUser.isBlocked ? "Yes" : "No" },
      ]
    : [];

  const editFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      defaultValue: selectedUser?.name,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      defaultValue: selectedUser?.email,
    },
    {
      name: "mobile",
      label: "Mobile",
      type: "text",
      defaultValue: selectedUser?.mobile,
    },
    {
      name: "role",
      label: "Role",
      type: "select",
      options: [
        "admin",
        "user",
        "employee",
        "refferal",
        "business",
        "corporate",
      ],
      defaultValue: selectedUser?.role,
    },
    {
      name: "isBlocked",
      label: "Is Blocked",
      type: "select",
      options: ["Yes", "No"],
      defaultValue: selectedUser?.isBlocked ? "Yes" : "No",
    },
  ];

  return (
    <div className="p-2">
     <div className="w-full  flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5">

        <h2 className="text-xl md:text-3xl text-sky-900 font-bold">Users</h2>
        <div className="w-xl max-w-[350px] border border-gray-300 rounded shadow-sm px-3 py-2  flex items-center justify-end gap-3 bg-white">
          {/* Search Icon */}
          <FaSearch className="text-gray-500"/>

          {/* Input */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search by ${searchBy}`}
            className=" outline-none text-sm text-gray-800 placeholder-gray-400"
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
            <option value="role">By role</option>
          </select>

          {/* Grid Icon */}
          <MdViewModule className="text-gray-700 text-xl cursor-pointer" />
        </div>
      </div>
      <div className=" p-2 md:table-scroll md:max-h-[calc(100vh-200px)] rounded shadow horizontal-scroll max-[800px]:w-[100%] ">
          {/* <div className="horizontal-scroll "> */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-600 ">
        <thead className="text-xs  uppercase bg-gray-100 text-gray-800 bg-gradient-to-b from-gray-100 to-gray-100  rounded-lg   font-bold px-8 py-4 shadow-inner shadow-[#ffffff99] drop-shadow-lg tracking-wide ">
          <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Mobile</th>
            <th className="px-6 py-4">Role</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((user) =>(
              <tr
                key={user._id}
                className="odd:bg-white  even:bg-gray-100  border-b  border-gray-200"
              >
                <td className="p-3 font-semibold">{user.name}</td>
                <td className="p-3">{user.mobile}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3 flex">
                  <button
                    className="px-4 py-2 text-lg text-green-500 rounded hover:text-green-600"
                    onClick={(e) => handleView(e, user)}
                  >
                    <FaEye />
                  </button>
                  <button
                    className="px-2 py-2 text-lg text-blue-500 rounded hover:text-blue-600"
                    onClick={() => handleEdit(user)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="px-2 py-2 text-lg text-red-500 rounded hover:text-orange-600"
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-600">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
      {/* </div> */}
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-5 mb-4 flex items-center flex-wrap gap-1 text-center justify-center">
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
      {/* View User Modal */}
      {isViewModalOpen && (
        <Modal isOpen={isViewModalOpen} onClose={closeModal}>
          <DetailsComponent details={details} />
        </Modal>
      )}
      {/* Edit User Modal */}
      {isEditModalOpen && (
        <Modal isOpen={isEditModalOpen} onClose={closeModal}>
          <FormComponent
            title="Edit User"
            fields={editFields}
            onSubmit={handleEditSubmit}
            isLoading={isLoading} // Pass loading state
          />
        </Modal>
      )}{" "}
    </div>
  );
};

export default Users;
