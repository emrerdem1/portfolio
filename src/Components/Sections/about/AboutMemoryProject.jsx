import React, { useReducer, useEffect, useRef } from "react";
import { StoryOpen, ProjectOpen } from "./export_about";

const MOVE_VERTICAL_TO_MEMORY = 276;
const MOVE_TO_START_OF_SECTION = -70;

const elementToScroll = (ref, position) =>
  window.scrollTo({
    top: ref.current.offsetTop + position,
    left: 0,
    behavior: "smooth",
  });

function reducer(state, action) {
  switch (action.type) {
    case "story":
      return {
        story: !state.story,
        memory: false,
        project: false,
        neutral: false,
      };

    case "memory":
      return {
        memory: !state.memory,
        story: false,
        project: false,
        neutral: false,
      };

    case "project":
      return {
        project: !state.project,
        memory: false,
        story: false,
        neutral: false,
      };

    default:
      return state;
  }
}

export const AboutMemoryProject = () => {
  const [{ story, memory, project, neutral }, dispatch] = useReducer(reducer, {
    story: false,
    memory: false,
    project: false,
    neutral: true,
  });

  const memoryIconRef = useRef(null);
  const wrapperRef = useRef(null);

  const iconTransitions = story
    ? "showStoryLast"
    : project
    ? "showProjectLast"
    : "";

  const invokeReducer = (section) => dispatch({ type: section });

  useEffect(() => {
    if (memory) {
      elementToScroll(memoryIconRef, MOVE_VERTICAL_TO_MEMORY);
    } else if (!story && !project && !memory && !neutral) {
      elementToScroll(wrapperRef, MOVE_TO_START_OF_SECTION);
    }
  }, [story, memory, project, neutral]);

  const storyIcon = (
    <div
      className={`col-xl-4 col-lg-3 col-md-5 col-sm-12 col-xs-10 main-hall__icons storyIcon ${iconTransitions}`}
      onClick={() => invokeReducer("story")}
    >
      <svg className="main-hall__icons--story"></svg>
    </div>
  );

  const projectIcon = (
    <div
      className={`col-xl-4 col-lg-5 col-md-5 col-sm-12 col-xs-10 main-hall__icons projectIcon ${iconTransitions}`}
      onClick={() => invokeReducer("project")}
    >
      <svg className="main-hall__icons--project"></svg>
    </div>
  );

  const memoryIcon = (
    <div
      className={`col-xl-4 col-lg-4 col-md-5 col-sm-12 col-xs-10 main-hall__icons memoryIcon ${iconTransitions}`}
      onClick={() => invokeReducer("memory")}
      ref={memoryIconRef}
    >
      <div
        className={`main-hall__icons--memory ${memory ? "memoryOpened" : ""} `}
      ></div>
    </div>
  );

  return (
    <div
      className={`container ${
        story || project ? "opened" : memory ? "memoryOpenedClassName" : ""
      }`}
      id="about-section"
      ref={wrapperRef}
    >
      <div className="row iconsContainer">
        <div className="col-12 about-greetings">
          <h2 className="about-greetings__title">
            Want to know <span>a bit more</span> about me?
          </h2>
          <p className="about-greetings__text">
            The brief summary of who I am and what I've been doing!
          </p>
        </div>
        {storyIcon}
        {projectIcon}
        {memoryIcon}
      </div>
      {story ? <StoryOpen /> : project && <ProjectOpen />}
    </div>
  );
};
