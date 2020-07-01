import React from "react";

export const Sidebar = () => {
  return (
    <div
      className="row col-xl-1 col-lg-1 col-md-2 d-flex flex-column"
      id="sidebar"
    >
      <div className="col-2 d-flex align-items-center">
        <div className="sidebar-item">logo</div>
      </div>
      <div className="col-2 d-flex align-items-center">
        <div className="sidebar-item">a</div>
      </div>
      <div className="col-2 d-flex align-items-center">
        <div className="sidebar-item">b</div>
      </div>
      <div className="col-2 d-flex align-items-center">
        <div className="sidebar-item">c</div>
      </div>
      <div className="col-2 d-flex align-items-center">
        <div className="sidebar-item">resume</div>
      </div>
    </div>
  );
};
