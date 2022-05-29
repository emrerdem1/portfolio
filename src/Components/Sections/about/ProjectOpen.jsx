import React, { useEffect, useRef } from 'react';

const MOVE_VERTICAL_AMOUNT = 350;

export const ProjectOpen = ({ children }) => {
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

  return (
    <div className="project-open" ref={scrollToProject}>
      <h2 className="col-12 projectGeneralTitle">The Projects</h2>
      <div className="col-12 project-open__wrapper">{children}</div>
    </div>
  );
};
