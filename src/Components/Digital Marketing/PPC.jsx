import React from "react";
import {
  FaSearchDollar,
  FaCog,
  FaFlask,
  FaRocket,
  FaRedo,
} from "react-icons/fa";
import RevealWrapper from "../RevealWrapper";

const PPC = () => {
  const ppcServices = [
    {
      title: "Keyword Research",
      description:
        "We find high-converting keywords to maximize ad performance and ROI.",
      icon: <FaSearchDollar className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Campaign Management",
      description:
        "We set up, manage, and optimize PPC campaigns for peak efficiency.",
      icon: <FaCog className="w-10 h-10 text-green-500" />,
    },
    {
      title: "A/B Testing",
      description:
        "We test ad variations to identify the most effective strategies.",
      icon: <FaFlask className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Landing Page Optimization",
      description:
        "We refine landing pages to enhance user experience and boost conversions.",
      icon: <FaRocket className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Remarketing & Retargeting",
      description:
        "We re-engage potential customers to improve conversion rates.",
      icon: <FaRedo className="w-10 h-10 text-green-500" />,
    },
  ];

  return (
    <div className="w-full py-12 px-5">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-2">
        PPC Advertising
      </h1>
      <p className="text-lg font-semibold text-center text-gray-500 mb-8">
        We create data-driven PPC campaigns to drive traffic, leads, and sales.
      </p>

      {/* Responsive Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {ppcServices.map((service, index) => (
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

export default PPC;
