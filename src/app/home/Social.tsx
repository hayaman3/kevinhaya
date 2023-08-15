"use client";
import React from "react";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaSquareFacebook } from "react-icons/fa6";

const Social: React.FunctionComponent = () => {
  return (
    <div className="grid grid-cols-[max-content] gap-y-4">
      <IconContext.Provider
        value={{
          className:
            "text-xl text-title duration-300 hover:text-black hover:scale-120",
        }}
      >
        <a
          href="https://github.com/hayaman3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kevin-larry-haya-458958198/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.facebook.com/kevinlarry.haya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareFacebook />
        </a>
      </IconContext.Provider>
    </div>
  );
};

export default Social;
