import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import "./pieChartFooter.scss";
const DoughnutChart = ({ percentage, legendText, change }) => {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ["rgba(116, 89, 217, 0.8)", "#eaeaea"],
        borderWidth: 0,
        cutout: "80%",
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="container-pie-Chart-footer">
      <div className="pie-Chart">
        <Doughnut data={data} options={options} />
        <div className="chart-percentage">{`${percentage}%`}</div>
      </div>
      <div className="text-chart-footer">
        <p className="text-legend" style={{ fontSize: "16px" }}>
          {legendText}
        </p>
        <p className="text-chart">{`+${change}%`}</p>
      </div>
    </div>
  );
};

export default DoughnutChart;
