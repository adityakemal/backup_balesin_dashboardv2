import { Button } from "antd";
import React, { useState } from "react";

import AgentStep1 from "./AgentStep1";
import AgentStep2 from "./AgentStep2";
import AgentStep3 from "./AgentStep3";

export default function ScheduleLiveAgent() {
  return (
    <div className="schedule mb-4">
      <div className="gbox bg-white">
        <p className="title">Setting Agent</p>
        {/* // step 1 */}
        <AgentStep1 />

        {/* //step 2 */}
        <AgentStep2 />

        {/* //step 3  */}
        <AgentStep3 />

        <div className="w-100 d-flex justify-content-center mb-2">
          <Button
            type="primary"
            shape="round"
            size="large"
            className="text-dark bg-warning px-5">
            SAVE
          </Button>
        </div>
      </div>
    </div>
  );
}
