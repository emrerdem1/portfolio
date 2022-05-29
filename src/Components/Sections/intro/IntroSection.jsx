import React from 'react';
import { SvgContainer } from './SvgContainer';
import { Link } from 'react-scroll';
import useFirestoreDoc from 'Components/common/hooks/useFirestoreDoc';
import { CollectionNames } from 'Components/common/utils/firebaseHelper';

export const IntroSection = () => {
  const { docs: resume } = useFirestoreDoc({
    collectionName: CollectionNames.RESUME,
  });

  const avatarContainer = (
    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6 avatar-container">
      <div className="avatar"></div>
      <i className="fas fa-hands"></i>
    </div>
  );

  const textContainer = (
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 intro-box">
      <div className="intro-box__header">
        <div className="intro-box__header--double">
          <h2 className="developerTitle">Emre Erdem</h2>
        </div>
        <div className="intro-box__header--break"></div>
        <span className="fullstack-dev">Full Stack Developer</span>
      </div>
      <p className="introText">
        A <span className="software-developer">software developer</span> who is
        fond of coding, lifelong learning and petting stray cats! And I do build
        aesthetic and useful websites and applications!
      </p>
      <div className="intro-box__buttons">
        <div className="view-more">
          <Link
            to="about-section"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            title="Learn More"
          >
            Learn More
          </Link>
        </div>
        <div className="view-resume">
          <a
            href={resume[0] && resume[0]?.url}
            title="View Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="row" id="intro-section">
      {textContainer}
      <div className="offset-1 introSeperator"></div>
      {avatarContainer}
      <SvgContainer />
    </div>
  );
};
