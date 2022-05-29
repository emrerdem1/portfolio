import React from 'react';

const Projects = ({ projects }) =>
  projects.map((project) => (
    <div
      className="projectItemsContainer row"
      key={project.title + project.order}
    >
      <h3 className="projectTitleName col-12">{project.title}</h3>
      <div className="projectMain col-12">
        <div className="col-12 col-xl-5 col-lg-5 col-md-12 col-sm-12 projectImgWrapper">
          <div className={`projectImg ${project.title}`}></div>
          <div className="anchorGroup">
            <a href={project.links.demo} title="Demo" className="anchorDemo">
              Demo
            </a>
            <a
              href={project.links.repository}
              title="Repo"
              className="anchorRepo"
            >
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

export default Projects;
