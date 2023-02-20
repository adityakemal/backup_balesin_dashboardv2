import React, { useState } from "react";
import { Button, Table, Tag, Modal } from "antd";
import dayjs from "dayjs";
import { rupiahFormat } from "../../../app/helper";
import moment from "moment";

export default function TableMarketing({ title, detailComp }) {
  const dataSource = [0, 1, 1, 1, 2, 0, 1, 2, 2, 0].map((res, i) => ({
    order_id: "081203838383",
    customer_name: "kemal",
    date: new Date(),
    amount: 12232223,
    outlet: "Pjaten Village",
    status: res,
  }));

  const columns = [
    {
      title: "phone number",
      dataIndex: "order_id",
      key: "order_id",
    },
    {
      title: "CUSTOMER NAME",
      dataIndex: "customer_name",
      key: "customer_name",
    },
    {
      title: "registration date",
      dataIndex: "date",
      key: "date",
      render: (v) => (
        <div className="text-primary">{dayjs(v).format("DD MMM YYYY")}</div>
      ),
    },
    {
      title: "number of order",
      dataIndex: "amount",
      key: "amount",
      render: (v) => v,
    },
    {
      title: "last order date",
      dataIndex: "date",
      key: "date",
      render: (v) => (
        <div className="text-success">{dayjs(v).format("DD MMM YYYY")}</div>
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

  const dataChat = [
    {
      id: "admin",
      name: "sarirotiwa",
      text: `Terima kasih Anda telah berhasil melakukan pembayaran untuk order id *sari-SO-20210915-486cbd-4574* Kami akan mengantar pesanan Sari Roti ke tempat Anda sesuai dengan tanggal pengiriman. Untuk mendapatkan informasi promo dan berita terkini dari Sari Roti, Ikuti social media Sari Roti : FB: www.facebook.com/SariRotiRotinyaIndonesia/ IG: https://www.instagram.com/sariroti_rotinyaindonesia/ Ketik ORDER untuk memesan lagi atau MENU untuk kembali ke menu utama.`,
    },
    {
      id: "cus",
      name: "mira",
      text: `order`,
      date: moment().format("DD MMM YYYY"),
    },
  ];
  return (
    <div className="gbox bg-white">
      {/* ////////////// */}

      <Modal
        // title={`Detail`}
        style={{ padding: "0px" }}
        closable={false}
        className="custom-detail-modal"
        width="950px"
        open={isModalOpen}
        onOk={handleOk}
        footer={null}
        onCancel={handleCancel}>
        <>
          <div className="header w-100 bg-warning d-flex justify-content-end">
            <div className="pointer closemac" onClick={handleOk}></div>
          </div>
          <div className="container">
            <div className="row border-bottom bg-light">
              <div className="col-md-4 py-3 border-end">
                <p className="title mb-0">USER DETAIL</p>
              </div>
              <div className="col-md-8 py-3">
                <p className="title mb-0">TRANSCRIPT</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4  border-end">
                <div className="py-3 border-bottom">
                  <p className="title mb-0">Mira Iskarnita</p>
                  <span>08126262625</span>
                </div>

                <div className="py-2 border-bottom d-flex justify-content-between sourcebox">
                  <div className="">
                    <p className="title mb-0">SOURCE</p>
                  </div>
                  <div className=" w-75">
                    <p className="mb-0">WhatsApp</p>
                  </div>
                </div>
                <div className="py-2 border-bottom d-flex justify-content-between sourcebox">
                  <div className="">
                    <p className="title mb-0">EMAIL</p>
                  </div>
                  <div className=" w-75">
                    <p className="mb-0">mira@email.com</p>
                  </div>
                </div>
                <div className="py-2 border-bottom d-flex justify-content-between sourcebox">
                  <div className="">
                    <p className="title mb-0">ADDRESS</p>
                  </div>
                  <div className=" w-75">
                    <p className="mb-0">
                      Jalan Dadali no 34, Rt 004/ Rw 005 Tanah Sereal, Tanah
                      Sereal Bogor
                    </p>
                  </div>
                </div>
                <div className="py-2 border-bottom d-flex justify-content-between sourcebox">
                  <div className="">
                    <p className="title mb-0">SINCE</p>
                  </div>
                  <div className=" w-75">
                    <p className="mb-0">January 2020</p>
                  </div>
                </div>

                <div className="py-2 border-bottom d-flex justify-content-between sourcebox">
                  <div className="">
                    <p className="title mb-1">RECENT ORDER</p>
                    <p className="mb-1">
                      <b className="text-success">98483838383</b>
                    </p>
                    <p className="mb-1">
                      <b className="text-success">98483838383</b>
                    </p>
                    <p className="mb-1">
                      <b className="text-success">98483838383</b>
                    </p>
                    <p className="mb-1">
                      <b className="text-success">98483838383</b>
                    </p>
                  </div>
                  <div className=" w-50">
                    <p className="title mb-1">TOTAL ORDER</p>
                    <p className="mb-1">20</p>
                  </div>
                </div>

                <div className="py-2 border-bottom d-flex justify-content-between sourcebox">
                  <div className="w-50">
                    <p className="title mb-1">MOST PURCHASED ITEM</p>
                    <p className="mb-0">Roti Tawar Special</p>
                    <p className="mb-0">Roti Sobek Special</p>
                  </div>
                  <div className=" w-50">
                    <p className="title mb-1">AVERAGE PURCHASED</p>
                    <p className="mb-0">{rupiahFormat(20000)}</p>
                  </div>
                </div>

                <div className="py-2  d-flex justify-content-between sourcebox">
                  <div className="">
                    <p className="title mb-1">CHAT WITH LIVE AGENT</p>
                    <p className="mb-3">
                      <b className="text-primary">ticketing ID 33838383</b>
                    </p>
                  </div>
                </div>
              </div>

              {/* ///////////// */}
              <div className="col-md-8 py-3 bg-light">
                <div className="box-chat ">
                  {dataChat.map((res, i) =>
                    res.id === "admin" ? (
                      <div className="buble w-100 d-flex mb-3">
                        <div className="me-1">
                          <div className="ava"></div>
                        </div>
                        <div>
                          <div
                            className="box"
                            style={{ borderRadius: "0 10px 10px 10px" }}>
                            {res.text}
                          </div>
                          <div className="small">{res.name}</div>
                        </div>
                      </div>
                    ) : (
                      <div className="buble w-100 d-flex justify-content-end align-items-end flex-column mb-3">
                        <div className="">
                          <div
                            className="box bg-light"
                            style={{ borderRadius: "10px 10px 0px 10px" }}>
                            {res.text}
                          </div>
                          <div className="small">{res.date}</div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      </Modal>

      {/* //////////////  */}
      <div className="tablecustom">
        <p className="title mb-0">{title}</p>
        <p className="date mb-0">12:15 PM at 16th January 2023</p>
        <div className="mt-4">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </div>
  );
}
