import React from "react";
import CustomFunnelChart from "../../shared/components/CustomFunnelChart";
import OutletSection from "./OutletSection";

export default function SalesFunneling() {
  const data = [
    { width: "100%", name: "CHAT", value: 2020202, color: "#0090FF" },
    { width: "90%", name: "REGISTRASI", value: 135, color: "#1AD598" },
    { width: "80%", name: "CHECKOUT", value: 25, color: "#F7DC1366" },
    { width: "70%", name: "PAID TRANSACTION", value: 15, color: "#F7DC1399" },
    { width: "60%", name: "CANCELLED", value: 5, color: "#F7DC13" },
  ];
  return (
    <div className="row">
      <div className="col-md-9">
        <CustomFunnelChart data={data} />
      </div>
      <div className="col-md-3">
        <OutletSection title="TOP ITEM" customHeight={[446, 386]} />
      </div>
    </div>
  );
}
