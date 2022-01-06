import React, { useState } from "react";
import "../../stylesheets/about.scss";
import { useSpring, animated } from "react-spring";
const AnimFeTurbulence = animated("feTurbulence");
const AnimFeDisplacementMap = animated("feDisplacementMap");

function About() {
  const [open, click] = useState(false);

  const { freq, scale, transform, opacity } = useSpring({
    reverse: open,
    from: {
      scale: 20,
      opacity: 0,
      transform: "scale(0.9)",
      freq: "0.0175, 0.0",
    },
    to: { scale: 100, opacity: 1, transform: "scale(1)", freq: "0.0, 0.0" },
    config: { duration: 1500 },
  });

  return (
    <div className="hello">
      <div className="about-phone">
        <span className="span-hi">Hello! </span>My Name is Şeyma. I am a software test engineer
        who was born in a really warm place. I am passionate
        about releasing the product with a high end quality. I take immense
        satisfaction in being busy and prodcutive.
        <a id="about-phone-link" href="/contact">
          Let’s contact!
        </a>
      </div>
      <div className="animation-container" onClick={() => click(!open)}>
        <animated.svg
          style={{ transform, opacity }}
          width="1200"
          height="500"
          viewBox="200 100 900 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          /* viewBox="50.067480468750006 -28.011242675781247 399.8650390625 206.0224853515625" */
        >
          <defs>
            <filter id="water">
              <AnimFeTurbulence
                type="fractalNoise"
                baseFrequency={freq}
                numOctaves="1.5"
                result="TURB"
                seed="8"
              />
              <AnimFeDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                in="SourceGraphic"
                in2="TURB"
                result="DISP"
                scale={scale}
              />
            </filter>
          </defs>
          <g
            transform="translate(105.55000305175781, 114.60000228881836)"
            filter="url(#water)"
          >
            <text className="svg-text" x="0" dy="3em">
              <tspan x="2" dy="2em" fill="#48ffaa">
                Hi!
              </tspan>
              <tspan x="2" dy="1.8em" fill="#48ffaa">
                My Name is Şeyma. I am a fresh Full Stack Web Developer who was
              </tspan>
              <tspan x="2" dy="1.8em" fill="#48ffaa">
                born in a really warm place. I am passionate about creating
                products
              </tspan>
              <tspan x="2" dy="1.8em" fill="#48ffaa">
                with a unique identity. I take immense satisfaction in being
                busy
              </tspan>

              <tspan x="2" dy="1.8em" fill="#48ffaa">
                and prodcutive.
                <a id="about-contact" href="/contact" fill="#8cc9c1">
                  Let’s contact!
                </a>
              </tspan>
            </text>
          </g>
        </animated.svg>
      </div>
    </div>
  );
}

export default About;
