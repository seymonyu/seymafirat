import React from "react";
import borlin from "../../image/borlin.png";
import "../../stylesheets/project.scss";

function Project2() {
  return (
    <div className="project-main">
      <img className="project-img" src={borlin} alt="try2" />
      <div className="color-overlay">
        <div className="project-link-container">
          <a
            className="project-link"
            href="https://github.com/seymonyu/amsterdam-dublin-hackathon2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            className="project-link"
            href="https://borlin.netlify.app/"
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

export default Project2;
