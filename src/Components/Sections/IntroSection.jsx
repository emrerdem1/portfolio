import React from "react";
import { SvgContainer } from "./SvgContainer";

export const IntroSection = () => {
  return (
    <div className="row" id="intro-section">
      <div className="col-6 intro-box">
        <h2>Hi there! I'm Emre!</h2>
        <p>
          I'm a <span className="webdeveloper">web developer</span> who is fond
          of coding, lifelong learning and petting stray cats! Please check out
          my portfolio first and let me know if you think we can work together
          in the future!
        </p>
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
