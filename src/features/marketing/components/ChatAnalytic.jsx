import React, { useState } from "react";
import CustomBarChartStacked from "../../shared/components/CustomBarChartStacked";
import ChatBoxes from "./ChatBoxes";
import ChatPercentage from "./ChatPercentage";

export default function ChatAnalytic() {
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
      title: "TOTAL USER",
      info: "lorem ipsum dolor sit amet",
      content: "7,050",
      footer_icon: "down",
      footer: `<span color='red'>fsf</span>`,
    },
    {
      title: "NUMBER OF REGISTRATION",
      info: "lorem ipsum dolor sit amet",
      content: "134",
      footer_icon: "up",
      footer: `<span color='red'>fsf</span>`,
    },
    {
      title: "NUMBER OF ORDERS",
      info: "lorem ipsum dolor sit amet",
      content: "15",
      footer_icon: "",
      footer: `<span color='red'>fsf</span>`,
    },
    {
      title: "CONVERSION",
      info: "lorem ipsum dolor sit amet",
      content: "0,27%",
      footer_icon: "",
      footer: `<span color='red'>fsf</span>`,
    },
  ];

  return (
    <div className="row">
      <div className="col-md-12">
        <ChatBoxes data={dataSalesBox} />
      </div>

      <div className="col-md-9">
        <CustomBarChartStacked
          dataSales={dataSales}
          handleFilter={handleFilter}
        />
      </div>
      <div className="col-md-3">
        <ChatPercentage />
      </div>
    </div>
  );
}
