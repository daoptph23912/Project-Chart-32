import React from "react";
import {
  IconDrd,
  IconSearch,
  LogoAcc,
  ModeLight,
  ModeDark,
} from "../../../assets/icons/indexIcons";
import "./index.scss";

export const Header = ({ toggleTheme, theme }) => {
  return (
    <>
      <div className="header-container">
        <div className="header-text">
          <p className="text-size">Dashboard</p>
          <p>Advanced Quarry</p>
          <p>Events</p>
        </div>

        <IconSearch />

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
