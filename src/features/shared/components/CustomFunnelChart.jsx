import { Button } from "antd";
import React, { useState } from "react";
import { numberFormat } from "../../../app/helper";

export default function CustomFunnelChart({
  data,
  activeTab,
  handleChangeTab,
}) {
  return (
    <div className=" custom-funnelchart">
      <ul className="d-flex flex-column ">
        {data.map((res, i) => (
          <Button
            className="custom_button01 barbox pointer px-3 justify-content-between d-flex align-items-center"
            key={i}
            type="text"
            color="#F7DC13"
            onClick={() => handleChangeTab(i)}
            style={{
              border: "none",
              color: "black",
              background: activeTab === i ? "#F7DC13" : "#EDEDED",
              width: `${100 - i * 10}%`,
            }}>
            {res.name} <span>{numberFormat(res.value)}</span>
          </Button>
        ))}
      </ul>
    </div>
  );
}
