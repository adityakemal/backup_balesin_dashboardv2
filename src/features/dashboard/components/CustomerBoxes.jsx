import React from "react";

import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { useSelector } from "react-redux";
import { numberFormat, rupiahFormat } from "../../../app/helper";
import { useEffect } from "react";

export default function CustomerBoxes() {
  const { customerOverViewData } = useSelector((state) => state.dashboard);
  const { length_reg, length_trx, length_cust, conversion } =
    customerOverViewData;

  const dataSalesBox = [
    {
      title: "TOTAL USER",
      type: "number",
      // info: "lorem ipsum dolor sit amet",
      content: length_cust,
      // footer_icon: "down",
      // footer: `<span color='red'>from last week</span>`,
    },
    {
      title: "NUMBER OF REGISTRATION",
      type: "number",
      // info: "lorem ipsum dolor sit amet",
      content: length_reg,
      // footer_icon: "up",
      // footer: `<span color='red'>from last week</span>`,
    },
    {
      title: "NUMBER OF ORDERS",
      type: "number",
      // info: "lorem ipsum dolor sit amet",
      content: length_trx,
      footer_icon: "",
      // footer: `<span color='red'>from last week</span>`,
    },
    {
      title: "CONVERSION",
      type: "string",
      // info: "lorem ipsum dolor sit amet",
      content: `${conversion}%`,
      footer_icon: "",
      // footer: `<span color='red'>from last week</span>`,
    },
  ];

  return (
    <div className="row sales-boxes">
      {dataSalesBox.map((res, i) => (
        <div className="col-xl-3 col-lg-6 mb-4" key={i}>
          <div className="box bg-white gbox ">
            <div className="d-flex align-items-center title-box ">
              <p className=" mb-0 me-2">{res?.title}</p>
              {/* <Tooltip title={res?.info}>
                <InfoCircleOutlined />lg
              </Tooltip> */}
            </div>
            {res.type === "rupiah" && (
              <div className="content-box">{rupiahFormat(res?.content)}</div>
            )}
            {res.type === "number" && (
              <div className="content-box">{numberFormat(res?.content)}</div>
            )}

            {res.type === "string" && (
              <div className="content-box">{res?.content}</div>
            )}
            {/* {res.type === "logo" && (
              <div className="content-box position-relative">
                {top_deliv_method !== "-" ? (
                  <img
                    src={res.content}
                    alt={"logo"}
                    className="img-fluid "
                    style={{ height: 24 }}
                  />
                ) : (
                  "-"
                )}
              </div>
            )} */}
            {res.type === "text" && (
              <p className="mb-0">
                <b>{res?.content}</b>
              </p>
            )}

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
              <span
                dangerouslySetInnerHTML={{ __html: res?.footer || `<p></p>` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
