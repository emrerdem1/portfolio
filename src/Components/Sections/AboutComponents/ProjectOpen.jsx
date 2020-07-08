import React from "react";

export const ProjectOpen = () => {
  return (
    <div className="project-open">
      <h2 className="col-12">Check out the project I have done so far here!</h2>
      <div className="col-11 project-open__single">
        <h3 className="col-12">MadLibs</h3>
        <div className="project-open__single--madlibs">
          <div className="project-open__single--madlibs-svg">
            <span className="svg-description"></span>
            <span className="svg-tools"></span>
          </div>
          <div className="project-open__single--madlibs-anchor">
            <a href="#" title="Demo"></a>
            <a href="#" title="Repo"></a>
          </div>
        </div>
        <span className="project-description"></span>
      </div>
      <div className="col-11 project-open__single">
        <h3 className="col-12">Movie</h3>
        <div className="project-open__single--movie">
          <div className="project-open__single--movie-svg">
            <span className="svg-description"></span>
            <span className="svg-tools"></span>
          </div>
          <div className="project-open__single--movie-anchor">
            <a href="#" title="Demo"></a>
            <a href="#" title="Repo"></a>
          </div>
        </div>
        <span className="project-description"></span>
      </div>
      <div className="col-11 project-open__single">
        <h3 className="col-12">Board</h3>
        <div className="project-open__single--board">
          <div className="project-open__single--board-svg">
            <span className="svg-description"></span>
            <span className="svg-tools"></span>
          </div>
          <div className="project-open__single--board-anchor">
            <a href="#" title="Demo"></a>
            <a href="#" title="Repo"></a>
          </div>
        </div>
        <span className="project-description"></span>
      </div>
    </div>
  );
};
