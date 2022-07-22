import React, { useState } from "react";
import Project1 from "../projects/Project1";
import Project2 from "../projects/Project2";
import Project3 from "../projects/Project3";
import Project4 from "../projects/Project4";
import Project5 from "../projects/Project5";
import { useSpring, animated } from "react-spring";
import "../../stylesheets/slider.scss";

function Slider() {
  let sliderArr = [
    <Project1 />,
    <Project2 />,
    <Project3 />,
    <Project4 />,
    <Project5 />,
  ];
  const [x, setX] = useState(0);
  const props = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    from: { opacity: 0 },
  });
  const goLeft = () => {
    x === 0 ? setX(-120 * (sliderArr.length - 1)) : setX(x + 120);
  };
  const goRight = () => {
    x === -120 * (sliderArr.length - 1) ? setX(0) : setX(x - 120);
  };
  return (
    <animated.div style={props}>
      <div className="slider-main">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="slide-item"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}

        <button id="goLeft" onClick={goLeft}>
          LEFT
        </button>
        <button id="goRight" onClick={goRight}>
          RIGHT
        </button>
      </div>
    </animated.div>
  );
}

export default Slider;
