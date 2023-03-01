import React, { useState } from "react";

import LayoutApp from "../shared/components/LayoutApp";
import CustomFilterHeader from "../shared/components/CustomFilterHeader";

import DashboardBoxes from "./components/DashboardBoxes";
import OutletSales from "./components/OutletSales";
import CustomerBoxes from "./components/CustomerBoxes";

import CustomBarChartStacked from "../shared/components/CustomBarChartStacked";
import TableDashboard from "./components/TableDashboard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { postOverView } from "./dashboard.api";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import BarChartDashboard from "./components/BarChartDashboard";

export default function DashboardContainer() {
  const { outlet_id } = useParams();
  const dispatch = useDispatch();

  const { dateRangeFilter } = useSelector((state) => state.shared);
  const { transactionActivity } = useSelector((state) => state.dashboard);

  useEffect(() => {
    const rangeFilterToString = [
      dayjs(dateRangeFilter[0]).format("YYYY-MM-DD"),
      dayjs(dateRangeFilter[1]).format("YYYY-MM-DD"),
    ].toString();
    const data = {
      token: "",
      outlet_id: outlet_id || -1,
      store_id: localStorage.getItem("store_id"),
      daterange: rangeFilterToString,
    };
    dispatch(postOverView(data));
  }, [outlet_id, dateRangeFilter]);

  useEffect(() => {
    const dataWithStringDate = transactionActivity.map((res) => ({
      ...res,
      amountParseInt: parseInt(res.amount),
      date: dayjs(res.date).format("DD/MMM/YYYY"),
    }));
    console.log(dataWithStringDate, "dataWithStringDate");

    const makeKey = [...new Set(dataWithStringDate.map((res) => res.date))]; //remove duplicated key
    console.log(makeKey, "make key");

    const finalDataByKey = makeKey.map((keyDate) => {
      let filteredByDate = dataWithStringDate.filter(
        (val) => val.date === keyDate
      );

      let filterCanceledOrder = filteredByDate.filter(
        (val) => val.status === "cancelled"
      );

      let filterExpiredOrder = filteredByDate.filter(
        (val) => val.status === "expired"
      );

      let filterLossSales = [...filterCanceledOrder, ...filterExpiredOrder].map(
        (res) => res.amount
      );

      return {
        label: keyDate,
        list: filteredByDate,
        potential_sales: filteredByDate
          .map((res) => res.amount)
          .reduce((a, b) => a + b, 0), //reduce all amount
        canceled_order: filterCanceledOrder
          .map((res) => res.amount)
          .reduce((a, b) => a + b, 0), //reduce all canceled amount
        expired_order: filterExpiredOrder
          .map((res) => res.amount)
          .reduce((a, b) => a + b, 0), //reduce all expired amount
        loss_sales: filterLossSales.reduce((a, b) => a + b, 0),
        total_order: filteredByDate.length,
      };
    });

    setChartData(finalDataByKey);

    console.log(finalDataByKey, "data by key");
  }, [transactionActivity]);

  const [chartData, setChartData] = useState([]);

  const [FilterKey, setFilterKey] = useState([]);

  const handleFilter = (key) => {
    const filtered = chartData.map((res) => {
      const response = res;

      delete response[key];
      return response;
    });

    setChartData(filtered);
  };

  return (
    <LayoutApp>
      <div className="dashboard">
        <CustomFilterHeader title="Dashboard Overview" />
        {/* <button onClick={() => handleFilter("data1")}>remove data1</button> */}
        <div className="row gy-4 mb-4">
          <div className="col-lg-9">
            <div className="row sales-boxes">
              <DashboardBoxes />

              <BarChartDashboard
                chartData={chartData}
                handleFilter={handleFilter}
                dateTitle={dateRangeFilter}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <OutletSales />
          </div>
        </div>
        <CustomFilterHeader title="Customer Overview" noFilter />
        <div className="row sales-boxes">
          <CustomerBoxes />
        </div>
        <TableDashboard title="Top Transaction" dateTitle={dateRangeFilter} />
      </div>
    </LayoutApp>
  );
}
