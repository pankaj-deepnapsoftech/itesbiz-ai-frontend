import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaEdit, FaEye, FaSearch, FaPlus, FaTrash } from "react-icons/fa";
import { MdDelete, MdViewModule } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";
import Modal from "../../Components/Dashboard/Modal";
import DetailsComponent from "../../Components/Dashboard/DetailsComponent";

import Quill from "quill";
import "quill/dist/quill.snow.css";

const BlogEditor = ({ formData, setFormData, editBlog }) => {
  const quillRef = useRef(null);
  const quillInstanceRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current) return;

    // Initialize Quill only once
    if (!quillInstanceRef.current) {
      quillInstanceRef.current = new Quill(quillRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        },
      });

      // Set up text change handler
      quillInstanceRef.current.on("text-change", () => {
        const quill = quillInstanceRef.current;
        if (!quill) return;

        // Normalize and highlight links
        quill.root.querySelectorAll("a").forEach((link) => {
          const href = link.getAttribute("href") || "";
          if (href && !/^https?:\/\//i.test(href)) {
            link.setAttribute("href", "https://" + href);
          }
          link.style.color = "#1d4ed8"; // blue-700
          link.style.textDecoration = "underline";
        });

        setFormData((prev) => ({
          ...prev,
          content: quill.root.innerHTML,
        }));
      });
    }

    // Load content when editing
    const initialContent = editBlog?.content ?? formData.content ?? "";
    if (quillInstanceRef.current && initialContent) {
      quillInstanceRef.current.root.innerHTML = initialContent;
    }

    // Highlight links in loaded content
    const quill = quillInstanceRef.current;
    if (quill) {
      quill.root.querySelectorAll("a").forEach((link) => {
        const href = link.getAttribute("href") || "";
        if (href && !/^https?:\/\//i.test(href)) {
          link.setAttribute("href", "https://" + href);
        }
        link.style.color = "#1d4ed8";
        link.style.textDecoration = "underline";
      });
    }

    return () => {
      quillInstanceRef.current = null;
    };
  }, [editBlog]);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Content *
      </label>
      <div
        ref={quillRef}
        className="w-full border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 min-h-[200px]"
      />
    </div>
  );
};


