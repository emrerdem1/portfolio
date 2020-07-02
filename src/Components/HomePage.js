import React from "react";
import { IntroSection } from "./Sections/IntroSection";
import { Contact } from "./Sections/Contact";
import { AboutMemoryProject } from "./Sections/AboutMemoryProject";

export const HomePage = () => {
  return (
    <div
      id="homepage"
      className="col-xl-11 col-lg-11 col-md-10 offset-xl-1 offset-lg-1 offset-2"
    >
      <IntroSection />
      <AboutMemoryProject />
      <Contact />
    </div>
  );
};
