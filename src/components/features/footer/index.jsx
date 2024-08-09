import { IconSocial, ImagePie } from "../../../assets/icons/indexIcons";
import { TextCham } from "../../common/text/textCham";
import image1 from "../../../assets/images/logoImage.png";
import "../../../pages/dashboard/index.scss";
import SocialTradingList from "./socialTrading";
import DoughnutChart from "./pieChartFooter";
export const Footer = () => {
  return (
    <div className="right-main">
      <TextCham text="Superiority" />
      <img className="image-lon" src={image1} alt="" />
      <div className="text-icon-social">
        <IconSocial />
        <p>Social Trading Platform</p>
      </div>
      <SocialTradingList />
      <TextCham text="My Income" />
      <DoughnutChart percentage={46} legendText="Legend" change={25} />
    </div>
  );
};
