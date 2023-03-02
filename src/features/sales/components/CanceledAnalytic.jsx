import React, { useState } from "react";
import OutletSales from "../../dashboard/components/OutletSales";
import CustomBarChartStacked from "../../shared/components/CustomBarChartStacked";
import CanceledBoxes from "./CanceledBoxes";

import OutletSection from "./OutletSection";

export default function CanceledAnalytic() {
  const [dataSales, setDataSales] = useState([
    {
      nominal: "rp 20.000",
      label: "January",
      data1: 10,
      data2: 200,
      data_line: 10,
    },
    {
      nominal: "rp 20.000",
      label: "February",
      data1: 30,
      data2: 111,
      data_line: 20,
    },
    {
      nominal: "rp 20.000",
      label: "March",
      data1: 70,
      data2: 120,
      data_line: 50,
    },
    {
      nominal: "rp 20.000",
      label: "April",
      data1: 20,
      data2: 100,
      data_line: 10,
    },
    {
      nominal: "rp 20.000",
      label: "May",
      data1: 90,
      data2: 110,
      data_line: 15,
    },
    {
      nominal: "rp 20.000",
      label: "June",
      data1: 10,
      data2: 30,
      data_line: 80,
    },
    {
      nominal: "rp 20.000",
      label: "July",
      data1: 30,
      data2: 70,
      data_line: 20,
    },
    {
      nominal: "rp 20.000",
      label: "Augustus",
      data1: 30,
      data2: 70,
      data_line: 10,
    },
    {
      nominal: "rp 20.000",
      label: "September",
      data1: 30,
      data2: 110,
      data_line: 60,
    },
    {
      nominal: "rp 20.000",
      label: "October",
      data1: 100,
      data2: 120,
      data_line: 20,
    },
    {
      nominal: "rp 20.000",
      label: "November",
      data1: 10,
      data2: 120,
      data_line: 10,
    },
    {
      nominal: "rp 20.000",
      label: "December",
      data1: 10,
      data2: 30,
      data_line: 90,
    },
  ]);

  const handleFilter = () => {};

  const dataSalesBox = [
    {
      title: "dfsdfs",
      info: "lorem ipsum dolor sit amet",
      content: "RP 7,050,500",
      footer_icon: "down",
      footer: `<span color='red'>fsf</span>`,
    },
    {
      title: "dfsdfs",
      info: "lorem ipsum dolor sit amet",
      content: "RP 7,050,500",
      footer_icon: "up",
      footer: `<span color='red'>fsf</span>`,
    },
    {
      title: "dfsdfs",
      info: "lorem ipsum dolor sit amet",
      content: "RP 7,050,500",
      footer_icon: "",
      footer: `<span color='red'>fsf</span>`,
    },
  ];

  return (
    <div className="row gy-4 mb-4 ">
      <div className="col-xl-9">
        <div className="row boxes-section">
          <CanceledBoxes />
          <div className="col-xl-12">
            <CustomBarChartStacked
              dataSales={dataSales}
              handleFilter={handleFilter}
            />
          </div>
        </div>
      </div>
      <div className="col-xl-3">
        <OutletSection title="OUTLET SALES" />
      </div>
    </div>
  );
}
