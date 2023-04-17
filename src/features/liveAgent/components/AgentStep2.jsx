import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Input, Tag } from "antd";
import TextArea from "antd/es/input/TextArea";

import {
  GiSandsOfTime,
  GiCheckMark,
  GiCancel,
  GiBoltDrop,
  GiAlarmClock,
  GiExitDoor,
} from "react-icons/gi";
export default function AgentStep2() {
  const [selectedItems, setSelectedItems] = useState(["CS", "Live Agent"]);

  const handleRemoveKeyword = (e, val) => {
    e.preventDefault();
    const filteredKeyword = selectedItems.filter((f) => f !== val);
    setSelectedItems(filteredKeyword);
    console.log(val);
  };

  const [keywordText, setKeywordText] = useState("");

  const handleChangeKeyword = (e) => setKeywordText(e.target.value);

  const handleSubmitKeyword = (e) => {
    e.preventDefault();
    setSelectedItems((prev) => [...prev, keywordText]);
    setKeywordText("");
  };

  const [responseObj, setResponseObj] = useState([
    {
      id: 1,
      className: "text-blue",
      title: "waiting response",
      icon: <GiSandsOfTime />,
      desc: "sdfasfa",
    },
    {
      id: 2,
      className: "text-success",
      title: "success response",
      icon: <GiCheckMark />,
      desc: "sdfasfa",
    },
    {
      id: 3,
      className: "text-danger",
      title: "cancel response",
      icon: <GiCancel />,
      desc: "sdfasfa",
    },
    {
      id: 4,
      className: "text-warning",
      title: "inactive agent response",
      icon: <GiExitDoor />,
      desc: "sdfasfa",
    },
    {
      id: 5,
      className: "text-orange",
      title: "out of working hours response",
      icon: <GiAlarmClock />,
      desc: "sdfasfa",
    },
  ]);
  return (
    <div className="gbox bg-light mb-4">
      <p className="step">step 2</p>
      <p className="title-box">Set Live Agent response </p>
      <p className="label">Keywords</p>
      <div
        className=" px-3 pt-3 pb-2 bg-white d-flex flex-wrap align-items-center mb-3 border"
        style={{ borderRadius: 8 }}>
        {selectedItems.map((res, i) => (
          <Tag
            key={i}
            color="#0090FF"
            size="large"
            className="d-flex align-items-center mb-2"
            closable
            onClose={(e) => handleRemoveKeyword(e, res)}>
            {res}
          </Tag>
        ))}
        <form onSubmit={handleSubmitKeyword} className="m-0 d-flex">
          <Input
            placeholder=" Add new keyword"
            size="small"
            required
            value={keywordText}
            onChange={handleChangeKeyword}
            className=" w-auto border-0 mb-2"
            style={{ fontSize: 12.5 }}
            prefix={<PlusCircleOutlined />}
          />
        </form>
      </div>
      <div className="row g-4">
        {responseObj.map((res, i) => (
          <div className="col-md-6" key={i}>
            <div className={`d-flex align-items-center mb-1 ${res.className}`}>
              {res.icon}
              <p className={`title-box mb-0 ms-1 ${res.className}`}>
                {res.title}
              </p>
            </div>

            <TextArea
              autoSize
              rows={4}
              placeholder="Text here.."
              style={{ minHeight: 80 }}
            />
          </div>
        ))}
      </div>

      {/* <pre>{JSON.stringify(ActiveDays)}</pre> */}
    </div>
  );
}
