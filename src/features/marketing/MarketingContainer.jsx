import React from "react";
import CustomFilterHeader from "../shared/components/CustomFilterHeader";
import LayoutApp from "../shared/components/LayoutApp";
import ChatAnalytic from "./components/ChatAnalytic.jsx";

export default function MarketingContainer() {
  return (
    <LayoutApp>
      <div className="marketing">
        <CustomFilterHeader title="Marketing " />
        {/* <FilterHeader title="Sales Analytic" noFilter /> */}
        <ChatAnalytic />
      </div>
    </LayoutApp>
  );
}
