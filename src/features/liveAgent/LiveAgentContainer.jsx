import React from "react";
import CustomFilterHeader from "../shared/components/CustomFilterHeader";
import LayoutApp from "../shared/components/LayoutApp";
import ScheduleLiveAgent from "./components/ScheduleLiveAgent";
import StatusAgent from "./components/StatusAgent";

export default function LiveAgentContainer() {
  return (
    <LayoutApp>
      <div className="live-agent">
        <CustomFilterHeader title="Live Agent " noFilter />
        <StatusAgent />
        <ScheduleLiveAgent />
      </div>
    </LayoutApp>
  );
}
