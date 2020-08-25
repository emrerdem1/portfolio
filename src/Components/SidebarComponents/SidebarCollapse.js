import React, { useContext } from "react";
import { SidebarContext } from "../../App";

export const SidebarCollapse = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  const handleCollapse = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div
      className="col-2 d-flex align-items-center sidebar-collapse-section"
      onClick={handleCollapse}
    >
      <div className="sidebar-item collapse-text" title="Collapse">
        <i className="fas fa-angle-double-up"></i>
      </div>
    </div>
  );
};
