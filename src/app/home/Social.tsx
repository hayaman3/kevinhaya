import React from "react";

function Social() {
  return (
    <div className="home-social">
      <a
        href="https://github.com/hayaman3"
        className="home-social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/kevin-larry-haya-458958198/"
        className="home-social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-linkedin" />
      </a>

      <a
        href="https://www.facebook.com/kevinlarry.haya/"
        className="home-social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-facebook" />
      </a>
    </div>
  );
}

export default Social;
