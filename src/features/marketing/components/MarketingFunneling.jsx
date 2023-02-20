import React, { useState } from "react";
import CustomFunnelChart from "../../shared/components/CustomFunnelChart";
import dayjs from "dayjs";
import { Table } from "antd";

export default function MarketingFunneling({ title }) {
  const [ActiveTab, setActiveTab] = useState(0);
  const data = [
    { width: "100%", name: "CHAT", value: 20002, color: "#0090FF" },
    { width: "90%", name: "REGISTRASI", value: 1350, color: "#1AD598" },
    { width: "80%", name: "CHECKOUT", value: 25, color: "#F7DC1366" },
    { width: "70%", name: "PAID TRANSACTION", value: 15, color: "#F7DC1399" },
    { width: "60%", name: "CANCELLED", value: 5, color: "#F7DC13" },
    { width: "60%", name: "REPEAT", value: 5, color: "#F7DC13" },
  ];
  const dataSource = [0, 1, 1, 1, 2, 0].map((res, i) => ({
    date: new Date(),
    time: new Date(),
    location: "Bandung",
    phone: "081203838383",
    name: "John Wick",
    outlet: "Pjaten Village",
  }));

  const columns = [
    {
      title: "DATE",
      dataIndex: "date",
      key: "date",
      render: (v) => <div className="">{dayjs(v).format("DD MMM YYYY")}</div>,
    },
    {
      title: "TIME",
      dataIndex: "time",
      key: "time",
      render: (v) => <div className="">{dayjs(v).format("HH:mm")}</div>,
    },
    {
      title: "LOCATION",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "PHONE NUMBER",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "CUSTOMER NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "OUTLET",
      dataIndex: "outlet",
      key: "outlet",
    },
  ];

  const handleChangeTab = (val) => setActiveTab(val);
  return (
    <section className="marketing-funneling gbox bg-white mb-4 mt-4">
      <div className="title">{title}</div>
      <div className="date">12:15 PM at 16th January 2023</div>
      <div className="py-4  row">
        <div className="col-md-6">
          <CustomFunnelChart data={data} activeTab={ActiveTab} />
        </div>
      </div>
      <div className="py-4 border-top">
        <div className="tab-custom d-flex justify-content-between mb-3">
          {data.map((res, i) => (
            <div
              className={`tab d-flex justify-content-center align-items-center  w-100  pointer ${
                i == ActiveTab && "activetab"
              }`}
              key={i}
              onClick={() => handleChangeTab(i)}>
              {res.name}
            </div>
          ))}
        </div>
        <div className="tablefunnel">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </section>
  );
}
