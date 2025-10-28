import React, { useEffect } from "react";
import svg from "../assets/vision1.gif";
import svg2 from "../assets/our-mission.gif";
import svg3 from "../assets/core.gif";
import approach from "../assets/approach.gif";
import { FaApple, FaAndroid, FaSyncAlt, FaBug, FaWrench } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa6";
import { AiOutlineSolution } from "react-icons/ai";
import TeamCarousel from "./TeamCarousel/TeamCarousel";
import ScrollReveal from "scrollreveal";
import hero from "../assets/sp3.gif";

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

const About = () => {
  const cardsContent = [
    {
      title: "Latest Technologies",
      description:
        "At ITSYBIZZ, we innovate with cutting-edge technologies like React, Vue, Next, Node, MongoDB, Flutter, and WordPress. From responsive web design to digital marketing and software development",
      icon: <FaRegFileCode className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Unique Solutions",
      description:
        "At ITSYBIZZ, we craft unique digital solutions tailored to your vision, ensuring a distinct online presence.",
      icon: <AiOutlineSolution className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Powerful Strategies",
      description:
        "Choosing us means a complete digital solution—from web design to marketing and brand building—all seamlessly integrated to elevate your presence.",
      icon: <FaSyncAlt className="w-10 h-10 text-green-500" />,
    },
  ];

  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal(".reveal", {
      distance: "50px",
      duration: 800,
      delay: 100,
      opacity: 0,
      scale: 0.85,
      easing: "ease-in-out",
    });

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 max-w-[2480px] mx-auto">
      {/* Header Section */}
      <div className="w-full h-auto min-h-[300px] md:min-h-[480px] 2xl:min-h-[600px] relative grid md:grid-cols-2 gap-4 md:gap-2 grid-cols-1 px-4 sm:px-5 2xl:px-8 py-12 md:py-24 2xl:py-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="col-span-1 flex items-center justify-center md:justify-start relative z-10">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 via-sky-500 to-green-500 bg-clip-text text-transparent">
                About Us
              </span>
            </h1>
            <p className="text-lg mt-4 text-gray-600 text-sm sm:text-base max-w-md leading-relaxed">
            Welcome to <span className="ml-2 text-green-400">
              ITSYBIZZ,
              </span> a driving force in digital evolution and innovation based in Faridabad & Delhi NCR. Our focus on website design and web development serves as a catalyst for businesses, bridging the gap between creativity and technology to transform digital landscapes. As we journey together, know that our destination is your digital triumph. It's a place where your brand shines brightly, your message resonates powerfully, and your goals are realized with precision. We invite you to join us on this transformative expedition, where the horizon is limitless, and the opportunities are boundless. Together, we'll uncover new horizons, navigate uncharted waters, and ultimately transform possibilities into the palpable reality of your digital success.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img
              src={hero}
              alt="About Us"
              className="relative w-[200px] h-[150px] sm:w-[250px] sm:h-[180px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[400px] drop-shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[2480px] mx-auto px-4 sm:px-6 2xl:px-8 py-12">
          {/* Vision Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div className="text-center lg:text-left reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                At ITSYBIZZ, we envision a limitless digital future where businesses of all sizes thrive online. Through expert website design, development, digital marketing, brand building, and e-commerce solutions, we craft strategies that enhance your presence and elevate your brand. Our commitment is to turn this vision into reality.
              </p>
            </div>
            <div className="flex justify-center reveal">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <img
                  src={svg}
                  alt="Our Vision"
                  className="relative w-full max-w-md rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div className="flex justify-center reveal order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <img
                  src={svg2}
                  alt="Our Mission"
                  className="relative w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="text-center lg:text-left reveal order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Our mission is to blend creativity with technology, crafting impactful digital experiences through web design, development, marketing, and brand building. We bring ideas to life, ensuring lasting engagement and a strong online presence.
              </p>
            </div>
          </div>

          {/* Approach Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div className="text-center lg:text-left reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Our Approach
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Partnering with ITSYBIZZ unlocks endless possibilities. We blend innovation, expertise, and strategy to deliver seamless web design, development, and digital marketing solutions that evolve with your needs.
              </p>
            </div>
            <div className="flex justify-center reveal">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <img
                  src={approach}
                  alt="Our Approach"
                  className="relative w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Core Services Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div className="flex justify-center reveal order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <img
                  src={svg3}
                  alt="Our Core Services"
                  className="relative w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="text-center lg:text-left reveal order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Our Core Services
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                We power digital transformation with expert web design, development, marketing, brand building, and reputation management. Our tailored solutions and e-commerce expertise help businesses thrive globally.
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="text-center py-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent reveal">
              Why Choose Us
            </h2>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg leading-relaxed text-gray-700">
                We don't believe in one-size-fits-all solutions. Our approach is personalized, ensuring every client gets a strategy aligned with their goals and challenges. From inception to execution, our all-in-one services empower businesses to grow and innovate.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 reveal">
              {cardsContent.map((card, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 hover:border-green-200 relative overflow-hidden"
                >
                  {/* Card background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Card content */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative">
                        {card.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 leading-tight group-hover:text-green-700 transition-colors duration-300 mb-4">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  
                  {/* Card shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <TeamCarousel />
    </div>
  );
};

export default About;