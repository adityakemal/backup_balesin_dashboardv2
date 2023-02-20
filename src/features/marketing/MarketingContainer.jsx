import React from "react";
import CustomFilterHeader from "../shared/components/CustomFilterHeader";
import CustomFunnelChart from "../shared/components/CustomFunnelChart";

import LayoutApp from "../shared/components/LayoutApp";
import ChatAnalytic from "./components/ChatAnalytic.jsx";
import MarketingFunneling from "./components/MarketingFunneling";
import TableMarketing from "./components/TableMarketing";

export default function MarketingContainer() {
  const dataFunnel = [
    { width: "100%", name: "CHAT", value: 2020202, color: "#0090FF" },
    { width: "90%", name: "REGISTRASI", value: 135, color: "#1AD598" },
    { width: "80%", name: "CHECKOUT", value: 25, color: "#F7DC1366" },
    { width: "70%", name: "PAID TRANSACTION", value: 15, color: "#F7DC1399" },
    { width: "60%", name: "DELIVERED", value: 5, color: "#F7DC13" },
    { width: "50%", name: "REPEAT", value: 5, color: "#F7BA13" },
  ];
  return (
    <LayoutApp>
      <div className="marketing">
        <CustomFilterHeader title="Marketing " />
        {/* <FilterHeader title="Sales Analytic" noFilter /> */}
        <ChatAnalytic />
        <MarketingFunneling title="Marketing Funneling Report" />

        <TableMarketing title="Registration Activity" />
      </div>
    </LayoutApp>
  );
}
