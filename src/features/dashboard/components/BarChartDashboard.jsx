import React, { useRef, useState } from "react";
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
import { rupiahFormat } from "../../../app/helper";
import { Button } from "antd";

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
export default function BarChartDashboard({
  chartData,
  handleFilter,
  dateTitle,
}) {
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
      intersect: false,
      axis: "x",
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
          size: 16,
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
          label: function (context) {
            let label = context.dataset.label || "";

            const idx = context.dataIndex;
            console.log(context.dataIndex);

            let canceledNum = rupiahFormat(chartData[idx].canceled_order);
            let expiredNum = rupiahFormat(chartData[idx].expired_order);

            if (label === "Loss Sales") {
              let string1 = [`${label}: ${rupiahFormat(context.parsed.y)}`];
              let string2 = [`→ Canceled: ${canceledNum},`];
              let string3 = [`→ Expired: ${expiredNum}`];
              return [string1, string2, string3];
            }
            if (label === "Total Order") {
              return `${label}: ${context.parsed.y}`;
            }
            return `${label}: ${rupiahFormat(context.parsed.y)}`;

            // if (context.parsed.y !== null) {
            //   label += new Intl.NumberFormat("en-US", {
            //     style: "currency",
            //     currency: "USD",
            //   }).format(context.parsed.y);
            // }
          },
          title: (c) => {
            // console.log(c);
            // console.log(c[0].dataIndex, "iininininininininin <<<<<<<<<<<<<<<");
            const labelReformat = dayjs(
              new Date(chartData[c[0].dataIndex].label)
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

  const [disabledData, setDisabledData] = useState([]);

  const handleDisabledData = (val) => {
    if (disabledData.includes(val)) {
      const filtered = disabledData.filter((res) => res !== val);
      setDisabledData(filtered);
    } else {
      setDisabledData((prev) => [...prev, val]);
    }
  };

  const data = {
    labels: chartData.map((res) => res.label),
    datasets: [
      {
        type: "line",
        // hidden: true,
        label: "Total Order",
        data: !disabledData.includes("Total Order")
          ? chartData.map((res) => res.total_order)
          : [],
        backgroundColor: "#FF0000",
        borderWidth: 1,
        borderColor: "#FF0000",
        fill: origin,
        hideInLegendAndTooltip: false,
      },
      {
        type: "bar",
        label: "Loss Sales",
        data: !disabledData.includes("Loss Sales")
          ? chartData.map((res) => res.loss_sales)
          : [],
        backgroundColor: "#8B8B8B",
        borderRadius: borderRadiusAllCorners,
        borderSkipped: false,
      },
      {
        type: "bar",
        label: "Potential Sales",
        data: !disabledData.includes("Potential Sales")
          ? chartData.map((res) => res.potential_sales)
          : [],
        backgroundColor: "#F7DC13",
        borderRadius: borderRadiusAllCorners,
        borderSkipped: false,
      },
    ],
  };

  const headData = data.datasets
    .map((res) => ({
      name: res.label,
      color_code: res.backgroundColor,
      data: res.data,
    }))
    .reverse();

  return (
    <div className="col-lg-12">
      {/* {JSON.stringify(disabledData)}
      {JSON.stringify(disabledData.includes("Total Order"))} */}
      <div className="custom-stackedchart gbox bg-white">
        <div className="charthead d-flex justify-content-between align-items-center mb-3">
          <div className="left">
            <p className="title mb-0">Sales Analytic</p>
            <p className="date mb-0">
              {dayjs(dateTitle[0]).format("DD MMMM YYYY")} to{" "}
              {dayjs(dateTitle[1]).format("DD MMMM YYYY")}
            </p>
          </div>
          <div className="right d-flex flex-wrap">
            {headData.map((res, i) => (
              <Button
                className={` pointer headbut d-flex align-items-center ms-3 ${
                  disabledData.includes(res.name) && "opacity-50"
                } `}
                onClick={() => handleDisabledData(res.name)}
                key={i}>
                <span
                  className="colbox"
                  style={{ background: res.color_code }}></span>

                <span
                  className={`${disabledData.includes(res.name) && "strike"} `}>
                  {res?.name}
                </span>
              </Button>
            ))}
          </div>
        </div>
        <div className="">
          <Chart options={options} data={data} height="215px" />
          {/* <button onClick={onClick}>test event</button> */}
        </div>
      </div>
    </div>
  );
}
