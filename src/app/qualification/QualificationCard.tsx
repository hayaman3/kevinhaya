import React, { FunctionComponent } from "react";
import {
  QualificationDataObjectType,
  qualificationData,
} from "./QualificationCardData";

export type QualificationCardProps = {
  //no props
};

const QualificationCard: FunctionComponent<QualificationCardProps> = ({}) => {
  // console.log(qualificationData);

  return (
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
  );
};

export default QualificationCard;
