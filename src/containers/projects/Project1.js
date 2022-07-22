import React from "react";
import "../../stylesheets/project.scss";
import musicbylenn from "../../image/musicbylenn.mp4";

function Project1() {
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
        <source src={musicbylenn} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="color-overlay">
        <div className="project-link-container">
          <a
            className="project-link"
            href="https://github.com/seymonyu/musicbylenn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            className="project-link"
            href="https://www.musicbylenn.com/"
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

export default Project1;
