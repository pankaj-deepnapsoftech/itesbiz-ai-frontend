import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const RevealWrapper = ({ children, className = "" }) => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "50px",
      duration: 800,
      delay: 100,
      opacity: 0,
      scale: 0.85,
      easing: "ease-in-out",
    });
  }, []);

  return <div className={`reveal ${className}`}>{children}</div>;
};

export default RevealWrapper;
