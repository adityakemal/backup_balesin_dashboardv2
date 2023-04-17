import React, { useState } from "react";
import { nanoid } from "nanoid";

import { Checkbox, Input, Tabs, Tag } from "antd";

import TextArea from "antd/es/input/TextArea";
import { PlusCircleOutlined } from "@ant-design/icons";

export default function AgentStep3() {
  const [departmentRoleData, setDepartmentRoleData] = useState([
    {
      label: "new Department",
      key: nanoid(),
      issues: [],
      roles: [],
    },
  ]);

  const handleChangeTab = (e) => {
    const findObj = departmentRoleData.find((f) => f.key === e.target.id);

    const objUnChoosed = departmentRoleData.filter(
      (f) => f.key !== e.target.id
    );
    const merge = [...objUnChoosed, { ...findObj, label: e.target.value }];
    setDepartmentRoleData(merge);
  };

  const handleCheckRoles = (e, roles) => {
    const findObj = departmentRoleData.find((f) => f.key === e.target.id);

    const objUnChoosed = departmentRoleData.filter(
      (f) => f.key !== e.target.id
    );

    if (e.target.checked) {
      const merge = [
        ...objUnChoosed,
        { ...findObj, roles: [...roles, e.target.name] },
      ];
      setDepartmentRoleData(merge);
    } else {
      const filtered = roles.filter((r) => r !== e.target.name);
      const merge = [...objUnChoosed, { ...findObj, roles: filtered }];
      setDepartmentRoleData(merge);
    }
  };

  const onEditTabs = (targetKey, action) => {
    if (action === "add") {
      const id = nanoid();
      setDepartmentRoleData((prev) => [
        ...prev,
        {
          label: "new Department",
          key: id,
          issues: [],
          roles: [],
        },
      ]);
    }
    if (action === "remove") {
      const filteredObj = departmentRoleData.filter(
        (res) => res.key !== targetKey
      );
      if (departmentRoleData.length !== 1) {
        setDepartmentRoleData(() => filteredObj);
      }
    }
  };

  const [IssuesText, setIssuesText] = useState("");

  const handleSubmitIssues = (e, keyObj) => {
    e.preventDefault();
    const findObj = departmentRoleData.find((f) => f.key === keyObj);
    const filtered = departmentRoleData.filter((f) => f.key !== keyObj);
    const newIssues = [...findObj.issues, IssuesText];
    setDepartmentRoleData([...filtered, { ...findObj, issues: newIssues }]);
    setIssuesText("");
  };
  const handleRemoveIssues = (e, val, keyObj) => {
    e.preventDefault();
    const findObj = departmentRoleData.find((f) => f.key === keyObj);
    const filtered = departmentRoleData.filter((f) => f.key !== keyObj);
    const newIssues = [...findObj.issues.filter((v) => v !== val)];
    setDepartmentRoleData([...filtered, { ...findObj, issues: newIssues }]);

    console.log(val);
  };

  const departmentForm = ({ label, key, issues, roles }) => (
    <div
      className="p-3 bg-white"
      style={{
        border: "1px solid rgba(5, 5, 5, 0.06)",
        borderTop: 0,
        borderRadius: "0 0 8px 8px",
      }}>
      <div className="row g-3">
        <div className="col-md-6">
          <p className="label">Name</p>
          <Input value={label} id={key} onChange={handleChangeTab} />
        </div>
        <div className="col-md-6">
          <p className="label">Roles</p>
          <Checkbox
            id={key}
            checked={roles.includes("agent")}
            name="agent"
            onChange={(e) => handleCheckRoles(e, roles)}>
            Agent
          </Checkbox>
          <Checkbox
            id={key}
            name="supervisor"
            checked={roles.includes("supervisor")}
            onChange={(e) => handleCheckRoles(e, roles)}>
            Supervisor
          </Checkbox>
        </div>
        <div className="col-md-12">
          <p className="label">Issues</p>
          <div
            className=" px-3 pt-3 pb-2 bg-white d-flex flex-wrap align-items-center mb-3 border"
            style={{ borderRadius: 8 }}>
            {issues.map((res, i) => (
              <Tag
                key={i}
                color="#0090FF"
                size="large"
                className="d-flex align-items-center mb-2"
                closable
                onClose={(e) => handleRemoveIssues(e, res, key)}>
                {res}
              </Tag>
            ))}
            <form
              onSubmit={(e) => handleSubmitIssues(e, key)}
              className="m-0 d-flex">
              <Input
                placeholder=" Add new Issues"
                size="small"
                required
                value={IssuesText}
                onChange={(e) => setIssuesText(e.target.value)}
                className=" w-auto border-0 mb-2"
                style={{ fontSize: 12.5 }}
                prefix={<PlusCircleOutlined />}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="gbox bg-light mb-4">
      <p className="step">step 3</p>
      <p className="title-box">Create Department & Role </p>
      {/* <small>
        <pre>{JSON.stringify(departmentRoleData, null, 2)}</pre>
      </small> */}

      <Tabs
        defaultActiveKey="0"
        type="editable-card"
        onEdit={onEditTabs}
        style={{ marginBottom: 0 }}
        items={departmentRoleData.map((res) => ({
          label: res.label,
          key: res.key,
          children: departmentForm(res),
        }))}
      />
    </div>
  );
}
