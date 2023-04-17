import {
  DeleteColumnOutlined,
  DeleteFilled,
  DeleteOutlined,
  EditFilled,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Table, Tag } from "antd";
import React from "react";

export default function ListAgent() {
  const dataSource = [0, 1, 1, 1, 2].map((res, i) => ({
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
        <div className="d-flex align-items-center">
          <Button
            type="primary"
            // size="small"
            className=" mx-1"
            // onClick={() => showModal(res)}
          >
            <div className="d-flex align-items-center">
              <EditFilled className="me-1" /> Edit
            </div>
          </Button>
          <Button
            //   type="danger"
            danger
            // size="small"
            className="mx-1"
            // onClick={() => showModal(res)}
          >
            <div className="d-flex align-items-center">
              <DeleteFilled className="me-1" /> Delete
            </div>
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div className="list-agent">
      <div className="gbox bg-white">
        <div className="d-flex justify-content-between align-items-center">
          <p className="title">List Agent</p>
          <Button type="primary" className="bg-warning text-dark">
            + Add New Agent
          </Button>
        </div>
        <div className="tablecustom">
          <div className="mt-4 tablewrap">
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
