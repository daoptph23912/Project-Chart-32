import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/features/header";
import { Sidebar } from "../components/features/sidebar";
import "./main.scss";

export const MainLayout = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`main-layout ${theme}`}>
      <Sidebar className="sidebar" />
      <div className="wrap-container">
        <Header toggleTheme={toggleTheme} theme={theme} className="header" />

        <div className="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
