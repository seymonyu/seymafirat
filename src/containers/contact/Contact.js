import React from "react";
import "../../stylesheets/contact.scss";
import { useSpring, animated } from "react-spring";
import { useHistory } from "react-router-dom";

function WorkContent() {
  const history = useHistory();
  const scrollOnClick = (e) => {
    e.preventDefault();

    history.push("/");
  };
  const props = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    from: { opacity: 0 },
  });
  const mailTo = () => {
    let mail = "mailto:seymafirat@outlook.com";
    let a = document.createElement("a");
    a.href = mail;
    a.click();
  };

  return (
    <animated.div style={props}>
      <div className="content-main">
        <div>
          <h2>CONTACT ME!</h2>
          <div onClick={mailTo} className="contact-big">
            seymafirat@outlook.com
          </div>
          <div className="contact-big">
            <a className="contact-link-big" href="tel:[phone number]">
              <span class="bottom">+31641813700</span>
            </a>
          </div>
          <div className="contact-big"></div>
        </div>

        <div className="contact-links">
          <a
            className="contact-link-item"
            href="https://www.linkedin.com/in/seymonyu/"
            target="_blank"
          >
            {" "}
            <h4 class="wordCarousel">
              <div>
                <ul class="flip2">
                  <li>LINKEDIN</li>
                  <li>LINKEDIN</li>
                </ul>
              </div>
            </h4>
          </a>
          <a
            className="contact-link-item"
            href="https://github.com/seymonyu"
            target="_blank"
          >
            <h4 class="wordCarousel">
              <div>
                <ul class="flip2">
                  <li>GITHUB</li>
                  <li>GITHUB</li>
                </ul>
              </div>
            </h4>
          </a>

          <a
            className="contact-link-item"
            href="https://www.instagram.com/seymonyuu/"
            target="_blank"
          >
            <h4 class="wordCarousel">
              <div>
                <ul class="flip2">
                  <li>INSTAGRAM</li>
                  <li>INSTAGRAM</li>
                </ul>
              </div>
            </h4>
          </a>

          <a
            className="contact-link-item"
            href="mailto:seymafirat@outlook.com"
            target="_blank"
          >
            <h4 class="wordCarousel">
              <div>
                <ul class="flip2">
                  <li>EMAIL</li>
                  <li>EMAIL</li>
                </ul>
              </div>
            </h4>
          </a>
        </div>
      </div>
    </animated.div>
  );
}

export default WorkContent;
