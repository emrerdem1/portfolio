import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "story":
      return { ...state, story: !state.story };

    case "memory":
      return { ...state, memory: !state.memory };

    case "project":
      return { ...state, project: !state.project };

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
        <div className="col mx-4" onClick={() => invokeReducer("story")}>
          {story ? (
            <i className="fas fa-cookie"></i>
          ) : (
            <i className="fas fa-cookie-bite"></i>
          )}
        </div>
        <div className="col mx-4" onClick={() => invokeReducer("memory")}>
          {memory ? (
            <i className="fas fa-holly-berry"></i>
          ) : (
            <i className="fas fa-holly-berry"></i>
          )}
        </div>
        <div className="col mx-4" onClick={() => invokeReducer("project")}>
          {project ? (
            <i className="fab fa-stack-overflow"></i>
          ) : (
            <i className="fab fa-stack-overflow"></i>
          )}
        </div>
      </div>
    </div>
  );
};
