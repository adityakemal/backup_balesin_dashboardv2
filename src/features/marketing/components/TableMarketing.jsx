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
