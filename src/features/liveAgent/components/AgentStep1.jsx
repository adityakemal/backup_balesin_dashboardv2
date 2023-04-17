import React, { useState } from "react";

import { Button, TimePicker } from "antd";

export default function AgentStep1() {
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
  return (
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
  );
}
