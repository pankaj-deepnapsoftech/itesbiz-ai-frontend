import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealText = ({ highlight, text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(textRef.current, {
      origin: "bottom",
      distance: "50px",
      duration: 800,
      delay: 200,
      easing: "ease-in-out",
      reset: false, // Set to true if you want the animation to repeat on scroll
    });
  }, []);

  return (
    <h1 ref={textRef} className="text-gray-50 text-3xl font-semi-bold">
      <span className="text-green-400">{highlight} </span>
      {text}
    </h1>
  );
};

export default ScrollRevealText;
