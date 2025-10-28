import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaLinkedin } from "react-icons/fa";
import deepak from "../../../public/teams/deepak.webp"
import pankaj from "../../../public/teams/pankaj.webp"
import vivek from "../../../public/teams/vivek.webp"
import kiara from "../../../public/teams/kiara.webp"
import nitin from "../../../public/teams/nitin.webp"
import dinki from "../../../public/teams/nitin.webp"
const teamMembers = [
  {
    name: "Deepak Sharma",
    post: "CEO",
    image: deepak,
  },
  {
    name: "Pankaj Kumar Shukla",
    post: "CTO",
    image:pankaj,
  },
  {
    name: "Vivek",
    post: "CMO",
    image: vivek,
  },
  {
    name: "Kiara Chauhan",
    post: "HR",
    image: kiara,
  },
  {
    name: "Nitin Thakur",
    post: "Full Stack Developer",
    image: nitin,
  },
  {
    name: "Dinki",
    post: "Full Stack Developer",
    image: dinki,
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
