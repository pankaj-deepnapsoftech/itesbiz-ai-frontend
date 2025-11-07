import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaLinkedin } from "react-icons/fa";
const teamMembers = [
  {
    name: "Deepak Sharma",
    post: "CEO",
    image: "/teams/deepak.webp",
  },
  {
    name: "Pankaj Kumar Shukla",
    post: "CTO",
    image: "/teams/pankaj.webp",
  },
  {
    name: "Vivek",
    post: "CMO",
    image: "/teams/vivek.webp",
  },
  {
    name: "Kiara Chauhan",
    post: "HR",
    image: "/teams/kiara.webp",
  },
  {
    name: "Nitin Thakur",
    post: "Full Stack Developer",
    image: "/teams/nitin.webp",
  },
  {
    name: "Dinki",
    post: "Full Stack Developer",
    image: "/teams/dinki.png",
  },
];

const TeamCarousel = () => {
  return (
    <div className="w-full  mx-auto py-10 bg-white p-4">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Meet Our Team
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="pb-10"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gradient-to-br from-gray-200 to-gray-100 p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
              />
              <h3 className="text-xl font-semibold text-black mt-4">
                {member.name}
              </h3>
              <p className="text-black">{member.post}</p>
              {member.link && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-white bg-white bg-opacity-20 p-2 rounded-full transition-all duration-300 hover:bg-opacity-40"
                >
                  <FaLinkedin size={24} />
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamCarousel;
