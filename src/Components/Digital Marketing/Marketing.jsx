import React from "react";
import {
  FaPenNib,
  FaBlog,
  FaVideo,
  FaFileAlt,
  FaChartLine,
} from "react-icons/fa";
import RevealWrapper from "../RevealWrapper";

const ContentMarketing = () => {
  const contentServices = [
    {
      title: "Creative Content Creation",
      description:
        "We craft engaging content, from articles to infographics, to inform and inspire.",
      icon: <FaPenNib className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Blog Management",
      description:
        "We optimize and manage blogs to enhance SEO and establish industry authority.",
      icon: <FaBlog className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Social Media Content",
      description:
        "We create shareable content that drives engagement and brand advocacy.",
      icon: <FaFileAlt className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Video Content",
      description:
        "We produce compelling videos to tell your brand's story effectively.",
      icon: <FaVideo className="w-10 h-10 text-green-500" />,
    },
    {
      title: "SEO Content Optimization",
      description:
        "We enhance content with SEO techniques to boost visibility and traffic.",
      icon: <FaChartLine className="w-10 h-10 text-green-500" />,
    },
  ];

  return (
    <div className="w-full py-12 px-5">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-2">
        Content Marketing
      </h1>
      <p className="text-lg font-semibold text-center text-gray-500 mb-8">
        We craft compelling content to engage audiences and elevate your brand.
      </p>

      {/* Responsive Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {contentServices.map((service, index) => (
          <RevealWrapper key={index}>
            <div className="bg-white p-7 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              {service.icon}
              <h2 className="text-xl font-semibold text-gray-800 mt-4">
                {service.title}
              </h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </div>
  );
};

export default ContentMarketing;
