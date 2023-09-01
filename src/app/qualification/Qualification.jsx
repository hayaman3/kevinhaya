import React, { useEffect, useRef, useState } from 'react';
import './qualification.css';

function Qualification() {
  const [isVisible, setVisible] = useState(false);
  const visibilityRefs = Array(5)
    .fill()
    .map(() => useRef(null));

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    });
  };

  // const [touched, setToched]= useState({})

  const observer = new IntersectionObserver(handleIntersect, {
    root: null,
    // rootMargin: '-100px 0px',
    threshold: 0.8,
  });

  useEffect(() => {
    visibilityRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      visibilityRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [visibilityRefs, observer]);

  return (
    <section className="qualification section" id="qualifications">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">My Journey</span>

      <div className="qualification-container container">
        <div
          ref={visibilityRefs[0]}
          className={
            isVisible
              ? 'qualification-data show'
              : 'qualification-data hidden'
          }
        >
          <div>
            <h3 className="qualification-title">Web Development</h3>
            <span className="qualification-subtitle">
              <a
                href="https://www.theodinproject.com/"
                className="qualification-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Odin Project
              </a>
            </span>
            <div className="qualification-data-icon">
              <i className="uil uil-calender" />
              2022-2023
            </div>
          </div>

          <div>
            <span className="qualification-rounder" />
            <span className="qualification-line" />
          </div>
        </div>

        <div
          ref={visibilityRefs[1]}
          className={
            isVisible
              ? 'qualification-data show'
              : 'qualification-data hidden'
          }
        >
          <div />
          <div>
            <span className="qualification-rounder" />
            <span className="qualification-line" />
          </div>

          <div>
            <h3 className="qualification-title">Web Development</h3>
            <span className="qualification-subtitle">
              <a
                href="https://www.udemy.com/course/web-development-html5-css3-php-oop-and-mysql-database/"
                className="qualification-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Course link
              </a>
            </span>
            <div className="qualification-data-icon">
              <i className="uil uil-book-alt" />
              Udemy
            </div>
          </div>
        </div>

        <div
          ref={visibilityRefs[2]}
          className={
            isVisible
              ? 'qualification-data show'
              : 'qualification-data hidden'
          }
        >
          <div>
            <h3 className="qualification-title">
              Introduction to Python
            </h3>
            <span className="qualification-subtitle">
              <a
                href="https://www.facebook.com/topreviewcenter"
                className="qualification-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                TOP ECE Review Center
              </a>
            </span>
            <div className="qualification-data-icon">
              <i className="uil uil-map-pin-alt" />
              Baguio City
            </div>
          </div>

          <div>
            <span className="qualification-rounder" />
            <span className="qualification-line" />
          </div>
        </div>

        <div
          ref={visibilityRefs[3]}
          className={
            isVisible
              ? 'qualification-data show'
              : 'qualification-data hidden'
          }
        >
          <div />
          <div>
            <span className="qualification-rounder" />
            <span className="qualification-line" />
          </div>
          <div>
            <h3 className="qualification-title">
              Java Programming Language
            </h3>
            <span className="qualification-subtitle">
              <a
                href="https://informatics.edu.ph/"
                className="qualification-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Informatics
              </a>
            </span>
            <div className="qualification-data-icon">
              <i className="uil uil-map-pin-alt" />
              Baguio City
            </div>
          </div>
        </div>

        <div
          ref={visibilityRefs[4]}
          className={
            isVisible
              ? 'qualification-data show'
              : 'qualification-data hidden'
          }
        >
          <div>
            <h3 className="qualification-title">
              C Programming Language
            </h3>
            <span className="qualification-subtitle">
              <a
                href="https://informatics.edu.ph/"
                className="qualification-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Informatics
              </a>
            </span>
            <div className="qualification-data-icon">
              <i className="uil uil-map-pin-alt" />
              Baguio City
            </div>
          </div>

          <div>
            <span className="qualification-rounder" />
            <span className="qualification-line" />
          </div>
        </div>

        <div
          ref={visibilityRefs[5]}
          className={
            isVisible
              ? 'qualification-data show'
              : 'qualification-data hidden'
          }
        >
          <div />
          <div>
            <span className="qualification-rounder" />
            <span className="qualification-line" />
          </div>
          <div>
            <h3 className="qualification-title">
              Mechanical Engineering
            </h3>
            <span className="qualification-subtitle">
              <a
                href="https://www.slu.edu.ph/"
                className="qualification-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saint Louis University
              </a>
            </span>
            <div className="qualification-data-icon">
              <i className="uil uil-map-pin-alt" />
              Baguio City
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;

