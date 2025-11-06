import React from "react";

import Marquee from "react-fast-marquee";



const Clients = React.memo(() => {
  const clientLogos = [
    "/clients/client1.png",
    "/clients/client2.webp",
    "/clients/client3.webp",
    "/clients/client4.webp",
    "/clients/client5.webp",
    "/clients/client6.png",
    "/clients/client7.png",
    "/clients/client8.webp",
    "/clients/client9.png",
    "/clients/client10.png",
    "/clients/client11.png",
    "/clients/client12.png",
  ];

  return (
    <div className="mx-auto w-full my-20 px-2 md:px-10">
      <h1 className="subscription-font text-center text-2xl md:text-4xl font-medium text-[#a7a7a7]">
        We have 60+ active users across the nation
      </h1>
      <div className="mt-6 md:mt-16">
        <Marquee play>
          {clientLogos.map((src, idx) => (
            <img
              key={src}
              className={`mx-6 object-cover ${idx === 3 || idx === 7 ? "w-[8rem]" : "h-[4rem]"}`}
              src={src}
              alt="client logo"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
});

export default Clients;
