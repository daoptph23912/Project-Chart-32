import React from "react";
import {
  IconDrd,
  LogoAcc,
  ModeLight,
  ModeDark,
  IconSearch,
} from "../../../assets/icons/indexIcons";
import "./index.scss";
import Search from "antd/es/transfer/search";

export const Header = ({ toggleTheme, theme }) => {
  return (
    <>
      <div className="header-container">
        <div className="header-text">
          <p className="text-size">Dashboard</p>
          <p className="text-dashboard-header">Advanced Quarry</p>
          <p className="text-dashboard-header">Events</p>
        </div>
        <hr className="way-frame" />
        <div className="header-search">
          <IconSearch />
          {/* <Search className="icon-search" placeholder="Search..." /> */}
        </div>

        <div className="header-account">
          <p className="text-size-bessie">Bessie Cooper</p>
          <LogoAcc />
          <IconDrd className="icon-dropdown" style={{ marginLeft: "-5px", marginRight: "10px" }} />
          {theme === "light" ? (
            <ModeLight onClick={toggleTheme} />
          ) : (
            <ModeDark onClick={toggleTheme} />
          )}
        </div>
      </div>

      <p className="divider-horizontal"></p>
    </>
  );
};
