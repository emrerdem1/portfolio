import React from "react";
import { Whereabouts, Education, Hobby, Goal } from "./export_about";

export const StoryOpen = () => {
  return (
    <div className="story-open">
      <h2>Here's all about you need to know about me!</h2>
      <Whereabouts />
      <Education />
      <Hobby />
      <Goal />
    </div>
  );
};
