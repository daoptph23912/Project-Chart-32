import {
  BgrMsg,
  IconBitcoin,
  IconBitcoin2,
  IconBitcoin3,
  Image1,
  Menu,
} from "../../../assets/icons/indexIcons";
import "./index.scss";
export const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container">
        <Menu />
        <div className="icon-bitcoin">
          <IconBitcoin />
          <IconBitcoin2 />
          <IconBitcoin3 />
        </div>
        <div className="icon-image">
          <Image1 />
        </div>
        <BgrMsg className="icon-msg" />
      </div>

      <p className="divider-vertical"></p>
    </>
  );
};
