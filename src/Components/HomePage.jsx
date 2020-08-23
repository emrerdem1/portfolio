import React from "react";
import { IntroSection } from "./Sections/intro/IntroSection";
import { Contact } from "./Sections/contact/Contact";
import { AboutMemoryProject } from "./Sections/about/AboutMemoryProject";
import { SocialLinks } from "./Sections/SocialLinks";

export const HomePage = () => {
  return (
    <div
      id="homepage"
      className="col-xl-11 col-lg-11 col-md-10 col-sm-10 col-xs-12"
    >
      <IntroSection />
      <AboutMemoryProject />
      <Contact />
      <SocialLinks />
    </div>
  );
};
