import React, { useState } from "react";
import { Button, Table, Tag, Modal } from "antd";
import dayjs from "dayjs";
import { rupiahFormat } from "../../../app/helper";
import { useSelector } from "react-redux";

export default function TableDashboard({ title, dateTitle }) {
  const { loading, topTransaction } = useSelector((state) => state.dashboard);
  // {
  //   "outlet_id": 98,
  //   "outlet": "Sedjuk Bakmi & Kopi SCBD",
  //   "order_id": "sedj-SO-20230201-e90b2e-9668",
  //   "customer_name": "santii",
  //   "date": "2023-02-01 08:50:26",
  //   "amount": 1556450,
  //   "shipping_method": "Grab Express Instant",
  //   "payment_method": "ovo",
  //   "status": "expired"
  // },
  const dataSource = topTransaction;

  const columns = [
    {
      title: "Order Id",
      dataIndex: "order_id",
      key: "order_id",
    },
    {
      title: "CUSTOMER NAME",
      dataIndex: "customer_name",
      key: "customer_name",
    },
    {
      title: "date",
      dataIndex: "date",
      key: "date",
      render: (v) => dayjs(v).format("DD MMMM YYYY"),
    },
    {
      title: "amount",
      dataIndex: "amount",
      key: "amount",
      render: (v) => rupiahFormat(v),
    },
    {
      title: "outlet",
      dataIndex: "outlet",
      key: "outlet",
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
      render: (v) =>
        v === "delivered" ? (
          <b style={{ color: "green" }}>Delivered</b>
        ) : v === "canceled" ? (
          <b style={{ color: "red" }}>Canceled</b>
        ) : (
          <b style={{ color: "#f7dc13" }}>Expired</b>
        ),
    },
    {
      title: "option",
      dataIndex: "option",
      key: "option",
      render: (_, res) => (
        <Button
          style={{ background: "#F7DC13" }}
          onClick={() => showModal(res)}>
          Detail
        </Button>
      ),
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState(null);

  const showModal = (data) => {
    setDataModal(data);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="gbox bg-white">
      {/* ////////////// */}

      <Modal
        // title={`Detail`}
        style={{ padding: "0px" }}
        closable={false}
        className="custom-detail-modal"
        width="800px"
        open={isModalOpen}
        onOk={handleOk}
        footer={null}
        onCancel={handleCancel}>
        <>
          <div className="header w-100 bg-warning d-flex justify-content-end">
            <div className="pointer closemac" onClick={handleOk}></div>
          </div>
          <div className="container py-2 px-4">
            <div className="row row-cols-md-3 row-cols-sm-2 gx-0 border-bottom">
              <div className="col py-3">
                <p className="title mb-0">ORDER DATE</p>
                <span>01 Feb 2023</span>
              </div>
              <div className="col py-3">
                <p className="title mb-0">ORDER ID</p>
                <span>#0202038383</span>
              </div>
            </div>

            <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 gx-0">
              <div className="col py-3">
                <p className="title mb-0">Name</p>
                <span>Kemal Aditya </span>
              </div>
              <div className="col py-3">
                <p className="title mb-0">Total</p>
                <span>{rupiahFormat(234323)}</span>
              </div>
              <div className="col py-3">
                <p className="title mb-0">Voucher</p>
                <span>-</span>
              </div>
              <div className="col py-3">
                <p className="title mb-0">Phone Number</p>
                <span>08123242455 </span>
              </div>
              <div className="col py-3">
                <p className="title mb-0">Order List</p>
                <ul className="p-0">
                  <li>
                    <p className="mb-0 litem">Paket Sedjuk 01</p>
                    <span>{rupiahFormat(234323)}</span>
                  </li>
                  <li>
                    <p className="mb-0 litem">Paket Sedjuk 02</p>
                    <span>{rupiahFormat(234323)}</span>
                  </li>
                  <li>
                    <p className="mb-0 litem">Minuman Es teh Manis dingin</p>
                    <span>{rupiahFormat(234323)}</span>
                  </li>
                </ul>
              </div>
              {/* <div className="col py-3">
              <p className="title mb-0">Voucher</p>
              <span>-</span>
            </div> */}
            </div>
          </div>
        </>
      </Modal>

      {/* //////////////  */}
      <div className="tablecustom">
        <p className="title mb-0">{title}</p>
        <p className="date mb-0">
          {dayjs(dateTitle[0]).format("DD MMMM YYYY")} to{" "}
          {dayjs(dateTitle[1]).format("DD MMMM YYYY")}
        </p>
        <div className="mt-4 tablewrap">
          <Table
            dataSource={dataSource}
            loading={loading}
            columns={columns}
            pagination={false}
          />
        </div>
      </div>
    </div>
  );
}
