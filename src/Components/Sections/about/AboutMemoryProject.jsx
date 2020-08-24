import React, { useReducer } from "react";
import { StoryOpen, MemoryOpen, ProjectOpen } from "./export_about";

function reducer(state, action) {
  switch (action.type) {
    case "story":
      return { story: !state.story, memory: false, project: false };

    case "memory":
      return { memory: !state.memory, story: false, project: false };

    case "project":
      return { project: !state.project, memory: false, story: false };

    default:
      return state;
  }
}

export const AboutMemoryProject = () => {
  const [{ story, memory, project }, dispatch] = useReducer(reducer, {
    story: false,
    memory: false,
    project: false,
  });

  const invokeReducer = (section) => dispatch({ type: section });

  return (
    <div
      className={`container ${story || memory || project ? "opened" : ""}`}
      id="about-section"
    >
      <div className="row d-flex flex-wrap justify-content-center align-items-center mx-0">
        <div className="col-12 about-greetings">
          <h2 className="about-greetings__title">
            Want to know <span>a bit more</span> about me?
          </h2>
          <p className="about-greetings__text">
            The brief summary of who I am and what I've been doing!
          </p>
        </div>
        <div
          className="col-xl-4 col-lg-3 col-md-5 col-sm-12 col-xs-10 main-hall__icons"
          onClick={() => invokeReducer("story")}
        >
          <svg className="main-hall__icons--story"></svg>
        </div>
        <div
          className="col-xl-4 col-lg-5 col-md-7 col-sm-12 col-xs-10 main-hall__icons projectIcon"
          onClick={() => invokeReducer("project")}
        >
          <svg className="main-hall__icons--project"></svg>
        </div>
        <div
          className="col-xl-4 col-lg-3 col-md-12 col-sm-12 col-xs-10 main-hall__icons"
          onClick={() => invokeReducer("memory")}
        >
          <svg className="main-hall__icons--memory"></svg>
        </div>
      </div>
      {story ? (
        <StoryOpen />
      ) : memory ? (
        <MemoryOpen />
      ) : (
        project && <ProjectOpen />
      )}
    </div>
  );
};
