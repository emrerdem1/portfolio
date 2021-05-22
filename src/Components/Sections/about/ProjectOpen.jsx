import React, { useEffect, useRef } from 'react';
import { PROJECTS } from './Project.constants';

const MOVE_VERTICAL_AMOUNT = 350;

export const ProjectOpen = () => {
  const scrollToProject = useRef(null);

  useEffect(
    () =>
      window.scrollTo({
        top: scrollToProject.current.offsetTop + MOVE_VERTICAL_AMOUNT,
        left: 0,
        behavior: 'smooth',
      }),
    []
  );

  const projectBlock = PROJECTS.map((project, index) => (
    <div className="projectItemsContainer row" key={project.title + index}>
      <h3 className="projectTitleName col-12">{project.title}</h3>
      <div className="projectMain col-12">
        <div className="col-12 col-xl-5 col-lg-5 col-md-12 col-sm-12 projectImgWrapper">
          <div className={`projectImg ${project.title}`}></div>
          <div className="anchorGroup">
            <a href={project.demoLink} title="Demo" className="anchorDemo">
              Demo
            </a>
            <a href={project.repoLink} title="Repo" className="anchorRepo">
              Repo
            </a>
          </div>
        </div>
        <div className="col-12 col-xl-7 col-lg-7 col-md-12 col-sm-12 projectDetail">
          <span className="svg-description">{project.description}</span>
          <span className="svg-tools">{project.tools}</span>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="project-open" ref={scrollToProject}>
      <h2 className="col-12 projectGeneralTitle">The Projects</h2>
      <div className="col-12 project-open__wrapper">{projectBlock}</div>
    </div>
  );
};
