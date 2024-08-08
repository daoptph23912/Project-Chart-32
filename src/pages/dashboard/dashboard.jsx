import {
  ImagePie,
  IconBaCham,
  IconCong,
  IconLich,
  IconSocial,
  IconText,
  ImageGGB,
  WubinDesign,
} from "../../assets/icons/indexIcons";
import "./index.scss";
import image1 from "../../assets/images/logoImage.png";
import { LineChart } from "../../components/common/chart/lineChart/lineChart";
import { TextCham } from "../../components/common/text/textCham";
import { PieChart } from "../../components/common/chart/pieChart/pieChartt";
import  {ProgressChart}  from "../../components/common/chart/progressChart";
export const DashBoard = () => {
  return (
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

        <TextCham text="Total visits" />
        <div className="text-main-left-three">
          <p>Provisions Month</p>
          <IconLich />
          <IconBaCham />
        </div>

        <LineChart />
        <div className="text-active-per">
          <TextCham text="Perpetual" />
          <TextCham text="Active Percentage" />
        </div>
        <div className="container-chart">
          <PieChart/>
          <ProgressChart/>
        </div>
      </div>

      <div className="right-main">
        <TextCham text="Superiority" />
        <img className="image-lon" src={image1} alt="" />
        <div className="text-icon-social">
          <IconSocial />
          <p>Social Trading Platform</p>
        </div>

        <ImageGGB />
        <TextCham text="My Income" />
        <ImagePie />
      </div>
    </div>
  );
};
