import { Header } from "../components/features/header";
import { Sidebar } from "../components/features/sidebar";
import "./main.scss";
import { Main } from "../components/features/main";

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <Sidebar className="sidebar" />
      <div className="wrap-container">
        <Header className="header" />
        <div className="main">
          <Main />
        </div>
      </div>
    </div>
  );
};
