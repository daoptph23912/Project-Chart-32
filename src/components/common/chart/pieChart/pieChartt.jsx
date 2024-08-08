import React from "react";
import { Chart as ChartJS, defaults, registerables } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import sourceData from "../../../../data/sourceData.json";
import "./index.css";
ChartJS.register(...registerables);
defaults.maintainAspectRatio = false;
defaults.responsive = true;
const doughnutData = sourceData.slice(0, 3);
const totalValue = doughnutData.reduce((sum, data) => sum + data.value, 0);
export const PieChart = () => {
  return (
    <div className="pieCard">
      <Doughnut
        data={{
          labels: doughnutData.map((data) => data.label),
          datasets: [
            {
              data: doughnutData.map((data) => data.value),
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
              borderWidth: 2,
              borderRadius: 20,
              cutout: "80%",
            },
          ],
        }}
        options={{
          plugins: {
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return (
                    tooltipItem.label +
                    ": " +
                    tooltipItem.raw.toLocaleString() +
                    " users"
                  );
                },
              },
            },
            legend: {
              display: false,
            },
          },
        }}
      />
      <div className="chartInfo">
        {doughnutData.map((data, index) => (
          <div key={index} className="infoItem">
            <div className="wrap-label-cham">
              <span
                className="infoColor"
                style={{
                  backgroundColor: `rgba(116, 89, 217, ${0.5 + index * 0.3})`,
                }}
              ></span>
              <span className="infoLabel">{data.label}</span>
            </div>
            <span className="infoValue">
              {data.value.toLocaleString()} users
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
