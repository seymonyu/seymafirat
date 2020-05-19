import React from "react";
import "../../stylesheets/project.scss";
import dash from "../../image/dash.png";

function Project4() {
  return (
    <div>
      <img className="project-img" src={dash} alt="try2" />
      <div className="color-overlay">
        <div className="project-link-container">
          <a
            className="project-link"
            href="https://github.com/software-bastards/charlies-bastards-employee-dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project4;
