"use client";
import React, { useEffect, useState } from "react";
import { BiSolidChevronUp } from "react-icons/bi";

function Scrollup() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 560) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScroll && (
        <button
          className="fixed bottom-[10%] right-10 z-10 rounded-[0.4rem] bg-title px-2 py-[0.3rem] opacity-80 transition-[0.2s] hover:bg-black md:px-[0.4rem] md:py-1 sm:right-6 xs:right-4"
          onClick={scrollToTop}
        >
          <BiSolidChevronUp className="text-2xl text-white md:text-xl" />
        </button>
      )}
    </>
  );
}

export default Scrollup;
