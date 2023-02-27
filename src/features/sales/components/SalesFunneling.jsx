import React, { useState } from "react";
import CustomFunnelChart from "../../shared/components/CustomFunnelChart";
import dayjs from "dayjs";
import { Button, Modal, Table } from "antd";
import { rupiahFormat } from "../../../app/helper";

export default function SalesFunneling({ title }) {
  const [ActiveTab, setActiveTab] = useState(0);
  const data = [
    { width: "100%", name: "CHAT", value: 2020202, color: "#0090FF" },
    { width: "90%", name: "REGISTRASI", value: 135, color: "#1AD598" },
    { width: "80%", name: "CHECKOUT", value: 25, color: "#F7DC1366" },
    { width: "70%", name: "PAID TRANSACTION", value: 15, color: "#F7DC1399" },
    { width: "60%", name: "CANCELLED", value: 5, color: "#F7DC13" },
  ];
  const dataSource = [0, 1, 1, 1, 2, 0].map((res, i) => ({
    date: new Date(),
    time: new Date(),
    location: "Bandung",
    phone: "081203838383",
    name: "John Wick",
    outlet: "Pjaten Village",
  }));

  const columns = [
    {
      title: "DATE",
      dataIndex: "date",
      key: "date",
      render: (v) => <div className="">{dayjs(v).format("DD MMM YYYY")}</div>,
    },
    {
      title: "TIME",
      dataIndex: "time",
      key: "time",
      render: (v) => <div className="">{dayjs(v).format("HH:mm")}</div>,
    },
    {
      title: "LOCATION",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "PHONE NUMBER",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "CUSTOMER NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "OUTLET",
      dataIndex: "outlet",
      key: "outlet",
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

  const handleChangeTab = (val) => setActiveTab(val);
  return (
    <section className="sales-funneling gbox bg-white mb-4">
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
                <p className="title mb-0">REGISTRATION DATE</p>
                <span>01 Feb 2023</span>
              </div>
              <div className="col py-3">
                <p className="title mb-0">CHATKEY</p>
                <span>#0202038383</span>
              </div>
            </div>

            <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 gx-0">
              <div className="col py-3">
                <div className="mb-3">
                  <p className="title mb-0">Name</p>
                  <span>Kemal Aditya </span>
                </div>
                <div className="mb-3">
                  <p className="title mb-0">Data Birth</p>
                  <span>{dayjs().format("DD MMM YYYY")}</span>
                </div>
                <div className="mb-3">
                  <p className="title mb-0">Email</p>
                  <span>kemal@gamil.com </span>
                </div>
                <div className="mb-3">
                  <p className="title mb-0">Phone</p>
                  <span>0812312121221 </span>
                </div>
              </div>
              <div className="col py-3">
                <div className="mb-3">
                  <p className="title mb-0">Address</p>
                  <span>Jl. Kuningan Madya Unit 2029 </span>
                </div>
                <div className="mb-3">
                  <p className="title mb-0">Regency</p>
                  <span>Bandung </span>
                </div>
                <div className="mb-3">
                  <p className="title mb-0">District</p>
                  <span>bandung Kulon</span>
                </div>
                <div className="mb-3">
                  <p className="title mb-0">Subdistrict</p>
                  <span>Cimekar</span>
                </div>
                <div className="mb-3">
                  <p className="title mb-0">Zipcode</p>
                  <span>90234 </span>
                </div>
              </div>
              <div className="col py-3">
                <div className="mb-3">
                  <p className="title mb-0">Location</p>
                  <span>-000226, 0292928 </span>
                  <div className="mt-2">
                    <div
                      className="box w-100 bg-light"
                      style={{ height: 150 }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Modal>
      <div className="title">{title}</div>
      <div className="date">12:15 PM at 16th January 2023</div>
      <div className="py-4  row">
        <div className="col-md-6">
          <CustomFunnelChart
            data={data}
            activeTab={ActiveTab}
            handleChangeTab={handleChangeTab}
          />
        </div>
      </div>
      <div className="py-4 border-top">
        {/* <div className="tab-custom d-flex justify-content-between mb-3">
          {data.map((res, i) => (
            <div
              className={`tab d-flex justify-content-center align-items-center  w-100  pointer ${
                i == ActiveTab && "activetab"
              }`}
              key={i}
              onClick={() => handleChangeTab(i)}>
              {res.name}
            </div>
          ))}
        </div> */}
        <div className="title mb-4" style={{ textTransform: "capitalize" }}>
          {data[ActiveTab].name.toLocaleLowerCase()} List
        </div>
        {/* <div className="date">12:15 PM at 16th January 2023</div> */}
        <div className="tablefunnel">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </section>
  );
}
