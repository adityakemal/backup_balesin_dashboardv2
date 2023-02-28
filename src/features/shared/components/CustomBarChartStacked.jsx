import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  registerables,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import dayjs from "dayjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ...registerables
);

const borderRadius = 10;
const borderRadiusAllCorners = {
  topLeft: borderRadius,
  topRight: borderRadius,
  bottomLeft: 0,
  bottomRight: 0,
};
export default function CustomBarChartStacked({ dataSales, handleFilter }) {
  const options = {
    // responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    interaction: {
      mode: "index",
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 9,
          },
        },
      },
      y: {
        stacked: false,
        grid: {
          display: true,
        },
        ticks: {
          // forces step size to be 50 units
          // stepSize: 50,
        },
      },
    },
    plugins: {
      datalabels: false,
      tooltip: {
        // displayColors: false,
        titleFont: {
          size: 18,
        },
        bodyFont: {
          size: 12,
        },
        footerFont: {
          size: 12, // there is no footer by default
        },
        callbacks: {
          // beforeTitle: (c) => {
          //   return "before title";
          // },
          title: (c) => {
            // console.log(c);
            // console.log(c[0].dataIndex, "iininininininininin <<<<<<<<<<<<<<<");
            const labelReformat = dayjs(
              new Date(dataSales[c[0].dataIndex].label)
            ).format("DD MMMM YYYY");
            return `${labelReformat}`;
          },
          // afterTitle: (c) => {
          //   return "after title";
          // },
        },
      },
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const data = {
    labels: dataSales.map((res) => res.label),
    datasets: [
      {
        type: "line",
        label: "Total Order",
        data: dataSales.map((res) => res.potential_sales),
        backgroundColor: "#FF0000",
        borderWidth: 2,
        borderColor: "#FF0000",
        fill: false,
        hideInLegendAndTooltip: false,
      },
      {
        type: "bar",
        label: "Canceled Order",
        data: dataSales.map((res) => res.canceled_order),
        backgroundColor: "#8B8B8B",
        borderRadius: borderRadiusAllCorners,
        borderSkipped: false,
      },
      {
        type: "bar",
        label: "Potential Sales",
        data: dataSales.map((res) => res.potential_sales),
        backgroundColor: "#F7DC13",
        borderRadius: borderRadiusAllCorners,
        borderSkipped: false,
      },
    ],
  };

  const onClick = () => {};

  // const headData = [
  //   { name: "Potential Sales", color_code: "#F7DC13", data: [] },
  //   { name: "Cancelled Order", color_code: "#8B8B8B", data: [] },
  //   { name: "Total Order", color_code: "#FF0000", data: [] },
  // ];
  const headData = data.datasets
    .map((res) => ({
      name: res.label,
      color_code: res.backgroundColor,
      data: res.data,
    }))
    .reverse();

  return (
    <>
      <div className="custom-stackedchart gbox bg-white">
        <div className="charthead d-flex justify-content-between align-items-center mb-3">
          <div className="left">
            <p className="title mb-0">Sales Analytic</p>
            <p className="date mb-0">12:15 PM at 16th January 2023</p>
          </div>
          <div className="right d-flex flex-wrap">
            {headData.map((res, i) => (
              <div
                className="pointer headbut d-flex align-items-center ms-3"
                key={i}>
                <div
                  className="colbox"
                  style={{ background: res.color_code }}></div>
                <span>{res?.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <Chart options={options} data={data} height="215px" />
          {/* <button onClick={onClick}>test event</button> */}
        </div>
      </div>
    </>
  );
}
