import React from "react";
import { SvgContainer } from "./SvgContainer";

export const IntroSection = () => {
  return (
    <div className="row" id="intro-section">
      <SvgContainer />
      <div className="offset-1">
        <div></div>
      </div>
      <div className="col-4">
        <div className="avatar"></div>
        <i className="fas fa-hands"></i>
      </div>
    </div>
  );
};
