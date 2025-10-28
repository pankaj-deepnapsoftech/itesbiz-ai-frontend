import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCalendar, FaUser, FaEye, FaTag, FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const backendBase = import.meta.env.VITE_BACKEND_BASE_URL || "";
  const imageOrigin = backendBase.replace(/\/+$/, "").replace(/\/api$/, "");
  const toImageUrl = (p) => (p && p.startsWith("/") ? `${imageOrigin}${p}` : p);

  useEffect(() => {
    getBlog();
  }, [slug]);

  const getBlog = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/blog/${slug}`
      );

      if (response.data.success) {
        setBlog(response.data.data);
        getRelatedBlogs(response.data.data.category);
      } else {
        toast.error("Blog post not found");
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
      toast.error("Failed to load blog post");
    } finally {
      setLoading(false);
    }
  };

  const getRelatedBlogs = async (category) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/blog/published?category=${category}&limit=3`
      );

      if (response.data.success) {
        // Filter out current blog from related blogs
        const filtered = response.data.data.filter((b) => b.slug !== slug);
        setRelatedBlogs(filtered.slice(0, 3));
      }
    } catch (error) {
      console.error("Error fetching related blogs:", error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">
            Blog post not found
          </h2>
          <p className="text-gray-500 mb-4">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <Link
            to="/blogs"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Link>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Featured Image */}
            {blog.featuredImage && (
              <div className="h-64 md:h-96 overflow-hidden">
                <img
                  src={toImageUrl(blog.featuredImage)}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-8">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <FaUser className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar className="w-4 h-4" />
                  <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEye className="w-4 h-4" />
                  <span>{blog.views || 0} views</span>
                </div>
              </div>

              {/* Category and Featured Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {blog.category}
                </span>
                {blog.isFeatured && (
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                {blog.title}
              </h1>

              {/* Excerpt */}
              {blog.excerpt && (
                <div className="text-xl text-gray-600 mb-8 leading-relaxed border-l-4 border-blue-500 pl-6">
                  {blog.excerpt}
                </div>
              )}

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      <FaTag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <div
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: blog.content.replace(/\n/g, "<br />"),
                  }}
                />
              </div>
            </div>
          </article>

          {/* Related Blogs */}
          {relatedBlogs.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <div
                    key={relatedBlog._id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    {relatedBlog.featuredImage && (
                      <div className="h-48 overflow-hidden">
                        <img
                          src={toImageUrl(relatedBlog.featuredImage)}
                          alt={relatedBlog.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <FaCalendar className="w-3 h-3" />
                        <span>
                          {formatDate(
                            relatedBlog.publishedAt || relatedBlog.createdAt
                          )}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                        {relatedBlog.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {relatedBlog.excerpt ||
                          relatedBlog.content.substring(0, 100) + "..."}
                      </p>

                      <Link
                        to={`/blog/${relatedBlog.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
