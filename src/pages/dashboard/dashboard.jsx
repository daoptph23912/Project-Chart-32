import {
  IconBaCham,
  IconCong,
  IconLich,
  IconLichbe,
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
          <p className="click-bitforex">BITFOREX.COM</p>
        </div>

        <div className="text-main-left-two">
          <WubinDesign />
          <p>wubin.design</p>
          <div className="icon-cong-cuoi">
            <IconCong
              onClick={handleToggleElements}
              className="clickable-icon-cong"
            />
          </div>
        </div>

        <div className="text-total-lich">
          <TextCham text="Total visits" />
          <div className="text-main-left-three">
            <p className="color-lich"></p>
            <p
              className="provison-month"
              style={{
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "20px",
              }}
            >
              {" "}
              Provisions Month
            </p>
            <div
              className="lich-march"
              style={{
                display: "flex",
                // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "22px",
                  fontWeight: "400",
                }}
                onClick={handleToggleDatePicker}
              >
                March 2020
              </p>
              <IconLichbe />
            </div>
            {/* <IconLich
              onClick={handleToggleDatePicker}
              className="clickable-icon"
            />
            {showDatePicker && <DatePicker className="date-picker" />}{" "} */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
              className="clickable-icon11"
            >
              <IconBaCham onClick={handleToggleElements} />
            </div>
          </div>
        </div>
        <LineChart />

        <div className="container-chart">
          <div className="chart-pie-wrap">
            <TextCham text="Perpetual" />
            <PieChart />
          </div>
          <div className="chart-progress-wrap">
            <div>
              <TextCham text="Active Percentage" />
            </div>
            <ProgressChart />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
