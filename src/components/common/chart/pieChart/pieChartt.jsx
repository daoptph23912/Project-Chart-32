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

const totalLabelPlugin = {
  id: "totalLabel",
  beforeDraw: (chart) => {
    const {
      ctx,
      chartArea: { top, right, bottom, left, width, height },
    } = chart;
    const centerX = (right - left) / 2 + left;
    const centerY = (bottom - top) / 2 + top;

    ctx.save();
    ctx.font = "bold 24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#000";
    ctx.fillText(totalValue.toLocaleString(), centerX, centerY);
    ctx.restore();
  },
};
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
            totalLabel: totalLabelPlugin,
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
