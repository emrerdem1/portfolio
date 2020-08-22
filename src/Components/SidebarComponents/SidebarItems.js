import React from "react";
import { Link } from "react-scroll";

export const SidebarItems = ({ isOpen, setOpen }) => {
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
        <div className="col-2 d-flex align-items-center sidebar-entrance">
          <div className="sidebar-item" title="Entrance">
            <i className="fab fa-fort-awesome-alt sidebarIcon">
              {isOpen && <span className="sidebar-span">Entrance</span>}
            </i>{" "}
          </div>
        </div>
      </Link>
      <Link
        to="about-section"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="sidebarItemContainer"
      >
        <div className="col-2 d-flex align-items-center sidebar-mainhall">
          <div className="sidebar-item" title="Main Hall">
            <i className="fas fa-mug-hot sidebarIcon">
              {isOpen && <span className="sidebar-span">Main Hall</span>}
            </i>
          </div>
        </div>
      </Link>

      <Link
        to="contact-section"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="sidebarItemContainer"
      >
        <div className="col-2 d-flex align-items-center sidebar-briefing">
          <div className="sidebar-item" title="Briefing Room">
            <i className="fas fa-envelope sidebarIcon">
              {isOpen && <span className="sidebar-span">Briefing Room</span>}
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
        <div className="col-2 d-flex align-items-center sidebar-social">
          <div className="sidebar-item" title="Socials">
            <i className="fas fa-hashtag sidebarIcon">
              {isOpen && <span className="sidebar-span">Socials</span>}
            </i>
          </div>
        </div>
      </Link>
      <a
        href="https://drive.google.com/file/d/1XJtv2TdBuCnwXA7IUpwt2CSqRIncnU2Z/view?usp=sharing"
        alt="resume"
        target="_blank"
        rel="noopener noreferrer"
        className="sidebarItemContainer"
      >
        <div
          className="col-2 d-flex align-items-center sidebar-contact"
          style={{ margin: "auto 0 20px 0" }}
        >
          <div className="sidebar-item" title="Resume">
            <i className="fas fa-file-contract sidebarIcon">
              {isOpen && <span className="sidebar-span">CV</span>}
            </i>
          </div>
        </div>
      </a>
    </>
  );
};
