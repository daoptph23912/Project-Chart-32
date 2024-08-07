import {
  IconDrd,
  IconSearch,
  LogoAcc,
  ModeLight,
} from "../../../assets/indexIcons";
import "../../../assets/styles/styleHeader/index.scss";
export const Header = () => {
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
          <ModeLight />
        </div>
      </div>
      <div className="divider-horizontal"></div>
    </>
  );
};
