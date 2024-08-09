import {
  IconBaCham,
  IconCong,
  IconLich,
  IconText,
  WubinDesign,
} from "../../assets/icons/indexIcons";
import "./index.scss";
import { LineChart } from "../../components/common/chart/lineChart/lineChart";
import { TextCham } from "../../components/common/text/textCham";
import { PieChart } from "../../components/common/chart/pieChart/pieChartt";
import { ProgressChart } from "../../components/common/chart/progressChart";
import { Footer } from "../../components/features/footer";
import { useState } from "react";
import { DatePicker } from "antd";
export const DashBoard = () => {
  const [showElements, setShowElements] = useState(true);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleToggleElements = () => {
    setShowElements(!showElements);
  };
  const handleToggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  return (
    <div className="main-container">
      <div className="left-main">
        <div className="text-main-left">
          <p onClick={handleToggleElements} className="clickable-icon">
            DASHBOARD
          </p>
          <IconText />
          <p className="click-bitforex">
            BITFOREX.COM
          </p>
        </div>

        <div className="text-main-left-two">
          <WubinDesign />
          <p>wubin.design</p>
          <IconCong onClick={handleToggleElements} className="clickable-icon" />
        </div>

        <div className="text-total-lich">
          <TextCham text="Total visits" />
          <div className="text-main-left-three">
            <p className="color-lich"></p>
            <p> Provisions Month</p>
            <IconLich
              onClick={handleToggleDatePicker}
              className="clickable-icon"
            />
            {showDatePicker && <DatePicker className="date-picker" />}{" "}
            <IconBaCham
              onClick={handleToggleElements}
              className="clickable-icon"
            />
          </div>
        </div>
        <LineChart />

        <div className="container-chart">
          <div className="chart-pie-progress">
            <TextCham text="Perpetual" />
            <PieChart />
          </div>
          <div className="chart-pie-progress">
            <TextCham text="Active Percentage" />
            <ProgressChart />
          </div>
        </div>
      </div>

        <Footer />
    </div>
  );
};
