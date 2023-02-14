import React from "react";
import { rupiahFormat } from "../../../app/helper";

export default function OutletSales() {
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
    <div className="outlet-sales gbox bg-white">
      <p className="title-box">OUTLET SALES</p>
      <ul>
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
