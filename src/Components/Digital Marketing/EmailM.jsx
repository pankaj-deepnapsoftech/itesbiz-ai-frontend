import React from 'react';
import { FaEnvelopeOpenText, FaUsers, FaTags, FaClock, FaChartPie } from 'react-icons/fa';
import RevealWrapper from '../RevealWrapper';

const EmailM = () => {
    const emailServices = [
        {
          title: "Creative Email Content",
          description: "We design engaging email templates with persuasive copy and visuals.",
          icon: <FaEnvelopeOpenText className="w-10 h-10 text-green-500" />,
        },
        {
          title: "Subscriber List Management",
          description: "We maintain a segmented, clean, and compliant subscriber list.",
          icon: <FaUsers className="w-10 h-10 text-green-500" />,
        },
        {
          title: "Personalization & Segmentation",
          description: "We tailor emails to audience segments for higher engagement.",
          icon: <FaTags className="w-10 h-10 text-green-500" />,
        },
        {
          title: "Automation & Drip Campaigns",
          description: "We set up automated workflows for timely lead nurturing.",
          icon: <FaClock className="w-10 h-10 text-green-500" />,
        },
        {
          title: "Performance Analytics",
          description: "We provide detailed insights to optimize email campaign success.",
          icon: <FaChartPie className="w-10 h-10 text-green-500" />,
        },
    ];

    return (
      <div className="w-full py-12 px-5">
    
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-2">
          Email Marketing
        </h1>
        <p className="text-lg font-semibold text-center text-gray-500 mb-8">
          We create impactful email campaigns to engage, nurture, and convert your audience.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {emailServices.map((service, index) => (
            <RevealWrapper  key={index}>
            <div
           
              className="bg-white p-7 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
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
}

export default EmailM;
