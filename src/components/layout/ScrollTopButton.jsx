import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTopButton() {
  const [showIcon, setShowIcon] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const nextShow = currentScrollPos > 10;
    setShowIcon(nextShow);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FaArrowUp
      className={
        "animate-pulseButton fixed bottom-[5%] right-[5%] text-blue-600 border-2 bg-black border-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white transition duration-[2000] ease-in-out" +
        (showIcon ? " opacity-100 translate-y-[-60px]" : " opacity-0")
      }
      size={50}
      onClick={scrollTop}
    />
  );
}
