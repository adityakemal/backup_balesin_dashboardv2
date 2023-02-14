import React from "react";
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
    <div className="row funneling">
      <div className="col-md-9">
        <div className="gbox bg-white py-5">
          <div className="row">
            <div className="col-md-7">
              <ul className="d-flex justify-content-center flex-column align-items-center">
                {data.map((res, i) => (
                  <li
                    className="barbox mb-3 justify-content-center d-flex align-items-center"
                    key={i}
                    style={{ background: res.color, width: res.width }}>
                    {res.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-5">
              <ul>
                {data.map((res, i) => (
                  <li
                    className="valbox  mb-3 ps-3 d-flex align-items-center"
                    key={i}>
                    {res.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <OutletSection title="TOP ITEM" customHeight={[446, 386]} />
      </div>
    </div>
  );
}
