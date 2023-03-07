import { Spin } from "antd";
import React from "react";
import { PropagateLoader } from "react-spinners";
export default function LoadingScreen() {
  return (
    <div className="loading_screen">
      <div>
        <PropagateLoader color="#fd0" size="20" />
      </div>
    </div>
  );
}
