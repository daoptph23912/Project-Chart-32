import { IconSocial, ImagePie } from "../../../assets/icons/indexIcons";
import { TextCham } from "../../common/text/textCham";
import image1 from "../../../assets/images/logoImage.png";
import "../../../pages/dashboard/index.scss";
import SocialTradingList from "./socialTrading";
import DoughnutChart from "./pieChartFooter";
export const Footer = () => {
  return (
    <div className="right-main">
      <div style={{ marginLeft: "-45px" }}>
        <TextCham text="Superiority" />
      </div>

      <img className="image-lon" src={image1} alt="" />
      <div className="text-icon-social">
        <IconSocial />
        <p>Social Trading Platform</p>
      </div>
      <SocialTradingList />
      <div style={{ marginLeft: "-45px" }}>
        <TextCham text="My Income" />
      </div>

      <DoughnutChart percentage={46} legendText="Legend" change={25} />
    </div>
  );
};
