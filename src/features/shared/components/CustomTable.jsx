import React from "react";
import { Button, Table, Tag } from "antd";
import dayjs from "dayjs";
import { rupiahFormat } from "../../../app/helper";

export default function CustomTable({ title }) {
  const dataSource = [0, 1, 1, 1, 2, 0, 1, 2, 2, 0].map((res, i) => ({
    order_id: i + 1,
    customer_name: "kemal",
    date: new Date(),
    amount: 12232223,
    outlet: "Pjaten Village",
    status: res,
  }));

  const columns = [
    {
      title: "Order Id",
      dataIndex: "order_id",
      key: "order_id",
    },
    {
      title: "CUSTOMER NAME",
      dataIndex: "customer_name",
      key: "customer_name",
    },
    {
      title: "date",
      dataIndex: "date",
      key: "date",
      render: (v) => dayjs(v).format("DD MMMM YYYY"),
    },
    {
      title: "amount",
      dataIndex: "amount",
      key: "amount",
      render: (v) => rupiahFormat(v),
    },
    {
      title: "outlet",
      dataIndex: "outlet",
      key: "outlet",
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
      render: (v) =>
        v === 0 ? (
          <Tag color="green">Delivered</Tag>
        ) : v === 2 ? (
          <Tag color="red">Canceled</Tag>
        ) : (
          <Tag color="default">Expired</Tag>
        ),
    },
    {
      title: "option",
      dataIndex: "option",
      key: "option",
      render: () => <Button style={{ background: "#F7DC13" }}>Detail</Button>,
    },
  ];

  return (
    <div className="gbox bg-white">
      <div className="tablecustom">
        <p className="title mb-0">{title}</p>
        <p className="date mb-0">12:15 PM at 16th January 2023</p>
        <div className="mt-4">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </div>
  );
}
