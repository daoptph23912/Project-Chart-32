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
                left: 50,
                right: 0,
                top: 10,
              },
            },
          }}
        />
      </div>
      {/* <div className="chart-pie-main">{`Total : ${totalUsers}`}</div> */}
      <ChartInfo data={doughnutData} />
    </div>
  );
};
