import React from "react";
import {
  FaBullhorn,
  FaChartLine,
  FaMoneyBillWave,
  FaUsers,
  FaEye,
  
} from "react-icons/fa";
import RevealWrapper from "../RevealWrapper";


const Ads = () => {
  const cardsContent = [
    {
      title: "Ad Creative Development",
      description:
        "We design eye-catching visuals and compelling copy to boost engagement and conversions.",
      icon: <FaBullhorn className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Ad Placement Optimization",
      description:
        "We ensure your ads reach the right audience at the right time for maximum efficiency.",
      icon: <FaChartLine className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Budget Management",
      description:
        "We optimize your ad spend to maximize ROI and achieve campaign goals effectively.",
      icon: <FaMoneyBillWave className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Audience Targeting",
      description:
        "We leverage advanced targeting to reach the most relevant audience for better conversions.",
      icon: <FaUsers className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Ad Campaign Monitoring",
      description:
        "We track and optimize campaigns in real-time for improved performance and results.",
      icon: <FaEye className="w-10 h-10 text-green-500" />,
    },
  ];

  

  return (
    <div className="w-full py-12 px-5">
    {/* Header Section */}
    <h1 className="text-4xl font-bold text-center text-gray-700 mb-2">
       Meta Ads
    </h1>
    <p className="text-lg font-semibold text-center text-gray-500 mb-8">
    We create tailored Meta Ads strategies to boost brand awareness, traffic, leads, and sales.
    </p>

    {/* Responsive Cards */}
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
      {cardsContent.map((card, index) => (
        <RevealWrapper  key={index}>
        <div
         
          className="bg-white p-7 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
        >
          {card.icon}
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            {card.title}
          </h2>
          <p className="text-gray-600 mt-2">{card.description}</p>
        </div>
        </RevealWrapper>
      ))}
    </div>
  </div>
  );
};

export default Ads;
