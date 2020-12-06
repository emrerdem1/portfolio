import React, { useEffect, useRef } from "react";
import { Whereabouts, Education, Hobby, Goal } from "./export_about";

const MOVE_VERTICAL_AMOUNT = 350;

export const StoryOpen = () => {
  const scrollToStory = useRef(null);

  useEffect(
    () =>
      window.scrollTo({
        top: scrollToStory.current.offsetTop + MOVE_VERTICAL_AMOUNT,
        left: 0,
        behavior: "smooth",
      }),
    []
  );

  return (
    <div className="story-open" ref={scrollToStory}>
      <h2>Memoir</h2>
      <Whereabouts />
      <Education />
      <Hobby />
      <Goal />
    </div>
  );
};
