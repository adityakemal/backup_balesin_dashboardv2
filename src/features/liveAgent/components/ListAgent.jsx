import { Button, Table, Tag } from "antd";
import React from "react";

export default function ListAgent() {
  const dataSource = [0, 1, 1, 1, 2, 0, 1, 2, 2, 0].map((res, i) => ({
    agent_name: "wakwaw",
    email: "wakwaw@gmail.com",
    department: "CS",
    roles: ["Agent", "Supervisor"],
    issues: ["issues1", "issues2"],
  }));

  const columns = [
    {
      title: "Agent NAME",
      dataIndex: "agent_name",
      key: "agent_name",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "roles",
      dataIndex: "roles",
      key: "roles",
      render: (v) => v.toString().replace(",", ", "),
    },
    {
      title: "Taging",
      dataIndex: "issues",
      key: "issues",
      render: (v) => v.map((val, i) => <Tag key={i}>{val}</Tag>),
    },
    {
      title: "option",
      dataIndex: "option",
      key: "option",
      render: (_, res) => (
        <Button
          style={{ background: "#F7DC13" }}
          // onClick={() => showModal(res)}
        >
          Detail
        </Button>
      ),
    },
  ];
  return (
    <div className="list-agent">
      <div className="gbox bg-white">
        <p className="title">List Agent</p>
        <div className="tablecustom">
          <div className="mt-4 tablewrap">
            <Table dataSource={dataSource} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
}
