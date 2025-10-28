import React from "react";
import {
  FaSearch,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaBullseye,
  FaChartLine,
} from "react-icons/fa";
import RevealWrapper from "../RevealWrapper";

const SEO = () => {
  const seoServices = [
    {
      title: "On-Page SEO",
      description:
        "We optimize website structure, content, and metadata for better rankings.",
      icon: <FaSearch className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Off-Page SEO",
      description:
        "We build authority through link-building and content marketing.",
      icon: <FaExternalLinkAlt className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Local SEO",
      description:
        "We enhance local search visibility to attract nearby customers.",
      icon: <FaMapMarkerAlt className="w-10 h-10 text-green-500" />,
    },
    {
      title: "SEM Strategy",
      description:
        "We create data-driven paid ad campaigns to drive targeted traffic.",
      icon: <FaBullseye className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Keyword Research",
      description:
        "We identify high-converting keywords to maximize search visibility.",
      icon: <FaChartLine className="w-10 h-10 text-green-500" />,
    },
  ];

  return (
    <div className="w-full py-12 px-5">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-2">
        SEO & Search Marketing
      </h1>
      <p className="text-lg font-semibold text-center text-gray-500 mb-8">
        We optimize websites and craft data-driven strategies to enhance search
        visibility.
      </p>

      {/* Responsive Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {seoServices.map((service, index) => (
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

export default SEO;
