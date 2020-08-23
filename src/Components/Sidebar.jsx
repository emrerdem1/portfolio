import React from "react";

import { SidebarCollapse } from "./SidebarComponents/SidebarCollapse";
import { SidebarItems } from "./SidebarComponents/SidebarItems";

export const Sidebar = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div
      className={`row col-xl-1 col-lg-1 col-md-2 col-sm-2 col-xs-12 d-flex flex-column ${
        isOpen ? "sidebar-open" : ""
      }`}
      id="sidebar"
    >
      <SidebarCollapse isOpen={isOpen} setOpen={setOpen} />
      <SidebarItems isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};
