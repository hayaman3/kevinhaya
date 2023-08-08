"use client";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { IconContext } from "react-icons";
import {
  GoHome,
  GoPerson,
  GoProjectRoadmap,
  GoImage,
  GoMail,
  GoX,
} from "react-icons/go";
import { GrAppsRounded } from "react-icons/gr";

function Header() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setheaderShadow(true);
      } else {
        setheaderShadow(false);
      }
    });
  }, []);

  const [showMenu, setToggleMenu] = useState(true);
  const [activeNav, setActiveNav] = useState("#home");
  const [headerShadow, setheaderShadow] = useState(false);

  const navLinkClass = classNames(
    "flex",
    "flex-col",
    "items-center",
    "text-sm",
    "text-title",
    "font-medium",
    "duration-300",
    "hover:text-black",
    "hover:scale-110",
  );

  const navActiveLinkClass = classNames("text-black", "scale-110", "underline");

  return (
    <header
      className={classNames(
        "w-full",
        "fixed",
        "top-0",
        "left-0",
        "z-100",
        "bg-zinc-50",
        "sm:top-[initial]",
        "sm:bottom-0",
        headerShadow ? "shadow-[0px_-1px_4px_rgba(0,0,0,0.15)]" : "shadow-none",
      )}
    >
      <nav
        aria-labelledby="page navigation"
        className="
          mx-auto
          flex
					h-[4.5rem]
					max-w-[968px]
					items-center
					justify-between
					gap-x-4
					sm:h-12
          md:mx-6
          xs:mx-4
			"
      >
        <h1 className="font-semibold text-title">&lt; Kevin / &gt;</h1>
        <div
          className={classNames(
            "sm:fixed",
            "sm:-bottom-full",
            "sm:left-0",
            "sm:w-full",
            "sm:bg-zinc-50",
            "sm:pt-8",
            "sm:pb-12",
            "sm:px-6",
            "sm:shadow-[0px_-1px_4px_rgba(0,0,0,0.15)]",
            "xs:pt-8",
            "xs:px-1",
            "xs:pb-12",
            showMenu ? "sm:bottom-0" : "",
          )}
        >
          <ul className="mt-5 flex gap-x-8 sm:grid sm:grid-cols-[repeat(3,1fr)] sm:gap-8 sm:font-bold xs:gap-0">
            <IconContext.Provider
              value={{ className: "hidden text-xl sm:block" }}
            >
              <li aria-labelledby="navigation item">
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={classNames(
                    navLinkClass,
                    activeNav === "#home" ? navActiveLinkClass : "",
                  )}
                >
                  <GoHome />
                  Home
                </a>
              </li>

              <li aria-labelledby="navigation item">
                <a
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={classNames(
                    navLinkClass,
                    activeNav === "#about" ? navActiveLinkClass : "",
                  )}
                >
                  <GoPerson />
                  About
                </a>
              </li>

              <li aria-labelledby="navigation item">
                <a
                  href="#skills"
                  onClick={() => setActiveNav("#skills")}
                  className={classNames(
                    navLinkClass,
                    activeNav === "#skills" ? navActiveLinkClass : "",
                  )}
                >
                  <GoProjectRoadmap />
                  Skills
                </a>
              </li>

              <li aria-labelledby="navigation item">
                <a
                  href="#portfolio"
                  onClick={() => setActiveNav("#portfolio")}
                  className={classNames(
                    navLinkClass,
                    activeNav === "#portfolio" ? navActiveLinkClass : "",
                  )}
                >
                  <GoImage />
                  Portfolio
                </a>
              </li>

              <li aria-labelledby="navigation item">
                <a
                  href="#contact"
                  onClick={() => setActiveNav("#contact")}
                  className={classNames(
                    navLinkClass,
                    activeNav === "#contact" ? navActiveLinkClass : "",
                  )}
                >
                  <GoMail />
                  Contact
                </a>
              </li>
            </IconContext.Provider>
          </ul>
          <button
            onClick={() => {
              setToggleMenu(!showMenu);
              console.log(showMenu);
            }}
            type="button"
          >
            <GoX className=" hidden cursor-pointer bg-zinc-50 stroke-1 text-title sm:absolute sm:right-2 sm:top-2 sm:block sm:text-xl  sm:hover:text-black" />
          </button>
        </div>
        <button
          className="hidden bg-zinc-50 font-normal text-title sm:block sm:text-lg"
          onClick={() => setToggleMenu(!showMenu)}
          type="button"
        >
          {/* <i className="uil uil-apps" /> */}
          <GrAppsRounded />
        </button>
      </nav>
    </header>
  );
}

export default Header;

// color: var(--title-color);
// font-weight: var(--font-medium);
