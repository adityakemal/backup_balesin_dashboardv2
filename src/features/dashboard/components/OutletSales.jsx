import { unwrapResult } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { numberFormat, rupiahFormat } from "../../../app/helper";
import { postOutlets } from "../dashboard.api";

export default function OutletSales() {
  const dispatch = useDispatch();
  // const {  } = useSelector((state) => state.dashboard);
  const { outletList, dateRangeFilter, isRefresh } = useSelector(
    (state) => state.shared
  );

  const [mergeOutlet, setMergeOutlet] = useState([]);

  useEffect(() => {
    const rangeFilterToString = [
      dayjs(dateRangeFilter[0]).format("YYYY-MM-DD"),
      dayjs(dateRangeFilter[1]).format("YYYY-MM-DD"),
    ].toString();
    const data = {
      token: "xxxxxxxxxxx",
      outlet_id: -1,
      store_id: localStorage.getItem("store_id"),
      daterange: rangeFilterToString,
    };
    dispatch(postOutlets(data))
      .then(unwrapResult)
      .then((res) => {
        const merged = outletList.map((val) => ({
          name: val.name,
          amount:
            res.outlets_potential_sales.find((f) => f.outlet === val.name)
              ?.amount || 0,
        }));

        const sorted = merged.sort(
          (a, b) => parseInt(b?.amount) - parseInt(a?.amount)
        );
        // console.log(res.outlets_potential_sales, "outlet unwrapresults");

        setMergeOutlet(sorted);
      })
      .catch((err) =>
        console.log(err, "error catch outlrt with value /outlets")
      );

    console.log(outletList, "outletList");
  }, [dateRangeFilter, outletList]);

  return (
    <div className="outlet-sales gbox bg-white">
      <p className="title-box">OUTLET SALES</p>
      <ul>
        {mergeOutlet?.map((res, i) => (
          <li key={i}>
            <p className="area">{res?.name}</p>
            <p className="total">Rp {numberFormat(res?.amount)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
