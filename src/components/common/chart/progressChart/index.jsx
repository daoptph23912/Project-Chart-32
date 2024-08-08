import React from "react";
import { Progress } from "antd";
import sourceData from "../../../../data/sourceData.json";
import "./index.css";

const filteredData = sourceData.filter(
  (data) => data.label === "Online" || data.label === "Offline"
);
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
        <p>users</p>
      </div>
      <div className="progressBar">
        <Progress
          percent={100}
          showInfo={false}
          strokeColor={{
            "0%": "rgba(116, 89, 217, 0.5)",
            [onlinePercent + "%"]: "rgba(116, 89, 217, 0.2)",
            [onlinePercent + 1 + "%"]: "rgba(116, 89, 217, 1.8)",
          }}
          strokeLinecap="round"
          className="customProgress"
        />
      </div>
      <div className="detailData">
        {filteredData.map((data, index) => (
          <div key={index} className="dataItem">
            <div className="text-status">
              {" "}
              <div
                className="colorIndicator"
                style={{
                  backgroundColor:
                    data.label === "Online"
                      ? "rgba(116, 89, 217, 0.2)"
                      : "rgba(116, 89, 217, 1.8)",
                }}
              />
              <span>{data.label} </span>
            </div>
            <span style={{ fontWeight: "bold", marginLeft: "50px" }}>
              {data.value} users
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
