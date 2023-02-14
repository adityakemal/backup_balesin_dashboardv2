import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function ChatPercentage() {
  const dataSource = [
    { name: "Answered", value: 28, color: "#F7DC13" },
    { name: "Not Answered", value: 4, color: "#8B8B8B" },
  ];

  const data = {
    labels: dataSource.map((res) => res.name),
    datasets: [
      {
        label: "order",
        data: dataSource.map((res) => res.value),
        backgroundColor: dataSource.map((res) => res.color),
        borderColor: dataSource.map((res) => res.color),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        // enabled: false,
      },
      datalabels: {
        display: true,
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(0) + "%";
          return percentage;
          // return "percentage";
        },
        color: "white",
        font: {
          weight: "bold",
          size: 20,
        },
      },
      legend: {
        display: false,
        position: "left",
        align: "top",
      },
    },
  };

  return (
    <div className="bg-white gbox">
      <p className="title-box">CHAT ANSWERED</p>
      <div className="d-flex align-items-center justify-content-center">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
