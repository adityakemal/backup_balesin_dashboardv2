import { PlusCircleFilled, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Input, Select, Tag, TimePicker } from "antd";
import React, { useState } from "react";

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

  const [selectedItems, setSelectedItems] = useState(["manusia", "binatang"]);

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
          <p className="label">Keyword</p>
          <div className="gbox p-3 bg-white d-flex flex-wrap align-items-center">
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

          {/* <pre>{JSON.stringify(ActiveDays)}</pre> */}
        </div>

        {/* //step 3  */}
      </div>
    </div>
  );
}
