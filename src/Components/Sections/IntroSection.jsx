import React from "react";
import { SvgContainer } from "./SvgContainer";

export const IntroSection = () => {
  return (
    <div className="row" id="intro-section">
      <div className="col-6 intro-box">
        <h2>Hi there! I'm Emre!</h2>
        <p>
          A <span className="webdeveloper">web developer</span> who is fond of
          coding, lifelong learning and petting stray cats! I do build aesthetic
          and useful websites and applications!
        </p>
        <div className="intro-box__buttons">
          <a href="#" title="Learn More">
            Learn More
          </a>
          <a href="#" title="View Resume">
            View Resume
          </a>
        </div>
      </div>
      <div className="offset-1"></div>
      <div className="col-4 avatar-container">
        <div className="avatar"></div>
        <i className="fas fa-hands"></i>
      </div>
      <SvgContainer />
    </div>
  );
};
