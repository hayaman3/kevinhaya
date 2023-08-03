"use client";
import classNames from "classnames";
import React, { useState, useEffect } from "react";
// import './header.css';

function Header() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setheaderShadow(true);
      } else {
        setheaderShadow(false);
      }
    });
  }, []); // no dependencies

  // toggle menu
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [headerShadow, setheaderShadow] = useState(false);

  return (
    <header
      className={classNames(
        "w-full",
        "fixed",
        "top-0",
        "left-0",
        "z-50",
        "bg-zinc-50",
        headerShadow
          ? "shadow-[0 -1px 4px rgba(0, 0, 0, 0.15)]"
          : "shadow-none",
      )}
    >
      <nav
        className="
					container 
					flex 
					h-[calc(var(--header-height)+1.5rem)] 
					items-center
					justify-between
					gap-x-4
			"
      >
        <div className="text-title">&lt; Kevin / &gt;</div>
        {/* <div className={toggle ? 'nav-menu show-menu' : 'nav-menu'}> */}
        <div
          className={classNames(
            "fixed",
            "-bottom-full",
            "left-0",
            "w-full",
            "px-6",
            "bg-zinc-50",
            "pt-2",
            "py-12",
            "shadow-[0 -1px 4px rgba(0, 0, 0, 0.15)]",
            toggle ? "shadow-[0 -1px 4px rgba(0, 0, 0, 0.15)]" : "shadow-none",
          )}
        >
          {/* <ul className="nav-list"> */}
          <ul className="mt-0 grid grid-cols-3 gap-8">
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-estate nav-icon" />
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-user nav-icon" />
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-file-alt nav-icon" />
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                <i className="uil uil-scenery nav-icon" />
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-message nav-icon" />
                Contact
              </a>
            </li>
          </ul>
          <button onClick={() => showMenu(!toggle)} type="button">
            <i className="uil uil-times nav-close" />
          </button>
        </div>
        <button
          className="nav-toggle"
          onClick={() => showMenu(!toggle)}
          type="button"
        >
          <i className="uil uil-apps" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
