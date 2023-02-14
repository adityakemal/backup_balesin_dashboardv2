import React from "react";

export default function CustomFunnelChart({ data, className }) {
  return (
    <div className={`gbox bg-white py-5 custom-funnelchart ${className}`}>
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
  );
}
