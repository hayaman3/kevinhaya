import React from 'react';
import './activity.css';

function Activity() {
  return (
    <section className="activity section" id="activity">
      <h2 className="section-title">Github Activity</h2>
      <a
        href="https://m.me/kevinlarry.haya"
        target="_blank"
        rel="noopener noreferrer"
        className="section-subtitle github-link"
      >
        github.com/hayaman3
      </a>
      <div className="activity-div">
        <img
          src="https://ghchart.rshah.org/hayaman3"
          alt="Github chart"
          className="activity-image"
        />
      </div>
    </section>
  );
}

export default Activity;

