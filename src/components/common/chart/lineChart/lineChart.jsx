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
              pointHoverBorderColor: "white",
              pointHoverBorderWidth: 2,
              pointHoverRadius: 5,
              tension: 0.4,
              fill: false,
              // backgroundColor: "rgba(66, 47, 138, 0.1)",
              backgroundColor: "transparent",
            },
            {
              label: "Cost",
              data: revenueData.map((data) => data.cost),
              borderColor: "#C1B0DF",
              pointBackgroundColor: "#C1B0DF",
              pointHoverBorderColor: "white",
              pointHoverBorderWidth: 2,
              pointHoverRadius: 5,
              tension: 0.4,
              fill: false,
              // backgroundColor: "rgba(193, 176, 223, 0.1)",
              backgroundColor: "transparent",
            },
          ],
        }}
        options={{
          plugins: {
            tooltip: {
              mode: "index",
              intersect: false,
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
              top: 20,
            },
          },
          scales: {
            x: {
              display: true,
              grid: {
                display: false,
              },
              ticks: {
                color: "#9B9B9B",
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return value.toLocaleString() + "M";
                },
                color: "#9B9B9B",
                maxTicksLimit: 4,
              },
              grid: {
                color: "#E0E0E0",
              },
            },
          },
          interaction: {
            mode: "index",
            intersect: false,
          },
          elements: {
            point: {
              radius: 5,
              hoverRadius: 7,
              hoverBorderWidth: 3,
            },
            line: {
              borderWidth: 2,
            },
          },
        }}
      />
    </div>
  );
};
