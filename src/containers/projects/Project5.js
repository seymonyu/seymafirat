import React from "react";
import "../../stylesheets/project.scss";
import artechmis from "../../image/artechmis.mp4";

function Project5() {
  return (
    <div className="project-main">
      {/*     <img className="project-img" src={sissy} alt="try2" /> */}
      <video
        webkit-playsinline
        playsinline
        autoplay="autoplay"
        className="project-vid"
        muted
        defaultMuted
        loop
      >
        <source src={artechmis} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="color-overlay">
        <div className="project-link-container">
          <a
            className="project-link"
            href="https://github.com/seymonyu/CodeWoman"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            className="project-link"
            href="https://artechmis.netlify.app/"
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

export default Project5;
