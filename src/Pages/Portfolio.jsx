import React, { useEffect, useState } from "react";
import WavyScrollText from "../Components/WavyScroll";
// import RevealWrapper from "../Components/RevealWrapper";
import ScrollReveal from "scrollreveal";

// Import all images from assets
import jhevImage from "../assets/JEHV.png";
import shivsaktiImage from "../assets/SHIVSAKTI.png";
import micnImage from "../assets/MICN.png";
import shivArtImage from "../assets/SHIV-ART.jpeg";
import aggarwalImage from "../assets/AGGARWAL.png";
import esquareImage from "../assets/ESQUAREEDUWING.png";
import kfsImage from "../assets/KFS.png";
import hotelImage from "../assets/HOTEL.jpeg";
import krishnaLabelsImage from "../assets/KRISHNA-LABELS.jpeg";
import grFinanceImage from "../assets/GR-FINANCE.jpeg";
import financeImage from "../assets/GR-FINANCE.jpeg";
import doctrisImage from "../assets/DOCTRIS.jpeg";
import medicareImage from "../assets/MEDICARER.jpeg";
import clinicImage from "../assets/CLINIC.jpeg";
import drPattersonImage from "../assets/DE.PATTERSON.jpeg";
import crmImage from "../assets/CRM.png";
import hrmImage from "../assets/HRM.png";
import rtpasImage from "../assets/RTPAS.png";
import sopasImage from "../assets/SOPAS.png";
import hero from "../assets/portfolio.gif";
// Add custom styles for animations
const customStyles = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("B2B");

  const products = {
    B2B: [
      {
        title: "JHEV Motors",
        img: jhevImage,
        link: "https://jhevmotors.com/",
      },
      {
        title: "Shivshakti Aluminium",
        img: shivsaktiImage,
        link: "https://shivshaktialuminium.com/",
      },
      {
        title: "Mic N Melon",
        img: micnImage,
        link: "https://micnmelons.com/",
      },
      {
        title: "Shiv Art",
        img: shivArtImage,
        link: "https://shivaarts.com/",
      },
      {
        title: "Aggarwal Caterer",
        img: aggarwalImage,
        link: "https://shivshaktialuminium.com/",
      },
      // {
      //   title: "Rtpas",
      //   img: rtpasImage,
      //   link: "https://rtpas.deepmart.shop/",
      // },
      {
        title: "Esquareeduwing Pvt. Ltd.",
        img: esquareImage,
        link: "https://esquareduwings.com/"
      },
      {
        title: "KFS Fitness",
        img: kfsImage,
        link: "https://kfsfitness.com/"
      },
      {
        title: "Hotel Booking",
        img: hotelImage,
        link: "https://himaratheme.com/"
      },
    ],
    B2C: [
      {
        title: "Krishna Labels",
        img: krishnaLabelsImage,

      },
    ],
    Finance: [
      {
        title: "GR-Finance",
        img: grFinanceImage,
      },
      {
        title: "Finance",
        img: financeImage,
      },
    ],
    Ecommerce: [
      // {
      //   title: "AFS Deals",
      //   img: "https://itsybizz.com/assets/port2-DcxdaKXH.png",
      // },
      // {
      //   title: "Kripa Creations",
      //   img: "https://itsybizz.com/assets/kripa-AMYKLt7o.jpeg",
      // },
      {
        title: "KFS Fitness",
        img: kfsImage,
        link: "https://kfsfitness.com/"
      },
    ],
    Hospital: [
      {
        title: "Doctris",
        img: doctrisImage,
      },
      {
        title: "Medicare",
        img: medicareImage,
      },
      {
        title: "Clinic",
        img: clinicImage,
      },
      {
        title: "Dr.Patterson",
        img: drPattersonImage,
      },
    ],
    Hotel: [
      {
        title: "Hotel Booking",
        img: hotelImage,
      },
    ],
    Industries: [

      {
        title: "Shiv Art",
        img: shivArtImage,
      },

    ],
    Education: [

      {
        title: "Esquareeduwing Pvt. Ltd.",
        img: esquareImage,
      },
    ],
    SocialMedia: [
      // {
      //   title: "Vinod Bhati",
      //   img: "https://itsybizz.com/assets/vbf-8c4BGq_S.jpeg",
      // },
      {
        title: "Aggarwal Caterer",
        img: aggarwalImage,
      },
    ],
    Software: [
      {
        title: "CRM",
        img: crmImage,
        link: "https://shivaarts.com/",
      },
      {
        title: "RTPAS",
        img: rtpasImage,
        link: "https://inventory.deepmart.shop/login",
      },
      {
        title: "HRM ",
        img: hrmImage,
        link: "https://hr.deepmart.shop/",
      },
      {
        title: "SOPAS",
        img: sopasImage,
        link: "https://sopasb2c.deepmart.shop/login",
      },
    ],
  };
  useEffect(() => {
    const sr = ScrollReveal({
      duration: 900,
      origin: "bottom",
      distance: "50px",
      easing: "ease-in-out",
      interval: 300,
      reset: false, // <-- This is key for re-triggering when in view
    });

    sr.reveal(".card");

    // Inject custom styles
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="w-full h-auto min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 max-w-[2480px] mx-auto">
      {/* Header Section */}
      <div className="w-full h-auto min-h-[300px] md:min-h-[480px] 2xl:min-h-[600px] relative grid md:grid-cols-2 gap-4 md:gap-2 grid-cols-1 px-4 sm:px-5 2xl:px-8 py-12 md:py-24 2xl:py-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="col-span-1 flex items-center justify-center md:justify-start relative z-10">
          <div className="text-center md:text-left">
            <WavyScrollText highlight=" Our Products & Solutions" text="" />
            <p className="mt-4 text-gray-600 text-m sm:text-base max-w-md">
              At <span className="ml-2 text-green-400">
              ITSYBIZZ,</span> we deliver innovative, high-quality products and tailored solutions to meet the evolving needs of our clients. Whether you're looking to streamline operations, enhance customer experience, or drive digital transformation, we have the tools and expertise to help you succeed.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img
              src={hero}
              alt="Products & Solutions"
              className="relative w-[200px] h-[150px] sm:w-[250px] sm:h-[180px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[400px] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-50 to-white">
        {/* Tabs Section */}
        <div className="w-full mb-8 px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8 border-b border-gray-200 overflow-x-auto pb-2">
            {Object.keys(products).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-2 mt-5 text-sm sm:text-base md:text-lg font-semibold transition-all whitespace-nowrap px-3 py-1 rounded-lg ${activeTab === tab
                    ? "text-white bg-gradient-to-r from-green-500 to-green-600 shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-green-500 hover:bg-green-50"
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-green-600"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Section */}
        <div className="w-full px-4 sm:px-6 2xl:px-8 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
            {products[activeTab].map((product, index) => (
              <a
                key={index}
                href={product.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group card bg-white shadow-lg hover:shadow-2xl rounded-2xl p-4 sm:p-6 w-full max-w-[300px] text-center transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 hover:border-green-200 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Card content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <img
                      src={product.img}
                      alt={product.title}
                      className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 leading-tight group-hover:text-green-700 transition-colors duration-300">
                    {product.title}
                  </h3>

                  {/* Hover indicator */}
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center space-x-1">
                      <span className="text-xs text-green-600 font-medium">View Project</span>
                      <svg className="w-4 h-4 text-green-600 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Card shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;