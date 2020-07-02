import React from "react";
import { Link } from "react-scroll";

export const SidebarCollapse = ({ isOpen, setOpen }) => {
  return (
    <Link to="intro-section" spy={true} smooth={true} offset={0} duration={500}>
      <div
        className="col-2 d-flex align-items-center  sidebar-collapse-section"
        onClick={() => setOpen(!isOpen)}
      >
        <div className="sidebar-item collapse-text" title="Collapse">
          <i className="fas fa-angle-double-up">
            {isOpen && <span className="sidebar-span"></span>}
          </i>
        </div>
      </div>
    </Link>
  );
};
