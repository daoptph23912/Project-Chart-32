import React from "react";
import "./index.scss";

const ChartInfo = ({ data }) => {
  const getRgbaColor = (opacity) => {
    return `rgba(116, 89, 217, ${opacity})`;
  };
  return (
    <div className="chartInfo">
      {data.map((item, index) => (
        <div key={index} className="infoItem">
          <div className="wrap-label-cham">
            <span
              className="infoColor"
              style={{
                backgroundColor: getRgbaColor(1 - index * 0.3),
              }}
            ></span>
            <span className="infoLabel">{item.label}</span>
          </div>
          <span className="infoValue">{item.value.toLocaleString()} users</span>
        </div>
      ))}
    </div>
  );
};

export default ChartInfo;
