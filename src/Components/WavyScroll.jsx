import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const WavyScrollText = ({ highlight, text }) => {
  const textRef = useRef([]);

  useEffect(() => {
    textRef.current.forEach((el, index) => {
      ScrollReveal().reveal(el, {
        origin: "bottom",
        distance: "30px",
        duration: 800,
        delay: index * 150, // Staggered effect
        easing: "ease-in-out",
        reset: false,
      });
    });
  }, []);

  return (
    <h1 className="text-gray-50 text-5xl font-bold flex flex-wrap gap-2">
      {/* Highlighted Text with gradient background */}
      {highlight.split(" ").map((word, index) => (
        <span
          key={`highlight-${index}`}
          ref={(el) => (textRef.current[index] = el)}
          className="bg-gradient-to-r from-blue-500 via-sky-500 to-green-500 bg-clip-text text-transparent"
        >
          {word}
        </span>
      ))}

      {/* Normal Text with Wavy Effect */}
      {text.split(" ").map((word, index) => (
        <span
          key={`text-${index}`}
          ref={(el) => (textRef.current[highlight.split(" ").length + index] = el)}
          className="text-white"
        >
          {word}
        </span>
      ))}
    </h1>
  );
};

export default WavyScrollText;
