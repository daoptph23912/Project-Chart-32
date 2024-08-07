import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import revenueData from "../../../data/revenueData.json";
import "./index.css";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
export const LineChart = () => {
  return (
    <div>
      <div className="dataCard revenueCard">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#422F8ADE",
                borderColor: "#422F8ADE",
              },
              {
                label: "Cost",
                data: revenueData.map((data) => data.cost),
                backgroundColor: "#ECE9F1",
                borderColor: "#D1C6E4",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};
