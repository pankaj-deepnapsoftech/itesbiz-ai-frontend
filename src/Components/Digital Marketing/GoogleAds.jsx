import React from "react";
import { FaAd, FaChartBar, FaDollarSign, FaSearch } from "react-icons/fa";
import { PiTargetBold } from "react-icons/pi";
import RevealWrapper from "../RevealWrapper";

const GoogleAds = () => {
  const cardsContent = [
    {
      title: "Precision Keyword Research",
      description:
        "We identify high-converting keywords to ensure your ads reach the right audience.",
      icon: <FaSearch className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Ad Placement Mastery",
      description:
        "We optimize ad placements for maximum reach, efficiency, and ROI.",
      icon: <FaAd className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Budget Allocation Expertise",
      description:
        "We strategically manage your ad spend to maximize campaign performance.",
      icon: <FaDollarSign className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Data-Driven Insights",
      description:
        "We provide in-depth analytics to track progress and optimize ad performance.",
      icon: <FaChartBar className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Audience Targeting Precision",
      description:
        "We use advanced targeting to reach the most relevant audience for conversions.",
      icon: <PiTargetBold className="w-10 h-10 text-green-500" />,
    },
  ];
  return (
    <div className="w-full py-12 px-5">
    
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-2">
        Google Ads
      </h1>
      <p className="text-lg font-semibold text-center text-gray-500 mb-8">
        We tailor Google Ads strategies to enhance brand awareness, traffic,
        leads, and sales.
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {cardsContent.map((card, index) => (
          <RevealWrapper key={index}>
            <div className="bg-white p-7 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
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

export default GoogleAds;
