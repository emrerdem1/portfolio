import React, { useContext } from 'react';
import useFirestoreDoc from 'Components/common/hooks/useFirestoreDoc';
import { Link } from 'react-scroll';
import { SidebarContext } from '../../App';
import { CollectionNames } from 'Components/common/utils/firebaseHelper';

export const SidebarItems = () => {
  const { isSidebarOpen } = useContext(SidebarContext);
  const { docs: resume } = useFirestoreDoc({
    collectionName: CollectionNames.RESUME,
  });

  return (
    <>
      <Link
        to="intro-section"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="sidebarItemContainer"
      >
        <div className="col-2 d-flex align-items-center sidebarItemWrapper sidebar-entrance">
          <div className="sidebar-item" title="Entrance">
            <i className="fab fa-fort-awesome-alt sidebarIcon">
              {isSidebarOpen && <span className="sidebar-span">Entrance</span>}
            </i>
          </div>
        </div>
      </Link>
      <Link
        to="about-section"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="sidebarItemContainer"
      >
        <div className="col-2 d-flex align-items-center sidebarItemWrapper sidebar-mainhall">
          <div className="sidebar-item" title="Main Hall">
            <i className="fas fa-mug-hot sidebarIcon">
              {isSidebarOpen && <span className="sidebar-span">Main Hall</span>}
            </i>
          </div>
        </div>
      </Link>

      <Link
        to="contact-section"
        spy={true}
        smooth={true}
        offset={180}
        duration={500}
        className="sidebarItemContainer"
      >
        <div className="col-2 d-flex align-items-center sidebarItemWrapper sidebar-briefing">
          <div className="sidebar-item" title="Contact">
            <i className="fas fa-envelope sidebarIcon">
              {isSidebarOpen && <span className="sidebar-span">Contact</span>}
            </i>
          </div>
        </div>
      </Link>

      <Link
        to="social-links"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="sidebarItemContainer"
      >
        <div className="col-2 d-flex align-items-center sidebarItemWrapper sidebar-social">
          <div className="sidebar-item" title="Socials">
            <i className="fas fa-hashtag sidebarIcon">
              {isSidebarOpen && <span className="sidebar-span">Socials</span>}
            </i>
          </div>
        </div>
      </Link>
      <a
        href={resume[0] && resume[0]?.url}
        alt="resume"
        target="_blank"
        rel="noopener noreferrer"
        className="sidebarItemContainer"
      >
        <div
          className="col-2 d-flex align-items-center sidebarItemWrapper sidebar-contact"
          style={{ margin: 'auto 0 20px 0' }}
        >
          <div className="sidebar-item" title="Resume">
            <i className="fas fa-file-contract sidebarIcon">
              {isSidebarOpen && <span className="sidebar-span">CV</span>}
            </i>
          </div>
        </div>
      </a>
    </>
  );
};
