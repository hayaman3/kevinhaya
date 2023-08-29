import React, { FunctionComponent } from "react";
import { BsArrowDownShort } from "react-icons/bs";

const ScrollDown: FunctionComponent = () => {
  return (
    <div className="ml-40 md:ml-32 sm:hidden">
      <a href="#about" className="inline-flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="32px"
          height="32px"
          viewBox="0 0 247 390"
          version="1.1"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            className="animate-wheel"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              stroke: "hsl(0, 0%, 20%)",
              strokeWidth: "20px",
            }}
          />
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: "hsl(0, 0%, 20%)",
              strokeWidth: "20px",
            }}
          />
        </svg>
        <span className="ml-0 mr-1 font-medium text-title">Scroll Down</span>
        <BsArrowDownShort
          style={{ color: "hsl(0, 0%, 20%)", fontSize: "1.25rem" }}
        />
      </a>
    </div>
  );
};

export default ScrollDown;
