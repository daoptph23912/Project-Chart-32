import {
  ChamThan,
  ChartCuoi,
  IconBaCham,
  IconCong,
  IconLich,
  IconSocial,
  IconText,
  ImageTong,
  WubinDesign,
} from "../../../assets/indexIcons";
import "../../../assets/styles/styleMain/index.scss";
import image1 from "../../../assets/images/logoImage.png";
import { LineChart } from "../../common/chart/lineChart";
import { PieChart } from "../../common/chart/pieChart";
export const Main = () => {
  return (
    <>
      <div className="main-container">
        <div className="left-main">
          <div className="text-main-left">
            <p>DASHBOARD</p>
            <IconText />
            <p>BITFOREX.COM</p>
          </div>
          <div className="text-main-left-two">
            <WubinDesign />
            <p>wubin.design</p>
            <IconCong />
          </div>
          <div className="text-main-left-total">
            <p className="text-total-visit">Total visits</p>
            <ChamThan />
          </div>
          <div className="text-main-left-three">
            <p>Provisions Month</p>
            <IconLich />
            <IconBaCham />
          </div>
          <LineChart />
          <div style={{ display: "flex", gap: "450px" }}>
            <div className="text-main-left-total">
              <p className="text-total-visit">Perpetual</p>
              <ChamThan />
            </div>
            <div className="text-main-left-total">
              <p className="text-total-visit">Active Percentage</p>
              <ChamThan />
            </div>
          </div>
          <PieChart />
        </div>
        <div className="right-main">
          <div className="text-main-left-total">
            <p className="text-total-visit">Superiority</p>
            <ChamThan />
          </div>
          <img className="image-lon" src={image1} alt="" />
          <div className="text-icon-social">
            <IconSocial />
            <p>Social Trading Platform</p>
          </div>
          <ImageTong />
          <div className="text-main-left-total">
            <p className="text-total-visit">My Income</p>
            <ChamThan />
          </div>
          <ChartCuoi />
        </div>
      </div>
    </>
  );
};
