import React from "react";

import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Spin, Tooltip } from "antd";
import { useSelector } from "react-redux";
import { rupiahFormat } from "../../../app/helper";

import dana from "../../../images/paymentLogo/dana.png";
import ovo from "../../../images/paymentLogo/ovo.png";
import shopeepay from "../../../images/paymentLogo/shopeepay.png";

import gosend from "../../../images/deliveryLogo/gosend.png";
import grabexpress from "../../../images/deliveryLogo/grabexpress.png";

export default function CanceledBoxes() {
  const { loading, overViewData } = useSelector((state) => state.dashboard);
  const {
    avg_basket_size,
    loss_sales,
    potential_sales,
    selected_outlet_id,
    top_deliv_method,
    top_deliv_percentage,
    top_item,
    top_payment_method,
    top_payment_percentage,
    total_sales,
  } = overViewData;

  const dataSalesBox = [
    {
      title: "EXPIRED PAYMENT",
      type: "rupiah",
      info: "lorem ipsum dolor sit amet",
      content: potential_sales,
      // footer_icon: "down",
      // footer: `<span color='red'>fsf</span>`,
    },
    {
      title: "CANCELLED ORDER",
      type: "rupiah",
      info: "lorem ipsum dolor sit amet",
      content: total_sales,
      // footer_icon: "up",
      // footer: `<span color='red'>fsf</span>`,
    },
    {
      title: "CONVERSION",
      type: "rupiah",
      info: "lorem ipsum dolor sit amet",
      content: avg_basket_size,
      footer_icon: "",
      // footer: `<span color='red'>fsf</span>`,
    },
    // {
    //   title: "TOP DELIVERY METHOD",
    //   type: "logo",
    //   info: "lorem ipsum dolor sit amet",
    //   content:
    //     top_deliv_method === "Grab Express Instant" ? grabexpress : gosend,
    //   footer_icon: "",
    //   footer:
    //     top_deliv_percentage &&
    //     `<span class='text-blue me-2'>${top_deliv_percentage}%</span> From others delivery service`,
    // },
    // {
    //   title: "TOP PAYMENT METHOD",
    //   type: "logo",
    //   info: "lorem ipsum dolor sit amet",
    //   content:
    //     top_payment_method === "ovo"
    //       ? ovo
    //       : top_payment_method === "dana"
    //       ? dana
    //       : shopeepay,
    //   footer_icon: "",
    //   footer:
    //     top_payment_percentage &&
    //     `<span class='text-blue me-2'>${top_payment_percentage}%</span> From others payment method`,
    // },
    // {
    //   title: "TOP ITEM",
    //   type: "text",
    //   info: "lorem ipsum dolor sit amet",
    //   content: top_item,
    //   footer_icon: "",
    //   // footer: `<span color='red'>fsf</span>`,
    // },
  ];
  return (
    <>
      {dataSalesBox.map((res, i) => (
        <div className="col-md-4 mb-4" key={i}>
          <div className="box bg-white gbox ">
            <div className="d-flex align-items-center title-box ">
              <p className=" mb-0 me-2">{res?.title}</p>
              <Tooltip title={res?.info}>
                <InfoCircleOutlined />
              </Tooltip>
            </div>
            {res.type === "rupiah" && (
              <div className="content-box">{rupiahFormat(res?.content)}</div>
            )}
            {res.type === "logo" && (
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
            )}
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
    </>
  );
}
