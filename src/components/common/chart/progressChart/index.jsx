import React from "react";
import sourceData from "../../../../data/sourceData.json";
import "./index.scss";
import DetailData from "./infoChart";

const filteredData = sourceData.slice(3, 5);
const totalUsers = filteredData.reduce((sum, data) => sum + data.value, 0);

const getRgbaColor = (opacity) => `rgba(116, 89, 217, ${opacity})`;

export const ProgressChart = () => {
  const onlineUsers = filteredData.find(
    (data) => data.label === "Online"
  ).value;
  const onlinePercent = (onlineUsers / totalUsers) * 100;

  return (
    <div className="progressContainer">
      <div className="totalCount">
        <p style={{ fontSize: "30px", fontWeight: 700, lineHeight: "46px" }}>
          {totalUsers}
        </p>
        <p className="text-total-line">Total</p>
      </div>

      <div className="progressBar">
        <div
          className="progressFill1"
          style={{
            width: `${onlinePercent}%`,
            backgroundColor: getRgbaColor(1.8),
          }}
        />
        <div
          className="progressFill2"
          style={{
            width: `${100 - onlinePercent}%`,
            backgroundColor: getRgbaColor(0.2),
          }}
        />
      </div>

      <DetailData data={filteredData} />
    </div>
  );
};
