import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import revenueData from "../../../../data/revenueData.json";
import "./index.scss";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

export const LineChart = () => {
  return (
    <div className="revenueCard">
      <Line
        data={{
          labels: revenueData.map((data) => data.label),
          datasets: [
            {
              label: "Revenue",
              data: revenueData.map((data) => data.revenue),
              borderColor: "#422F8ADE",
              pointBackgroundColor: "#422F8ADE",
              tension: 0.8,
              fill: true,
            },
            {
              label: "Cost",
              data: revenueData.map((data) => data.cost),
              borderColor: "#C1B0DF",
              pointBackgroundColor: "#C1B0DF",
              tension: 0.8,
              fill: true,
            },
          ],
        }}
        options={{
          plugins: {
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return (
                    tooltipItem.dataset.label +
                    ": " +
                    tooltipItem.raw.toLocaleString()
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
              top:20
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return value.toLocaleString() + "M";
                },
              },
            },
          },
        }}
      />
    </div>
  );
};
