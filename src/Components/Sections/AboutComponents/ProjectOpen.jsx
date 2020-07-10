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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              sed consectetur sit praesentium explicabo ad ab iste numquam eius
              maxime sequi voluptas, dignissimos omnis suscipit accusamus
              perspiciatis ducimus adipisci maiores.
            </span>
            <span className="svg-tools">HTML, CSS, Vanilla JS</span>
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
            <span className="svg-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              reiciendis eaque rem. Repellat quas aliquam error fugit a
              recusandae beatae libero, id, et ad excepturi? Autem quia aut
              minus eos!
            </span>
            <span className="svg-tools">
              HTML, CSS, Bootstrap, Postman, Vanilla JS
            </span>
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
            <span className="svg-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nemo
              officia magnam dolor tenetur rerum earum repellendus hic repellat
              fugiat nihil, corrupti quasi aut id praesentium reprehenderit rem
              architecto laborum.
            </span>
            <span className="svg-tools">
              HTML, CSS, React-Bootstrap, Material UI, ReactJS, Firebase
            </span>
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
