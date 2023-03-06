import React from "react";
import CustomFilterHeader from "../../shared/components/CustomFilterHeader";
import OutletSection from "./OutletSection";
import PieChartSales from "./PieChartSales";

export default function DelivAndPaymentMethod() {
  const dataPie = [
    { name: "Grab Express", value: 18, color: "#F7DC13" },
    { name: "Go-Send Instant", value: 16, color: "#8B8B8B" },
    // { name: "Go-Send Instant", value: 1, color: "red" },
  ];

  const dataPie2 = [
    { name: "OVO", value: 28, color: "#F7DC13" },
    { name: "ShopeePay", value: 4, color: "#8B8B8B" },
    { name: "DANA", value: 1, color: "#0090FF" },
    // { name: "Go-Send Instant", value: 1, color: "red" },
  ];

  return (
    <div className="delivandpay mb-4">
      <div className="row">
        <div className="col-xl-9">
          <div className="piebox w-100 mb-4">
            <CustomFilterHeader title="Delivery Method" noFilter />
            <PieChartSales dataSource={dataPie} />
          </div>
          <div className="piebox w-100">
            <CustomFilterHeader title="Payment Method" noFilter />
            <PieChartSales dataSource={dataPie2} />
          </div>
        </div>
        <div className="col-xl-3">
          <CustomFilterHeader title="" noFilter />
          <OutletSection title="TOP ITEM" customHeight={["625px", "540px"]} />
        </div>
      </div>
    </div>
  );
}
