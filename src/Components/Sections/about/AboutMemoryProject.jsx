import useFirestoreDoc from 'Components/common/hooks/useFirestoreDoc';
import { CollectionNames } from 'Components/common/utils/firebaseHelper';
import React, { useReducer, useEffect, useRef } from 'react';
import { StoryOpen, ProjectOpen } from './export_about';
import Projects from './Projects';

const MOVE_VERTICAL_TO_MEMORY = 276;
const MOVE_TO_START_OF_SECTION = -70;
const INITIAL_TOGGLE_STATE = {
  story: false,
  memory: false,
  project: false,
  neutral: true,
};

const Sections = {
  STORY: 'STORY',
  PROJECT: 'PROJECT',
  MEMORY: 'MEMORY',
};

const elementToScroll = (ref, position) =>
  window.scrollTo({
    top: ref.current.offsetTop + position,
    left: 0,
    behavior: 'smooth',
  });

function reducer(state, action) {
  switch (action.type) {
    case Sections.STORY:
      return {
        story: !state.story,
        memory: false,
        project: false,
      };

    case Sections.MEMORY:
      return {
        memory: !state.memory,
        story: false,
        project: false,
      };

    case Sections.PROJECT:
      return {
        project: !state.project,
        memory: false,
        story: false,
      };

    default:
      return state;
  }
}

const _getIconTransitionClassname = (isStoryActive, isProjectActive) => {
  if (!isStoryActive && !isProjectActive) return '';
  if (isStoryActive) return 'showStoryLast';
  return 'showProjectLast';
};

const _getCustomToggleClassname = ({ story, project, memory }) => {
  if (story || project) return 'opened';
  if (memory) return 'memoryOpenedClassName';
  return '';
};

export const AboutMemoryProject = () => {
  const [{ story, memory, project, neutral }, dispatch] = useReducer(
    reducer,
    INITIAL_TOGGLE_STATE
  );
  const { docs: projects } = useFirestoreDoc({
    sortBy: 'order',
    collectionName: CollectionNames.PROJECTS,
  });
  const memoryIconRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (neutral) return;
    // All sections are closed.
    if (!story && !project && !memory) {
      elementToScroll(wrapperRef, MOVE_TO_START_OF_SECTION);
      return;
    }

    if (memory) {
      elementToScroll(memoryIconRef, MOVE_VERTICAL_TO_MEMORY);
    }
  }, [story, memory, project, neutral]);

  const invokeReducer = (section) => dispatch({ type: section });

  const storyIcon = (
    <div
      className={`${_getIconTransitionClassname(
        story,
        project
      )} col-xl-4 col-lg-3 col-md-5 col-sm-12 col-xs-10 main-hall__icons storyIcon`}
      data-name={Sections.STORY}
      onClick={(e) => invokeReducer(e.currentTarget.dataset.name)}
    >
      <svg className="main-hall__icons--story"></svg>
    </div>
  );

  const projectIcon = (
    <div
      className={`${_getIconTransitionClassname(
        story,
        project
      )} col-xl-4 col-lg-5 col-md-5 col-sm-12 col-xs-10 main-hall__icons projectIcon`}
      data-name={Sections.PROJECT}
      onClick={(e) => invokeReducer(e.currentTarget.dataset.name)}
    >
      <svg className="main-hall__icons--project"></svg>
    </div>
  );

  const memoryIcon = (
    <div
      className={`${_getIconTransitionClassname(
        story,
        project
      )} col-xl-4 col-lg-4 col-md-5 col-sm-12 col-xs-10 main-hall__icons memoryIcon`}
      data-name={Sections.MEMORY}
      onClick={(e) => invokeReducer(e.currentTarget.dataset.name)}
      ref={memoryIconRef}
    >
      <div
        className={`main-hall__icons--memory ${memory ? 'memoryOpened' : ''} `}
      ></div>
    </div>
  );

  return (
    <div
      className={`${_getCustomToggleClassname({
        story,
        project,
        memory,
      })} container`}
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
      {story && <StoryOpen />}
      {project && (
        <ProjectOpen>
          <Projects projects={projects} />
        </ProjectOpen>
      )}
    </div>
  );
};
