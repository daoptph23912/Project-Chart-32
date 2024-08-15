import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import revenueData from "../../../../data/revenueData.json";
import "./index.scss";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

export const LineChart = () => {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  return (
    <div className="revenueCard">
      <Line
        data={{
          labels: revenueData.map((data) => data.label),
          datasets: [
            {
              label: "Revenue",
              data: revenueData.map((data) => data.revenue * 1000000),
              borderColor: "#422F8ADE",
              pointBackgroundColor: "#422F8ADE",
              pointHoverBorderColor: "white",
              pointHoverBorderWidth: 3,
              pointHoverRadius: 7,
              tension: 0.4,
              fill: false,
              backgroundColor: "transparent",
            },
            {
              label: "Cost",
              data: revenueData.map((data) => data.cost * 1000000),
              borderColor: "#ECE9F1",
              pointBackgroundColor: "#3D3C41",
              pointHoverBorderColor: "white",
              pointHoverBorderWidth: 3,
              pointHoverRadius: 7,
              tension: 0.4,
              fill: false,
              backgroundColor: "transparent",
            },
          ],
        }}
        options={{
          plugins: {
            tooltip: {
              mode: "nearest",
              intersect: false,
              position: "nearest",
              yAlign: "bottom",
              xAlign: "center",
              caretPadding: 2,
              callbacks: {
                title: function () {
                  return "This Month";
                },
                label: function (tooltipItem) {
                  return `${tooltipItem.raw.toLocaleString()}`;
                },
                footer: function (tooltipItems) {
                  const tooltipItem = tooltipItems[0];
                  const monthIndex = tooltipItem.dataIndex % months.length;
                  return months[monthIndex];
                },
                labelColor: function (tooltipItem) {
                  return {
                    borderColor: "transparent",
                    // backgroundColor: "transparent",
                    backgroundColor: tooltipItem.dataset.borderColor,
                  };
                },
              },
              backgroundColor: isDarkMode ? "black" : "white",
              titleColor: isDarkMode ? "#9B9B9B" : "#9B9B9B",
              titleFont: {
                size: 11,
                weight: "normal",
              },
              bodyColor: isDarkMode ? "white" : "black",
              bodyFont: {
                size: 20,
                weight: "bold",
                // paddingLeft: 100,
              },
              footerColor: isDarkMode ? "#9B9B9B" : "#9B9B9B",
              footerFont: {
                size: 14,
                weight: "normal",
              },
              borderColor: isDarkMode
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)",
              borderWidth: 1,
              padding: 10,
              caretPadding: 10,
              caretSize: 8,
              cornerRadius: 15,
            },
            legend: {
              display: false,
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
                  if (value === 0) {
                    return "0M    ";
                  }
                  return value > 0
                    ? (value / 1000000).toFixed(0) + "M    "
                    : "";
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
