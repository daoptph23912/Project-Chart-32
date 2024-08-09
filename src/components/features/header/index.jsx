import React from "react";
import {
  IconDrd,
  LogoAcc,
  ModeLight,
  ModeDark,
} from "../../../assets/icons/indexIcons";
import "./index.scss";
import Search from "antd/es/transfer/search";

export const Header = ({ toggleTheme, theme }) => {
  return (
    <>
      <div className="header-container">
        <div className="header-text">
          <p className="text-size">Dashboard</p>
          <p>Advanced Quarry</p>
          <p>Events</p>
        </div>

        <div className="header-search">
          {/* <IconSearch /> */}
          <Search className="icon-search" placeholder="Search..." />
        </div>

        <div className="header-account">
          <p className="text-size">Bessie Cooper</p>
          <LogoAcc />
          <IconDrd />
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
