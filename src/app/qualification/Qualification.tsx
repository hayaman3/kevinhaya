import React, { FunctionComponent } from "react";
import QualificationRow from "./QualificationRow";
import "./qualification.css";

interface StyleProps {
  sectionClass: string;
}

const Qualification: FunctionComponent<StyleProps> = ({ sectionClass }) => {
  return (
    <section className={sectionClass} id="qualifications">
      <h2 className="text-center text-3xl font-semibold text-title md:text-2xl">
        Qualification
      </h2>
      <span className="mb-16 block text-center text-sm md:text-[.8rem] sm:mb-12">
        My Journey
      </span>

      <div className="mx-auto grid max-w-[968px] justify-center md:mx-6 xs:mx-4">
        <QualificationRow />
        {/* <div>
          <div className="qualification-data show">
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
        </div> */}

        <div className="qualification-data show">
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

        <div className="qualification-data show">
          <div>
            <h3 className="qualification-title">Introduction to Python</h3>
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

        <div className="qualification-data show">
          <div />
          <div>
            <span className="qualification-rounder" />
            <span className="qualification-line" />
          </div>
          <div>
            <h3 className="qualification-title">Java Programming Language</h3>
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

        <div className="qualification-data show">
          <div>
            <h3 className="qualification-title">C Programming Language</h3>
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

        <div className="qualification-data show">
          <div />
          <div>
            <span className="qualification-rounder" />
            <span className="qualification-line" />
          </div>
          <div>
            <h3 className="qualification-title">Mechanical Engineering</h3>
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
};

export default Qualification;
