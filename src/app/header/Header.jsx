"use client";
import classNames from "classnames";
import React, { useState, useEffect } from "react";
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

  const [showMenu, setToggleMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [headerShadow, setheaderShadow] = useState(false);

  const iconClass = classNames(
    "hidden",
    "bg-zinc-50",
    "text-xl",
    "sm:block",
    "sm:text-sm",
    "sm:block",
  );

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
					container 
					flex 
					h-[calc(var(--header-height)+1.5rem)] 
					items-center
					justify-between
					gap-x-4
			"
      >
        <h1 className="font-bold text-title">&lt; Kevin / &gt;</h1>
        <div
          className={classNames(
            "sm:fixed",
            "sm:sticky",
            "sm:-bottom-full",
            "sm:left-0",
            "sm:w-full",
            "sm:bg-zinc-50",
            "sm:pt-2",
            "sm:py-12",
            "sm:shadow-[0px_-1px_4px_rgba(0,0,0,0.15)]",
            "xs:pt-8",
            "xs:px-1",
            "xs:pb-12",
            showMenu ? "sm:bottom-0" : "",
          )}
        >
          <ul className="mt-5 flex gap-x-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-8 xs:gap-0">
            <li aria-labelledby="navigation item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={classNames(
                  navLinkClass,
                  activeNav === "#home" ? navActiveLinkClass : "",
                )}
              >
                <GoHome className={iconClass} />
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
                <GoPerson className={iconClass} />
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
                <GoProjectRoadmap className={iconClass} />
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
                <GoImage className={iconClass} />
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
                <GoMail className={iconClass} />
                Contact
              </a>
            </li>
          </ul>
          <button
            onClick={() => {
              setToggleMenu(!showMenu);
              console.log(showMenu);
            }}
            type="button"
          >
            {/* <i className="uil uil-times nav-close" /> */}exit
            <GoX className="hidden cursor-pointer bg-zinc-50 text-title sm:absolute sm:right-1 sm:top-0 sm:block sm:text-2xl  sm:hover:text-black" />
          </button>
        </div>
        <button
          // className="nav-showMenu"
          onClick={() => setToggleMenu(!showMenu)}
          type="button"
        >
          {/* <i className="uil uil-apps" /> */}
          <GrAppsRounded className={iconClass} />
        </button>
      </nav>
    </header>
  );
}

export default Header;
