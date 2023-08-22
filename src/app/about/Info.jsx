import React from 'react';

function Info() {
  return (
    <div className="about-info grid">
      <div className="about-box">
        <i className="bx bx-id-card" />
        <h3 className="about-title">Licensed</h3>
        <span className="about-subtitle">Mechanical Engineer</span>
      </div>

      <div className="about-box">
        <i className="bx bx-map" />
        <h3 className="about-title">Location</h3>
        <span className="about-subtitle">Philippines</span>
      </div>
      <div className="about-box">
        <i className="uil uil-arrow" />
        <h3 className="about-title">Studied</h3>
        <span className="about-subtitle">The Odin Project</span>
      </div>
    </div>
  );
}

export default Info;

