import React from "react";
import { useSelector } from "react-redux";
import { rupiahFormat } from "../../../app/helper";

export default function OutletSales() {
  const { loading, listOutletSales } = useSelector((state) => state.dashboard);

  return (
    <div className="outlet-sales gbox bg-white">
      <p className="title-box">OUTLET SALES</p>
      <ul>
        {listOutletSales.map((res, i) => (
          <li key={i}>
            <p className="area">{res?.outlet}</p>
            <p className="total">{rupiahFormat(res?.amount)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
