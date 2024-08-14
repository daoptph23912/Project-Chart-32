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
              backgroundColor: "transparent",
            },
            {
              label: "Cost",
              data: revenueData.map((data) => data.cost),
              borderColor: "#ECE9F1",
              pointBackgroundColor: "#3D3C41",
              pointHoverBorderColor: "white",
              pointHoverBorderWidth: 2,
              pointHoverRadius: 5,
              tension: 0.4,
              fill: false,
              backgroundColor: "transparent",
            },
          ],
        }}
        options={{
          plugins: {
            tooltip: {
              mode: "index",
              intersect: true,
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
              // left: 30,
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
                padding: 15,
                maxTicksLimit: 7,
                font: {
                  size: 14,
                },
                callback: function (value, index, values) {
                  const label = revenueData[index].label;
                  return ["1", "5", "10", "15", "20", "25", "30"].includes(
                    label
                  )
                    ? label
                    : "";
                },
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return value.toLocaleString() + "M      ";
                },
                color: "#9B9B9B",
                maxTicksLimit: 4,
                // padding: 10,
                font: {
                  size: 14,
                },
              },
              grid: {
                color: "#ECE9F1",
                drawBorder: false,
                borderDash: [0],
                drawTicks: false,
              },
            },
          },
          interaction: {
            mode: "nearest",
            intersect: false,
          },
          elements: {
            point: {
              radius: 0,
              hoverRadius: 7,
              hoverBorderWidth: 3,
            },
            line: {
              borderWidth: 5,
            },
          },
        }}
      />
    </div>
  );
};
