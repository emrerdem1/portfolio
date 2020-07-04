import React, { useReducer } from "react";
import {
  StoryOpen,
  MemoryOpen,
  ProjectOpen,
} from "./AboutComponents/export_about";

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
    <div className="container" id="about-section">
      <div className="row d-flex flex-wrap justify-content-center align-items-center mx-0">
        <div className="col-12 about-greetings">
          <h2 className="about-greetings__title">
            Want to know <span>a bit more</span> about me?
          </h2>
          <p className="about-greetings__text">
            Here's the brief summary of who I am and what I've been doing!
          </p>
        </div>
        <div
          className="col mx-4 main-hall__icons"
          onClick={() => invokeReducer("story")}
        >
          <i className="fas fa-cookie"></i>
        </div>
        <div
          className="col mx-4 main-hall__icons"
          onClick={() => invokeReducer("memory")}
        >
          <i className="fas fa-holly-berry"></i>
        </div>
        <div
          className="col mx-4 main-hall__icons"
          onClick={() => invokeReducer("project")}
        >
          <i className="fab fa-stack-overflow"></i>
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