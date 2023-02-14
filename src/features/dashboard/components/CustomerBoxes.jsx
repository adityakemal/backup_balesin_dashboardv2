import React from "react";

import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

export default function CustomerBoxes() {
  const dataSalesBox = [
    {
      title: "dfsdfs",
      info: "lorem ipsum dolor sit amet",
      content: "RP 7,050,500",
      footer_icon: "down",
      footer: `<span color='red'>fsf</span>`,
    },
    {
      title: "dfsdfs",
      info: "lorem ipsum dolor sit amet",
      content: "RP 7,050,500",
      footer_icon: "up",
      footer: `<span color='red'>fsf</span>`,
    },
    {
      title: "dfsdfs",
      info: "lorem ipsum dolor sit amet",
      content: "RP 7,050,500",
      footer_icon: "",
      footer: `<span color='red'>fsf</span>`,
    },
    {
      title: "dfsdfs",
      info: "lorem ipsum dolor sit amet",
      content: "RP 7,050,500",
      footer_icon: "",
      footer: `<span color='red'>fsf</span>`,
    },
  ];

  return (
    <>
      {dataSalesBox.map((res, i) => (
        <div className="col-lg-3 mb-4" key={i}>
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
    </>
  );
}
