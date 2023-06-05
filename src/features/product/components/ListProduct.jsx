import {
  DeleteColumnOutlined,
  DeleteFilled,
  DeleteOutlined,
  EditFilled,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import ModalCreateAgent from "./ModalEditProduct";
import ModalEditProduct from "./ModalEditProduct";
import { getListProduct } from "../product.api";
import { useDispatch, useSelector } from "react-redux";

export default function ListProduct() {
  const dispatch = useDispatch();
  const { outletId } = useSelector((state) => state.shared);
  const { listProductData } = useSelector((state) => state.product);

  useEffect(() => {
    const params = {
      store_id: localStorage.getItem("store_id"),
      outlet: outletId,
      // mode: 1,
    };
    dispatch(getListProduct(params));
  }, [outletId]);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(listProductData);
  }, [listProductData]);

  const dataSource = [0, 1, 1, 1, 2].map((res, i) => ({
    agent_name: "wakwaw",
    email: "wakwaw@gmail.com",
    department: "CS",
    roles: ["Agent", "Supervisor"],
    issues: ["issues1", "issues2"],
  }));

  const columns = [
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
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
      // render: (v) => v.toString().replace(",", ", "),
    },
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
    },
    {
      title: "option",
      dataIndex: "option",
      key: "option",
      render: (_, res) => (
        <div className="d-flex align-items-center">
          <Button
            type="primary"
            // size="small"
            className=" mx-1"
            onClick={handleToggleEditModal}>
            <div className="d-flex align-items-center">
              <EditFilled className="me-1" />
            </div>
          </Button>
          <Button
            //   type="danger"
            danger
            // size="small"
            className="mx-1"
            // onClick={() => showModal(res)}
          >
            <div className="d-flex align-items-center">
              <DeleteFilled className="me-1" />
            </div>
          </Button>
        </div>
      ),
    },
  ];

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const handleToggleCreateModal = () => setIsCreateModalOpen((prev) => !prev);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleToggleEditModal = () => setIsEditModalOpen((prev) => !prev);

  return (
    <div className="list-product">
      <ModalCreateAgent
        isCreateModalOpen={isCreateModalOpen}
        handleToggleCreateModal={handleToggleCreateModal}
      />
      <ModalEditProduct
        isEditModalOpen={isEditModalOpen}
        handleToggleEditModal={handleToggleEditModal}
      />
      <div className="gbox bg-white">
        <div className="d-flex justify-content-between align-items-center">
          <p className="title">List Product</p>
          <Button
            type="primary"
            className="bg-warning text-dark"
            onClick={handleToggleCreateModal}>
            + Add New Product
          </Button>
        </div>
        <div className="tablecustom">
          <div className="mt-4 tablewrap">
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
                        className="d-flex justify-content-between px-3">
                        <img src={res?.main_image} alt="" />
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
                          {res.price}
                        </div>
                        <div className=" p-2 border-rounded">
                          <p className="label">Discount Price</p>
                          {res.discount}
                        </div>
                        <div className=" p-2 border-rounded">
                          <p className="label">Size</p>
                          {res.size}
                        </div>
                      </div>
                    ))}
                  </div>
                ),
                rowExpandable: (record) => record.name !== "Not Expandable",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
