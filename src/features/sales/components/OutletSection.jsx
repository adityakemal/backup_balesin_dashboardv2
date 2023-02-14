import React from "react";
import { rupiahFormat } from "../../../app/helper";

export default function OutletSection({ title, customHeight }) {
  const data = [
    { area: "SCBD", total: 2911390 },
    { area: "SCBD", total: 2911390 },
    { area: "SCBD", total: 2911390 },
    { area: "SCBD", total: 2911390 },
    { area: "SCBD", total: 2911390 },
    { area: "SCBD", total: 2911390 },
    { area: "SCBD", total: 2911390 },
    { area: "SCBD", total: 2911390 },
    { area: "SCBD", total: 2911390 },
  ];
  return (
    <div
      className="outlet-section gbox bg-white"
      style={customHeight && { height: customHeight[0] }}>
      <p className="title-box">{title}</p>
      <ul style={customHeight && { height: customHeight[1] }}>
        {data.map((res, i) => (
          <li key={i}>
            <p className="area">{res?.area}</p>
            <p className="total">{rupiahFormat(res?.total)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
