import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function PieChartSales({ dataSource }) {
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
    // responsive: true,
    maintainAspectRatio: false,
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
    <div className="gbox bg-white p-30 d-flex justify-content-between">
      <div className=" customlegend">
        {/* <CustomLegend items={legendItems} onClick={handleClick} /> */}
        {dataSource.map((res, i) => (
          <ul>
            <li className="d-flex" key={i}>
              <div
                style={{
                  marginTop: 2,
                  width: 15,
                  height: 15,
                  marginRight: 15,
                  borderRadius: 4,
                  background: res.color,
                }}></div>
              <div className="mb-3">
                <p className="name mb-0">{res.name}</p>
                <p className="val">{res.value} Orders</p>
              </div>
            </li>
          </ul>
        ))}
      </div>
      <div className="" style={{ height: 210, width: 210 }}>
        <Pie
          height={"210px"}
          data={data}
          options={options}
          // plugins={[{ afterDraw: updateLegend }]}
        />
      </div>
    </div>
  );
}
///
