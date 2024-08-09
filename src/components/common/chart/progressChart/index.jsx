import React from "react";
import { Progress } from "antd";
import sourceData from "../../../../data/sourceData.json";
import "./index.scss";
import DetailData from "./infoChart";

const filteredData = sourceData.slice(3, 5);
const totalUsers = filteredData.reduce((sum, data) => sum + data.value, 0);

export const ProgressChart = () => {
  const onlineUsers = filteredData.find(
    (data) => data.label === "Online"
  ).value;
  const onlinePercent = (onlineUsers / totalUsers) * 100;

  return (
    <div className="progressContainer">
      <div className="totalCount">
        <h1>{totalUsers}</h1>
        <p className="text-total-line">Total</p>
      </div>

      <div className="progressBar">
        <Progress
          percent={100}
          showInfo={false}
          strokeColor={{
            "0%": "rgba(116, 89, 217, 0.2)",
            [onlinePercent + "%"]: "rgba(116, 89, 217, 0.2)",
            [onlinePercent + 1 + "%"]: "rgba(116, 89, 217, 1.8)",
          }}
          size={["", 15]}
          strokeLinecap="round"
        />
      </div>

      <DetailData data={filteredData} />
    </div>
  );
};
