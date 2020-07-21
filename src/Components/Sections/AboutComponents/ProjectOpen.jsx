import React from "react";

export const ProjectOpen = () => {
  return (
    <div className="project-open">
      <h2 className="col-12">Check out the project I have done so far!</h2>
      <div className="col-11 project-open__single">
        <h3 className="col-12">MadLibs</h3>
        <div className="project-open__single--madlibs">
          <div className="project-open__single--madlibs-svg">
            <span className="svg-description">
              Write out a full story that is processed into a format that will
              allow the one to keep track of "blanks". Whenever the user updates
              a blank in the edit view, it should update the preview any time a
              new character is typed.
            </span>
            <span className="svg-tools">HTML, CSS, Vanilla JS</span>
          </div>
          <div className="project-open__single--madlibs-anchor">
            <a href="https://madlibs-project.netlify.app/" title="Demo" target="_blank"></a>
            <a href="https://github.com/emrerdem1/MadLibs-Project" title="Repo" target="_blank"></a>
          </div>
        </div>
      </div>
      <div className="col-11 project-open__single">
        <h3 className="col-12">Movie</h3>
        <div className="project-open__single--movie">
          <div className="project-open__single--movie-svg">
            <span className="svg-description">
              Do the styling of Single Movie Page that is fetched from The Movie
              DB API and build functionalities to move from Movie Page to Actor
              Page with necessary fields getting filled. Do the search and
              sorting based on names, get recommendation and trailer section by
              using API.
            </span>
            <span className="svg-tools">
              HTML, CSS, Bootstrap, Postman, Vanilla JS
            </span>
          </div>
          <div className="project-open__single--movie-anchor">
            <a href="#" title="Demo" target="_blank"></a>
            <a href="https://github.com/emrerdem1/bootcamp-istanbul-2020mar/tree/master/movie-project/Maher-Emre" title="Repo" target="_blank"></a>
          </div>
        </div>
      </div>
      <div className="col-11 project-open__single">
        <h3 className="col-12">Board</h3>
        <div className="project-open__single--board">
          <div className="project-open__single--board-svg">
            <span className="svg-description">
              Build a ToDo Board that users can schedule their tasks. Users can
              create custom boards with unlimited amount of tasks within, move
              the position of boards freely, change tasks status by clicking and
              sorting boards to one's heart's content.
            </span>
            <span className="svg-tools">
              HTML, CSS, React-Bootstrap, Material UI, ReactJS, Firebase
            </span>
          </div>
          <div className="project-open__single--board-anchor">
            <a href="https://todo-board-project.netlify.app/" title="Demo" target="_blank"></a>
            <a href="https://github.com/emrerdem1/ToDo-BoardProject" title="Repo" target="_blank"></a>
          </div>
        </div>
      </div>
    </div>
  );
};
