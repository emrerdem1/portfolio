import React, { useContext } from "react";
import { SidebarContext } from "../App";
import { SidebarCollapse } from "./SidebarComponents/SidebarCollapse";
import { SidebarItems } from "./SidebarComponents/SidebarItems";

export const Sidebar = () => {
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <div
      className={`row col-xl-1 col-lg-1 col-md-2 col-sm-2 col-xs-12 d-flex flex-column ${
        isSidebarOpen ? "sidebar-open" : ""
      }`}
      id="sidebar"
    >
      <SidebarCollapse />
      <SidebarItems />
    </div>
  );
};
