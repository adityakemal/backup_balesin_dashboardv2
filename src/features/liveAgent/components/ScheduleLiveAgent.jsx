import React, { useState } from "react";

import { PlusCircleFilled, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Input, Tag, TimePicker } from "antd";
import {
  GiSandsOfTime,
  GiCheckMark,
  GiCancel,
  GiBoltDrop,
  GiAlarmClock,
  GiExitDoor,
} from "react-icons/gi";
import TextArea from "antd/es/input/TextArea";

export default function ScheduleLiveAgent() {
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [ActiveDays, setActiveDays] = useState([]);

  const handleChooseDay = (val) => {
    const hasChoosed = ActiveDays.includes(val);
    if (hasChoosed) {
      const filtered = ActiveDays.filter((v) => v !== val);
      setActiveDays(filtered);
    } else {
      setActiveDays((res) => [...res, val]);
    }
  };

  const handleTimePicker = (time) => {
    console.log(time);
  };

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
    <div className="schedule">
      <div className="gbox bg-white">
        <p className="title">Settings</p>
        {/* // step 1 */}
        <div className="gbox bg-light mb-4">
          <p className="step">step 1</p>
          <p className="title-box">
            Set Schedule Live Agent{" "}
            <small>
              <i>(Click on day name for choose)</i>
            </small>
          </p>

          {/* <pre>{JSON.stringify(ActiveDays)}</pre> */}
          <div className="d-flex align-items-center flex-wrap">
            {dayNames.map((res, i) => (
              <Button
                key={i}
                style={{ flex: 1 }}
                className="me-3 mb-3"
                type={ActiveDays.includes(res) ? "primary" : "dashed"}
                shape="round"
                onClick={() => handleChooseDay(res)}
                size="">
                {res}
              </Button>
            ))}
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <p className="label">Hour Open</p>
              <TimePicker
                className="w-100"
                showTime={{ format: "HH:mm" }}
                onChange={handleTimePicker}
              />
            </div>
            <div className="col-md-6">
              <p className="label">Hour Close</p>
              <TimePicker
                className="w-100"
                showTime={{ format: "HH:mm" }}
                onChange={handleTimePicker}
              />
            </div>
          </div>
        </div>

        {/* //step 2 */}
        <div className="gbox bg-light mb-4">
          <p className="step">step 2</p>
          <p className="title-box">Set Live Agent response </p>
          <p className="label">Keywords</p>
          <div className="gbox p-3 bg-white d-flex flex-wrap align-items-center mb-3">
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
                <div
                  className={`d-flex align-items-center mb-1 ${res.className}`}>
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

        {/* //step 3  */}
        <div className="gbox bg-light mb-4">
          <p className="step">step 3</p>
          <p className="title-box">Create Department & Role </p>
        </div>
      </div>
    </div>
  );
}
