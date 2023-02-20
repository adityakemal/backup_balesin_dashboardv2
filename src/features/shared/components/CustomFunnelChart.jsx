import React, { useState } from "react";
import { numberFormat } from "../../../app/helper";

export default function CustomFunnelChart({ data, activeTab }) {
  return (
    <div className=" custom-funnelchart">
      <ul className="d-flex flex-column ">
        {data.map((res, i) => (
          <li
            className="barbox px-3 justify-content-between d-flex align-items-center"
            key={i}
            style={{
              background: activeTab === i ? "#F7DC13" : "#EDEDED",
              width: `${100 - i * 10}%`,
            }}>
            {res.name} <span>{numberFormat(res.value)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
