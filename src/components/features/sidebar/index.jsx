import React, { useState } from "react";
import {
  IconBitcoin,
  IconBitcoin2,
  IconBitcoin3,
  Menu,
} from "../../../assets/icons/indexIcons";
import { MenuOutlined } from "@ant-design/icons";
import "./index.scss";
import IconMenu from "./menuIcon";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
        <Menu />
        {/* <MenuOutlined className="menu-icon" onClick={toggleSidebar} /> */}
        {!collapsed && (
          <>
            <div className="icon-bitcoin">
              <IconBitcoin />
              <IconBitcoin2 />
              <IconBitcoin3 />
            </div>
            <IconMenu />
          </>
        )}
      </div>

      <p className="divider-vertical"></p>
    </>
  );
};
