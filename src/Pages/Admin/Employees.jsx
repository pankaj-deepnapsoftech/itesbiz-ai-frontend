import React, { useState, useEffect } from "react";
import { FaEdit, FaEye, FaPlus, FaSearch } from "react-icons/fa";
import { MdDelete, MdViewModule } from "react-icons/md";
import Modal from "../../Components/Dashboard/Modal";
import FormComponent from "../../Components/Dashboard/FormComponent";
import DetailsComponent from "../../Components/Dashboard/DetailsComponent";
import axios from "axios";
import toast from "react-hot-toast";
import EmployeeEdit from "../../Components/EditForms/EmployeeEdit";

const Employees = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employeeList, setEmployeeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const itemsPerPage = 10;

  const [searchBy, setSearchBy] = useState("name"); // default to "name"

  const employeeFields = [
    { name: "name", label: "Employee Name", type: "text", required: true },
    { name: "employeeId", label: "Employee Id", type: "text", required: true },
    { name: "mobile", label: "Mobile No.", type: "text", required: true },
    { name: "email", label: "Email", type: "text", required: true },
    { name: "jobrole", label: "Job Role", type: "text", required: true },
    { name: "dateOfJoining", label: "Joining Date", type: "date", required: true },
    {
      name: "isWorking",
      label: "Currently Working",
      type: "select",
      options: ["Yes", "No"],
      required: true,
    },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: ["Male", "Female", "Other"],
    },
    { name: "profile", label: "Profile", type: "file" },
  ];

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const token = localStorage.getItem("user");
        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/employee`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (Array.isArray(response.data)) {
          setEmployeeList(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
          setEmployeeList([]);
        }
      } catch (err) {
        console.error("Fetching employees failed:", err.response?.data || err.message);
        setEmployeeList([]);
      }
    };

    getEmployees();
  }, []);

  const handleEmployeeAdd = async (formData) => {
    try {
      const token = localStorage.getItem("user");
      if (!token) {
        toast.error("Authentication token not found. Please log in.");
        return;
      }

      const employeeData = {
        ...formData,
        password: "#Deepnap123",
        role: "employee",
        isWorking: formData.isWorking === "Yes",
        dateOfJoining: new Date(formData.dateOfJoining).toISOString(),
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/employee`,
        employeeData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setEmployeeList([...employeeList, response.data]);
      setIsModalOpen(false);
      toast.success("Employee added successfully");
    } catch (error) {
      console.error("Adding employee failed:", error.response?.data || error.message);
      toast.error(`Failed to add employee: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!userId) {
      console.error("User ID is undefined or invalid");
      toast.error("Invalid user ID");
      return;
    }

    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/employee/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}`,
          },
        }
      );

      setEmployeeList(employeeList.filter((user) => user._id !== userId));
      toast.success("Employee deleted successfully");
    } catch (error) {
      console.error("Deleting employee failed:", error.response?.data || error.message);
      toast.error(`Failed to delete employee: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleView = (employeeData) => {
    setSelectedEmployee(employeeData);
    setIsViewModalOpen(true);
  };

  const handleEdit = (empData) => {
    setSelectedEmployee(empData);
    setIsEditModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedEmployee(null);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedEmployee(null);
  };

  const handleEmployeeEdit = (updatedEmployee) => {
    setEmployeeList((prevList) =>
      prevList.map((emp) =>
        emp._id === updatedEmployee._id ? updatedEmployee : emp
      )
    );
    setIsEditModalOpen(false);
    toast.success("Employee updated successfully");
  };

  const filteredEmployee = employeeList.filter((user) => {
  const value = user[searchBy]?.toString().toLowerCase() || "";
  return value.includes(search.toLowerCase());
});


  const totalPages = Math.ceil(filteredEmployee.length / itemsPerPage);
  const paginatedData = filteredEmployee.length > 0
    ? filteredEmployee.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : [];

  const details = selectedEmployee
    ? [
        { label: "Name", value: selectedEmployee.name },
        { label: "Employee ID", value: selectedEmployee.employeeId },
        { label: "Role", value: selectedEmployee.jobrole },
        { label: "Mobile", value: selectedEmployee.mobile },
        {
          label: "Joining Date",
          value: new Date(selectedEmployee.dateOfJoining).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }),
        },
        { label: "Email", value: selectedEmployee.email || "N/A" },
        { label: "Gender", value: selectedEmployee.gender || "N/A" },
        {
          label: "Currently Working",
          value: selectedEmployee.currentlyWorking === "Yes" ? "Yes" : "No",
        },
      ]
    : [];

  return (
    <div className="p-2">
   <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5">
  <h2 className="text-2xl md:text-3xl text-sky-900 font-bold p-3 md:p-0 ">Employees</h2>
  

  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
    <div className="w-full md:w-auto border border-gray-300 rounded shadow-sm px-4 py-3 flex items-center gap-2 justify-end bg-white">
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
      className="w-full md:w-auto py-2 md:py-3 px-3 rounded-md bg-sky-800 border hover:border-sky-800 hover:bg-white text-white hover:text-sky-800 font-semibold transition-all ease-in flex items-center justify-center md:justify-start gap-2"
      onClick={() => setIsModalOpen(true)}
    >
      <FaPlus />Add Employee
    </button>
  </div>
</div>

 <div className="table-scroll max-h-[calc(100vh-200px)] rounded shadow">
      <table className="w-full text-sm text-left text-gray-600 ">
       <thead className="text-xs  uppercase bg-gray-100 text-gray-800 bg-gradient-to-b from-gray-100 to-gray-100  rounded-lg   font-bold px-8 py-4 shadow-inner shadow-[#ffffff99] drop-shadow-lg tracking-wide ">
          <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Employee Id</th>
            <th className="px-6 py-4">Role</th>
            <th className="px-6 py-4">Mobile</th>
            <th className="px-6 py-4">Joining Date</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((emp) => (
            <tr key={emp._id} className="odd:bg-white even:bg-gray-100 border-b border-gray-200">
              <td className="p-3">{emp.name}</td>
              <td className="p-3">{emp.employeeId}</td>
              <td className="p-3">{emp.jobrole}</td>
              <td className="p-3">{emp.mobile}</td>
              <td className="p-3">
                {new Date(emp.dateOfJoining).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </td>
              <td className="p-3 flex">
                <button
                  className="px-4 py-2 text-lg text-green-500 rounded hover:text-green-600"
                  onClick={() => handleView(emp)}
                >
                  <FaEye />
                </button>
                <button
                  className="px-2 py-2 text-lg text-blue-500 rounded hover:text-blue-600"
                  onClick={() => handleEdit(emp)}
                >
                  <FaEdit />
                </button>
                <button
                  className="px-2 py-2 text-lg text-orange-500 rounded hover:text-orange-600"
                  onClick={() => handleDeleteUser(emp._id)}
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

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <FormComponent
            title="Add Employee"
            fields={employeeFields}
            onSubmit={handleEmployeeAdd}
          />
        </Modal>
      )}

      {isViewModalOpen && (
        <Modal onClose={closeViewModal}>
          <DetailsComponent details={details} />
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal onClose={closeEditModal}>
          <EmployeeEdit data={selectedEmployee} onSave={handleEmployeeEdit} />
        </Modal>
      )}
    </div>
  );
};

export default Employees;