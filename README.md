import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import sourceData from "../../../../data/sourceData.json";
import "./index.scss";
import ChartInfo from "./infoChart";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
const doughnutData = sourceData.slice(0, 3);
const totalUsers = doughnutData.reduce((sum, data) => sum + data.value, 0);
const getRgbaColor = (opacity) => `rgba(116, 89, 217, ${opacity})`;

export const PieChart = () => {
  return (
    <div className="pieChart-info">
      <div className="pieCard">
        <Doughnut
          data={{
            labels: doughnutData.map((data) => data.label),
            datasets: [
              {
                data: doughnutData.map((data) => data.value),
                backgroundColor: [
                  getRgbaColor(0.5),
                  getRgbaColor(1),
                  getRgbaColor(0.2),
                ],
                borderColor: [
                  getRgbaColor(0.5),
                  getRgbaColor(1),
                  getRgbaColor(0.2),
                ],
                borderWidth: 2,
                borderRadius: 20,
                cutout: "80%",
                spacing: 5,
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
            layout: {
              padding: {
                // left: 50,
                // right: 0,
                // top: 10,
              },
            },
          }}
          // plugins={[
          //   {
          //     beforeDraw: function (chart) {
          //       const width = chart.width;
          //       const height = chart.height;
          //       const ctx = chart.ctx;
          //       ctx.restore();
          //       const textY = height / 2;
          //       const marginTop = 10;
          //       const totalUsersClass = document.createElement("div");
          //       totalUsersClass.className = "total-users-text";
          //       document.body.appendChild(totalUsersClass);
          //       const totalUsersStyle =
          //         window.getComputedStyle(totalUsersClass);
          //       ctx.font = totalUsersStyle.font;
          //       ctx.fillStyle = totalUsersStyle.color;
          //       const text = totalUsers.toLocaleString();
          //       const marginLeft = 25;
          //       const textX = Math.round(
          //         (width - ctx.measureText(text).width) / 2 + marginLeft
          //       );

          //       ctx.fillText(
          //         text,
          //         textX,
          //         textY -
          //           (parseInt(totalUsersStyle.lineHeight) - 28) / 2 +
          //           marginTop
          //       );
          //       ctx.font = `400 16px sans-serif`;
          //       ctx.fillStyle = "#9B9B9B";
          //       const labelMarginLeft = 40;
          //       const labelLineHeight = 30;

          //       ctx.fillText(
          //         "Label",
          //         textX + labelMarginLeft,
          //         textY + labelLineHeight - 10 + marginTop
          //       );

          //       document.body.removeChild(totalUsersClass);
          //       ctx.save();
          //     },
          //   },
          // ]}
        />
      </div>
      <ChartInfo data={doughnutData} />
    </div>
  );
};
