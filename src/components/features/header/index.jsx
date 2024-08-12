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
          <p style={{ color: "rgba(208, 209, 210, 1)" }}>Advanced Quarry</p>
          <p style={{ color: "rgba(208, 209, 210, 1)" }}>Events</p>
        </div>

        <div className="header-search">
          <IconSearch />
          {/* <Search className="icon-search" placeholder="Search..." /> */}
        </div>

        <div className="header-account">
          <p className="text-size-bessie">Bessie Cooper</p>
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
