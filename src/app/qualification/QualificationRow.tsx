import React, { FunctionComponent } from "react";

export type QualificationRowProps = {
  //no props
};

const QualificationRow: FunctionComponent<QualificationRowProps> = ({}) => {
  return (
    <div className="qualification-data show">
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
      <div />
      <div>
        <span className="qualification-rounder" />
        <span className="qualification-line" />
      </div>
    </div>
  );
};

export default QualificationRow;
