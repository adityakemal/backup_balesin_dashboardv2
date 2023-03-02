import React from "react";

import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

export default function ChatBoxes({ data }) {
  return (
    <div className="row boxes-section gy-4">
      {data.map((res, i) => (
        <div className="col-xl-3 col-md-6" key={i}>
          <div className="box bg-white gbox ">
            <div className="d-flex align-items-center title-box ">
              <p className=" mb-0 me-2">{res?.title}</p>
              <Tooltip title={res?.info}>
                <InfoCircleOutlined />
              </Tooltip>
            </div>

            <div
              className="content-box"
              dangerouslySetInnerHTML={{ __html: res?.content }}
            />
            <div className="footer-box d-flex align-items-center">
              {res?.footer_icon === "down" ? (
                <IoArrowForwardCircleSharp
                  color="#FF0000"
                  style={{
                    transform: "rotate(45deg)",
                    fontSize: 20,
                    marginRight: 7,
                  }}
                />
              ) : res.footer_icon === "up" ? (
                <IoArrowForwardCircleSharp
                  color="#0090FF"
                  style={{
                    transform: "rotate(-45deg)",
                    fontSize: 20,
                    marginRight: 7,
                  }}
                />
              ) : null}
              <span dangerouslySetInnerHTML={{ __html: res?.footer }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