const Blogs = () => {
  const [search, setSearch] = useState("");
  const [blogList, setBlogList] = useState([]);
  const [currentPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editBlog, setEditBlog] = useState(null);
  const itemsPerPage = 10;

  const [searchBy, setSearchBy] = useState("title");
  const [statusFilter, setStatusFilter] = useState("all");

  // Form state for creating/editing blogs
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    excerpt: "",
    featuredImage: "",
    tags: [],
    category: "General",
    status: "draft",
    isFeatured: false,
  });

  const [imageFile, setImageFile] = useState(null);

  const getBlogs = useCallback(async () => {
    try {
      const token = localStorage.getItem("user");
      if (!token) {
        console.error("No token found");
        return;
      }

      const params = new URLSearchParams({
        page: currentPage,
        limit: itemsPerPage,
      });

      if (statusFilter !== "all") {
        params.append("status", statusFilter);
      }

      if (search) {
        params.append("search", search);
      }

      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/blog?${params}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setBlogList(response.data.data);
      } else {
        console.error("Unexpected API response:", response.data);
        setBlogList([]);
      }
    } catch (err) {
      console.error(
        "Fetching blogs failed:",
        err.response?.data || err.message
      );
      setBlogList([]);
    }
  }, [currentPage, statusFilter, search]);

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  const filteredBlogs = blogList.filter((blog) => {
    const value = blog[searchBy]?.toString().toLowerCase() || "";
    return value.includes(search.toLowerCase());
  });

  const handleDeleteBlog = async (blogId) => {
    if (!blogId) {
      console.error("Blog ID is undefined or invalid");
      toast.error("Invalid blog ID");
      return;
    }

    try {
      const token = localStorage.getItem("user");
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/blog/${blogId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBlogList(blogList.filter((blog) => blog._id !== blogId));
      toast.success("Blog deleted successfully");
    } catch (error) {
      console.error(
        "Deleting blog failed:",
        error.response?.data || error.message
      );
      toast.error("Failed to delete blog");
    }
  };

  const handleView = (blogData) => {
    setSelectedBlog(blogData);
    setIsModalOpen(true);
  };

  const handleEditClick = (blogData) => {
    setEditBlog(blogData);
    setFormData({
      title: blogData.title || "",
      content: blogData.content || "",
      author: blogData.author || "",
      excerpt: blogData.excerpt || "",
      featuredImage: blogData.featuredImage || "",
      // tags: blogData.tags?.join(", ") || "",
      tags: Array.isArray(blogData.tags)
        ? blogData.tags
        : blogData.tags
        ? blogData.tags.split(",").map((t) => t.trim())
        : [],

      category: blogData.category || "General",
      status: blogData.status || "draft",
      isFeatured: blogData.isFeatured || false,
    });
    setIsEditModalOpen(true);
  };

  const handleCreateClick = () => {
    setFormData({
      title: "",
      content: "",
      author: "",
      excerpt: "",
      featuredImage: "",
      tags: [],
      category: "General",
      status: "draft",
      isFeatured: false,
    });
    setImageFile(null);
    setIsCreateModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const token = localStorage.getItem("user");
  //     let payload;
  //     let headers = { Authorization: `Bearer ${token}` };

  //     if (imageFile) {
  //       const fd = new FormData();
  //       fd.append("title", formData.title);
  //       fd.append("content", formData.content);
  //       fd.append("author", formData.author);
  //       fd.append("excerpt", formData.excerpt);
  //       fd.append(
  //         "tags",
  //         formData.tags
  //           ? JSON.stringify(
  //               formData.tags
  //                 .split(",")
  //                 .map((tag) => tag.trim())
  //                 .filter(Boolean)
  //             )
  //           : JSON.stringify([])
  //       );
  //       fd.append("category", formData.category);
  //       fd.append("status", formData.status);
  //       fd.append("isFeatured", String(formData.isFeatured));
  //       fd.append("featuredImage", imageFile);
  //       payload = fd;
  //       // Do not set Content-Type; browser will set multipart boundary
  //     } else {
  //       payload = {
  //         ...formData,
  //         tags: formData.tags
  //           ? formData.tags
  //               .split(",")
  //               .map((tag) => tag.trim())
  //               .filter(Boolean)
  //           : [],
  //       };
  //       headers["Content-Type"] = "application/json";
  //     }

  //     let response;
  //     if (editBlog) {
  //       response = await axios.put(
  //         `${import.meta.env.VITE_BACKEND_BASE_URL}/blog/${editBlog._id}`,
  //         payload,
  //         { headers }
  //       );
  //       toast.success("Blog updated successfully");
  //     } else {
  //       response = await axios.post(
  //         `${import.meta.env.VITE_BACKEND_BASE_URL}/blog`,
  //         payload,
  //         { headers }
  //       );
  //       toast.success("Blog created successfully");
  //     }

  //     if (response.data.success) {
  //       setIsCreateModalOpen(false);
  //       setIsEditModalOpen(false);
  //       setEditBlog(null);
  //       setImageFile(null);
  //       getBlogs(); // Refresh the list
  //     }
  //   } catch (error) {
  //     console.error(
  //       console.log(error),
  //       "Error saving blog:",
  //       error.response?.data || error.message
  //     );
  //     toast.error("Failed to save blog");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("user");
      let payload;
      let headers = { Authorization: `Bearer ${token}` };

      const normalizedTags = Array.isArray(formData.tags)
        ? formData.tags
        : typeof formData.tags === "string"
        ? formData.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
        : [];

      if (imageFile) {
        const fd = new FormData();
        fd.append("title", formData.title);
        fd.append("content", formData.content);
        fd.append("author", formData.author);
        fd.append("excerpt", formData.excerpt);
        fd.append("tags", JSON.stringify(normalizedTags));
        fd.append("category", formData.category);
        fd.append("status", formData.status);
        fd.append("isFeatured", String(formData.isFeatured));
        fd.append("featuredImage", imageFile);
        payload = fd;
      } else {
        payload = {
          ...formData,
          tags: normalizedTags,
        };
        headers["Content-Type"] = "application/json";
      }

      let response;
      if (editBlog) {
        response = await axios.put(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/blog/${editBlog._id}`,
          payload,
          { headers }
        );
        toast.success("Blog updated successfully");
      } else {
        response = await axios.post(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/blog`,
          payload,
          { headers }
        );
        toast.success("Blog created successfully");
      }

      if (response.data.success) {
        setIsCreateModalOpen(false);
        setIsEditModalOpen(false);
        setEditBlog(null);
        setImageFile(null);
        getBlogs();
      }
    } catch (error) {
      console.error(
        "Error saving blog:",
        error.response?.data || error.message
      );
      toast.error("Failed to save blog");
    }
  };

  return (
    <div className="p-2">
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5">
        <h2 className="text-xl md:text-3xl text-sky-900 font-bold">
          Blog Management
        </h2>

        <div className="flex gap-4 items-center">
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="all">All Status</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>

          {/* Search */}
          <div className="w-xl max-w-[360px] max-h-12 border border-gray-300 rounded shadow-sm px-3 py-2 flex items-center justify-end gap-3 bg-white">
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
              <option value="title">By title</option>
              <option value="author">By author</option>
              <option value="category">By category</option>
            </select>
            <MdViewModule className="text-gray-700 text-xl cursor-pointer" />
          </div>

          {/* Create Blog Button */}
          <button
            onClick={handleCreateClick}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
          >
            <FaPlus className="w-4 h-4" />
            Create Blog
          </button>
        </div>
      </div>

      <div className="table-scroll max-h-[calc(100vh-200px)] rounded shadow">
        <table className="w-full text-sm text-left rtl:text-right text-gray-600">
          <thead className="text-xs uppercase bg-gray-100 text-gray-800 bg-gradient-to-b from-gray-100 to-gray-100 rounded-lg font-bold px-8 py-4 shadow-inner shadow-[#ffffff99] drop-shadow-lg tracking-wide">
            <tr>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Author</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Created</th>
              <th className="px-6 py-4">Views</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBlogs.map((blog) => (
              <tr
                key={blog._id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
              >
                <td
                  className="p-3 font-semibold max-w-xs truncate"
                  title={blog.title}
                >
                  {blog.title}
                </td>
                <td className="p-3">{blog.author}</td>
                <td className="p-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    {blog.category}
                  </span>
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      blog.status === "published"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {blog.status}
                  </span>
                </td>
                <td className="p-3">
                  {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </td>
                <td className="p-3">{blog.views || 0}</td>
                <td className="p-3 flex gap-2">
                  <button
                    className="px-3 py-2 text-lg text-green-500 rounded hover:text-green-600"
                    onClick={() => handleView(blog)}
                    title="View Blog"
                  >
                    <FaEye />
                  </button>
                  <button
                    className="px-3 py-2 text-lg text-blue-500 rounded hover:text-blue-600"
                    onClick={() => handleEditClick(blog)}
                    title="Edit Blog"
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="px-3 py-2 text-lg text-red-500 rounded hover:text-red-600"
                    onClick={() => handleDeleteBlog(blog._id)}
                    title="Delete Blog"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {isModalOpen && selectedBlog && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <DetailsComponent
            details={[
              { label: "Title", value: selectedBlog.title || "Not Available" },
              {
                label: "Author",
                value: selectedBlog.author || "Not Available",
              },
              {
                label: "Category",
                value: selectedBlog.category || "Not Available",
              },
              {
                label: "Status",
                value: selectedBlog.status || "Not Available",
              },
              { label: "Views", value: selectedBlog.views || 0 },
              {
                label: "Featured",
                value: selectedBlog.isFeatured ? "Yes" : "No",
              },
              {
                label: "Excerpt",
                value: selectedBlog.excerpt || "Not Available",
              },
              {
                label: "Created",
                value: selectedBlog.createdAt
                  ? new Date(selectedBlog.createdAt).toLocaleDateString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      }
                    )
                  : "Not Available",
              },
            ]}
          />
        </Modal>
      )}

      {/* Create/Edit Modal */}
      {(isCreateModalOpen || isEditModalOpen) && (
        <Modal
          onClose={() => {
            setIsCreateModalOpen(false);
            setIsEditModalOpen(false);
            setEditBlog(null);
          }}
        >
          <div className="p-4 w-full max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-sky-700 mb-4">
              {editBlog ? "Edit Blog" : "Create New Blog"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  // required={true}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Author *
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  // required={true}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="General">General</option>
                  <option value="Technology">Technology</option>
                  <option value="Business">Business</option>
                  <option value="News">News</option>
                  <option value="Tutorials">Tutorials</option>
                </select>
              </div>

              {/* replace the previous editor block with this */}
              {(isEditModalOpen || isCreateModalOpen) && (
                <BlogEditor
                  formData={formData}
                  setFormData={setFormData}
                  editBlog={editBlog}
                />
              )}

              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="tag1, tag2, tag3"
                />
              </div> */}

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags
                </label>

                <div className="flex flex-wrap items-center gap-2 border border-gray-300 rounded-md p-2">
                  {formData.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm flex items-center"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            tags: prev.tags.filter((_, i) => i !== index),
                          }))
                        }
                        className="ml-1 text-blue-500 hover:text-blue-700"
                      >
                        ×
                      </button>
                    </span>
                  ))}

                  <input
                    type="text"
                    className="flex-grow outline-none text-sm p-1"
                    placeholder="Type and press Enter"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.target.value.trim() !== "") {
                        e.preventDefault();
                        const newTag = e.target.value.trim();
                        setFormData((prev) => ({
                          ...prev,
                          tags: [...(prev.tags || []), newTag],
                        }));
                        e.target.value = "";
                      }
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Featured Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formData.featuredImage && !imageFile && (
                  <p className="text-xs text-gray-500 mt-1">
                    Current: {formData.featuredImage}
                  </p>
                )}
              </div>

              <div className="flex gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="isFeatured"
                    checked={formData.isFeatured}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <label className="text-sm font-medium text-gray-700">
                    Featured Blog
                  </label>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
                >
                  {editBlog ? "Update Blog" : "Create Blog"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsCreateModalOpen(false);
                    setIsEditModalOpen(false);
                    setEditBlog(null);
                  }}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Blogs;
