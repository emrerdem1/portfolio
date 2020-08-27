import React, { useEffect, useRef } from "react";
import { Whereabouts, Education, Hobby, Goal } from "./export_about";

const MOVE_VERTICAL_AMOUNT = 350;

export const StoryOpen = () => {
  const scrollToThis = useRef(null);

  useEffect(
    () =>
      window.scrollTo({
        top: scrollToThis.current.offsetTop + MOVE_VERTICAL_AMOUNT,
        left: 0,
        behavior: "smooth",
      }),
    []
  );

  return (
    <div className="story-open" ref={scrollToThis}>
      <h2>Here's all about you need to know about me!</h2>
      <Whereabouts />
      <Education />
      <Hobby />
      <Goal />
    </div>
  );
};
