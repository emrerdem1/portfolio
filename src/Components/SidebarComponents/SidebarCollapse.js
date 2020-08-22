import React from "react";

export const SidebarCollapse = ({ isOpen, setOpen }) => {
  const handleCollapse = (e) => {
    e.preventDefault();
    return setOpen(!isOpen);
  };

  return (
    <a href="#" alt="collapse">
      <div
        className="col-2 d-flex align-items-center  sidebar-collapse-section"
        onClick={handleCollapse}
      >
        <div className="sidebar-item collapse-text" title="Collapse">
          <i className="fas fa-angle-double-up"></i>
        </div>
      </div>
    </a>
  );
};
