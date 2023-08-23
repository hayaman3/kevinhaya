"use client";
// import React, { FunctionComponent, useState, useEffect } from "react";

// interface TypewriterProps {
//   text: string;
//   delay: number;
//   infinite?: boolean;
// }

// const Typewriter: FunctionComponent<TypewriterProps> = ({
//   text,
//   delay,
//   infinite = false,
// }) => {
//   const [currentText, setCurrentText] = useState<string>("");
//   const [currentIndex, setCurrentIndex] = useState<number>(0);

//   useEffect(() => {
//     let timeout: NodeJS.Timeout;

//     if (currentIndex < text.length) {
//       timeout = setTimeout(() => {
//         setCurrentText((prevText) => prevText + text[currentIndex]);
//         setCurrentIndex((prevIndex) => prevIndex + 1);
//       }, delay);
//     } else if (infinite) {
//       setCurrentIndex(0);
//       setCurrentText("");
//     }

//     return () => clearTimeout(timeout);
//   }, [currentIndex, delay, infinite, text]);

//   return (
//     <h3 className="relative mb-4 text-xl font-normal text-title md:text-base">
//       {currentText}
//     </h3>
//   );
// };

import React, { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  delay: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ texts, delay }) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showingFirstWord, setShowingFirstWord] = useState<boolean>(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (currentIndex < texts[currentWordIndex].length) {
      timeout = setTimeout(() => {
        setCurrentText(
          (prevText) => prevText + texts[currentWordIndex][currentIndex],
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else {
      // Word is fully typed
      if (showingFirstWord) {
        timeout = setTimeout(() => {
          setCurrentText("");
          setCurrentIndex(0);
          setCurrentWordIndex(1);
          setShowingFirstWord(false);
        }, 2000);
      } else {
        // Both words have been shown
        timeout = setTimeout(() => {
          setCurrentText("");
          setCurrentIndex(0);
          setCurrentWordIndex(0);
          setShowingFirstWord(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, texts, currentWordIndex, showingFirstWord]);

  return (
    <div className="h-12">
      <h3 className="relative mb-4 text-xl font-normal text-title md:text-base">
        {currentText}
      </h3>
    </div>
  );
};

export default Typewriter;