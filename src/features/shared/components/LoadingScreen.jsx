import { Button, Spin } from "antd";
import React from "react";
import { PropagateLoader } from "react-spinners";
import { MdSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";
export default function LoadingScreen({ connectionCheckMode }) {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className="loading_screen">
      <div>
        {connectionCheckMode ? (
          <div className="text-center text-light">
            <MdSignalWifiStatusbarConnectedNoInternet4 size="40" />
            <h1 className="text-danger">You Are Offline </h1>
            <p>
              Please check your connection to see what happens and reload this
              page!
            </p>
          </div>
        ) : (
          <PropagateLoader color="#fd0" size="20" />
        )}
      </div>
    </div>
  );
}
