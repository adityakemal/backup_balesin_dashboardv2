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
} from "chart.js";
import {
  Chart,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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
      },
      y: {
        stacked: false,
        grid: {
          display: true,
        },
        ticks: {
          // forces step size to be 50 units
          stepSize: 50,
        },
      },
    },
    plugins: {
      datalabels: false,
      tooltip: {
        displayColors: false,
        titleFont: {
          size: 20,
        },
        bodyFont: {
          size: 10,
        },
        footerFont: {
          size: 10, // there is no footer by default
        },
        callbacks: {
          beforeTitle: (c) => {
            return "before title";
          },
          title: (c) => {
            // console.log(c);
            // console.log(c[0].dataIndex, "iininininininininin <<<<<<<<<<<<<<<");
            return `Nominal Rp ${dataSales[c[0].dataIndex].nominal}`;
          },
          afterTitle: (c) => {
            return "after title";
          },
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
    labels: dataSales.map((res) => res.label.substring(0, 3)),
    datasets: [
      {
        type: "line",
        label: "Line 1",
        data: dataSales.map((res) => res.data_line),
        backgroundColor: "#FF0000",
        borderWidth: 2,
        borderColor: "#FF0000",
        fill: false,
        hideInLegendAndTooltip: false,
      },
      {
        type: "bar",
        label: "Dataset 1",
        data: dataSales.map((res) => res.data1),
        backgroundColor: "#8B8B8B",
        borderRadius: borderRadiusAllCorners,
        borderSkipped: false,
      },
      {
        type: "bar",
        label: "Dataset 2",
        data: dataSales.map((res) => res.data2),
        backgroundColor: "#F7DC13",
        borderRadius: borderRadiusAllCorners,
        borderSkipped: false,
      },
    ],
  };

  const onClick = () => {};

  const headData = [
    { name: "Potential Sales", color_code: "#F7DC13", data: [] },
    { name: "Cancelled Order", color_code: "#8B8B8B", data: [] },
    { name: "Total Order", color_code: "#FF0000", data: [] },
  ];

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
