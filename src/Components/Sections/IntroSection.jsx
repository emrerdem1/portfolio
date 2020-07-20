import React from "react";
import { SvgContainer } from "./SvgContainer";
import { Link } from "react-scroll";

export const IntroSection = () => {
  return (
    <div className="row" id="intro-section">
      <div className="col-6 intro-box">
        <h2>
          Emre Erdem
          <br />
          <span className="junior-dev">Junior Web Developer</span>
        </h2>
        <p>
          A <span className="webdeveloper">web developer</span> who is fond of
          coding, lifelong learning and petting stray cats! I do build aesthetic
          and useful websites and applications!
        </p>
        <div className="intro-box__buttons">
          <div className="view-more">
            <Link
              to="about-section"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              title="Learn More"
            >
              Learn More
            </Link>
          </div>
          <div className="view-resume">
            <a
              href="https://drive.google.com/file/d/1XJtv2TdBuCnwXA7IUpwt2CSqRIncnU2Z/view?usp=sharing"
              title="View Resume"
            >
              View Resume
            </a>
          </div>
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
