import React from "react";
import "./menuIcon.scss";
import {
  Menu1,
  Menu2,
  Menu3,
  Menu4,
  Menu5,
  Menu6,
} from "../../../assets/icons/indexIcons";

const IconMenu = () => {
  return (
    <div className="container-icon-menu">
      <div className="menu-msg-icon">
        <Menu1 className="sidebar-icon" />
        <Menu2 className="sidebar-icon" />
        <Menu3 className="sidebar-icon" />
        <Menu4 className="sidebar-icon" />
        <Menu5 className="sidebar-icon" />
      </div>
      <div className="menu-msg-icon-msg">
        <Menu6 className="sidebar-icon" />
      </div>
    </div>
  );
};

export default IconMenu;
