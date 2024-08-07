import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import sourceData from "../../../data/sourceData.json";
import "./index.css";
defaults.maintainAspectRatio = false;
defaults.responsive = true;

export const PieChart = () => {
  return (
    <div className="pieChart-lineChart">
      <div className="dataCard categoryCard">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(116, 89, 217, 0.5)",
                  "rgba(116, 89, 217, 1)",
                  "rgba(116, 89, 217, 0.2)",
                ],
                borderColor: [
                  "rgba(116, 89, 217, 0.5)",
                  "rgba(116, 89, 217, 1)",
                  "rgba(116, 89, 217, 0.2)",
                ],
              },
            ],
          }}
        />
      </div>
      <div className="dataCard customerCard">
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(116, 89, 217, 0.5)",
                  "rgba(116, 89, 217, 1)",
                  "rgba(116, 89, 217, 0.2)",
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Source",
              },
            },
          }}
        />
      </div>
    </div>
  );
};
