import React from "react";
import "../../stylesheets/project.scss";
import amsterdam from "../../image/amsterdam.png";

function Project3() {
  return (
    <div className="project-main">
      <img className="project-img" src={amsterdam} alt="try2" />
      <div className="color-overlay">
        <div className="project-link-container">
          <a
            className="project-link"
            href="https://github.com/seymonyu/firstProject_Amsterdam_photo_guide"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            className="project-link"
            href="https://seymonyu.github.io/firstProject_Amsterdam_photo_guide/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WEBSITE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project3;
