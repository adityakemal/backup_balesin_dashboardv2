import { Button } from "antd";
import React, { useState } from "react";
import { numberFormat } from "../../../app/helper";

export default function CustomFunnelChart({
  data,
  activeTab,
  handleChangeTab,
  isReverse,
}) {
  return (
    <div className=" custom-funnelchart">
      <ul className={`d-flex flex-column ${isReverse && "align-items-end"}`}>
        {data.map((res, i) => (
          <Button
            className={`custom_button01 barbox pointer px-3 justify-content-between d-flex align-items-center 
            ${isReverse && "flex-row-reverse"}`}
            key={i}
            type="text"
            color="#F7DC13"
            onClick={() => handleChangeTab(res.name)}
            style={{
              border: "none",
              color: "black",
              background: activeTab === res?.name ? "#F7DC13" : "#EDEDED",
              width: `${100 - i * 10}%`,
            }}>
            <span className={res.className}>{res.name}</span>
            <span>{numberFormat(res.value)}</span>
          </Button>
        ))}
      </ul>
    </div>
  );
}
