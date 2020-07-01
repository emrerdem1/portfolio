import React from "react";
import { IntroSection } from "./Sections/IntroSection";
import { Contact } from "./Sections/Contact";
import { AboutMemoryProject } from "./Sections/AboutMemoryProject";

export const HomePage = () => {
  return (
    <>
      <IntroSection />
      <AboutMemoryProject />
      <Contact />
    </>
  );
};
