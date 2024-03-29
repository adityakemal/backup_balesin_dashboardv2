import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button, Image, Modal, Table, Tag, message } from "antd";
import React, { useEffect, useState } from "react";

import ModalEditProduct from "./ModalEditProduct";
import { useDispatch, useSelector } from "react-redux";
import { rupiahFormat } from "../../../app/helper";
import { unwrapResult } from "@reduxjs/toolkit";
import { deleteProduct, getListProduct } from "../product.api";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ListProduct() {
  const dispatch = useDispatch();
  const { listProductData, activeOutlet } = useSelector(
    (state) => state.product
  );
  const { page } = useParams();
  const navigate = useNavigate();

  const [CurrentPage, setCurrentPage] = useState(page || 1);

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(listProductData);
  }, [listProductData]);

  const [ismodalDelete, setIsmodalDelete] = useState(false);
  const [ChoosedDelete, setChoosedDelete] = useState({});

  const handleModalDelete = (res) => {
    setIsmodalDelete((prev) => !prev);
    setChoosedDelete(() => res);
  };

  const handleGetLostProduct = () => {
    const params = {
      store_id: localStorage.getItem("store_id"),
      outlet: activeOutlet?.id,
      // mode: 1,
    };
    dispatch(getListProduct(params));
  };

  const handleOk = () => {
    console.log(ChoosedDelete);
    const data = {
      bot_id: localStorage.getItem("bot_id"),
      store_id: localStorage.getItem("store_id"),
      product_id: ChoosedDelete?.id,
    };
    dispatch(deleteProduct(data))
      .then(unwrapResult)
      .then((res) => {
        console.log(res);
        message.success("Product deleted!");
        handleCancel();
        handleGetLostProduct();
      })
      .catch((err) => {
        console.log(err.response);
        message.error("Delete failed!");
      });
  };

  const handleCancel = () => {
    setIsmodalDelete(false);
    setChoosedDelete(() => {});
  };

  const columns = [
    // {
    //   title: "No",
    //   dataIndex: "index",
    //   key: "index",
    //   render: (value, item, i) => i + 1,
    // },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      width: "160px",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (v) => (
        <p style={{ lineHeight: "normal", fontSize: 9, marginBottom: 0 }}>
          {v}
        </p>
      ),
    },
    {
      title: "category",
      dataIndex: "category",
      key: "category",
      sorter: (a, b) => a.category.localeCompare(b.category),
    },
    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
    },
    // {
    //   title: "Weight",
    //   dataIndex: "weight",
    //   key: "weight",
    //   // render: (v) => v.toString().replace(",", ", "),
    // },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      render: (v) =>
        v === "ACTIVE" ? (
          <Tag color="success">{v}</Tag>
        ) : (
          <Tag color="error">{v}</Tag>
        ),
      sorter: (a, b) => a.active.localeCompare(b.active),
    },
    {
      title: "option",
      dataIndex: "option",
      key: "option",
      render: (_, res) => (
        <div className="d-flex align-items-center">
          <pre>{JSON.stringify(_, 0, 2)}</pre>
          <Link
            to={`/product/edit/${activeOutlet?.market_id}/${activeOutlet?.id}/${res.id}`}>
            <Button
              type="primary"
              // size="small"
              className=" mx-1"
              onClick={() => console.log(res.id)}>
              <div className="d-flex align-items-center">
                <EditFilled className="" />
              </div>
            </Button>
          </Link>
          <Button
            //   type="danger"
            danger
            // size="small"
            className="mx-1"
            onClick={() => handleModalDelete(res)}>
            <div className="d-flex align-items-center">
              <DeleteFilled className="" />
            </div>
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="list-product">
      {/* <ModalEditProduct
        isEditModalOpen={isEditModalOpen}
        handleToggleEditModal={handleToggleEditModal}
      /> */}

      <Modal
        title="Confirm delete"
        open={ismodalDelete}
        onOk={handleOk}
        closeIcon={<></>}
        okText="Delete"
        onCancel={handleCancel}>
        <p>
          Are you sure want to delete this{" "}
          <b className="text-danger">"{ChoosedDelete?.name}"</b> ?
        </p>
      </Modal>
      <div className="gbox bg-white">
        <div className="d-flex justify-content-between align-items-center">
          {/* <p className="title">List Product</p> */}
          {/* <Button
            type="primary"
            className="bg-warning text-dark"
            onClick={handleToggleCreateModal}>
            + Add New Product
          </Button> */}
        </div>
        <div className="tablecustom">
          <div className="mt-3 tablewrap">
            <Table
              dataSource={data}
              columns={columns}
              rowKey={(record) => record.id}
              expandable={{
                expandedRowRender: (record) => (
                  <div className="expand-box">
                    {record?.list_variant.map((res, i) => (
                      <div
                        key={i}
                        className={` wrapboxes d-flex justify-content-between align-items-center  
                        ${
                          record?.list_variant?.length !== i + 1 &&
                          "border-bottom"
                        } px-3`}>
                        <div>
                          <Image
                            className="border"
                            src={res?.main_image}
                            alt=""
                            width={80}
                            style={{
                              height: 60,
                              width: 80,
                              objectFit: "contain",
                            }}
                          />
                        </div>
                        <div className=" p-2 border-rounded">
                          <p className="label">Variant Name</p>
                          {res.name}
                        </div>
                        <div className=" p-2 border-rounded">
                          <p className="label">Stock</p>
                          {res.qty}
                        </div>
                        <div className=" p-2 border-rounded">
                          <p className="label">Price</p>
                          {rupiahFormat(res.price)}
                        </div>
                        <div className=" p-2 border-rounded">
                          <p className="label">Discount Price</p>
                          {rupiahFormat(res.discount)}
                        </div>
                        <div className=" p-2 border-rounded">
                          <p className="label">Size</p>
                          {res.size.toString()}
                        </div>
                      </div>
                    ))}
                  </div>
                ),
                rowExpandable: (record) => record.name !== "Not Expandable",
              }}
              pagination={{
                current: parseInt(CurrentPage),
                // defaultCurrent: CurrentPage,
                onChange: (p) => {
                  setCurrentPage(p);
                  navigate(`/product/${p}`);
                },
                size: 10,
                showSizeChanger: true,
                // onShowSizeChange: (e, v) => console.log(e, v),
                showTotal: (total, range) => (
                  <span style={{ left: 0, position: "absolute", fontSize: 12 }}>
                    Showing {range[0]} to {range[1]} of {total} results
                  </span>
                ),
              }}
              scroll={{
                x: "100%",
                // y: 300,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
