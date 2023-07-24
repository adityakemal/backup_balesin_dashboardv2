import { Button, Form, Input, Modal, Select, Switch, message } from "antd";
import React, { useEffect, useState } from "react";

import ModalVariantForm from "./ModalVariantForm";
import { rupiahFormat } from "../../../app/helper";
import {
  IoCreateOutline,
  IoPencil,
  IoPencilOutline,
  IoPencilSharp,
  IoTrash,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct, putProduct } from "../product.api";
import { unwrapResult } from "@reduxjs/toolkit";
import { useParams, useNavigate } from "react-router-dom";
import { EditFilled } from "@ant-design/icons";
import ModalVariantEditForm from "./ModalVariantEditForm";

export default function FormEditProduct() {
  const navigate = useNavigate();
  const { outletId, marketId, productId } = useParams();
  const [variantList, setVariantList] = useState([]);
  const [isModalVariant, setIsModalVariant] = useState(false);
  const dispatch = useDispatch();
  const [formProduct] = Form.useForm();
  const { detailProduct } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getDetailProduct({ id: productId }));
  }, [productId]);

  useEffect(() => {
    formProduct.setFieldsValue(detailProduct);
    setVariantList(() => detailProduct?.variants);
  }, [detailProduct]);

  const onReset = () => {
    formProduct.resetFields();
  };

  const onFinish = (values) => {
    if (variantList.length === 0) {
      message.error("Add minimum 1 variant!");
      return;
    }
    const data = values;
    data.product_id = productId;
    data.bot_id = localStorage.getItem("bot_id");
    data.market_id = null;
    data.store_id = localStorage.getItem("store_id");
    data.outlet_id = null;
    data.description = values.description || "";

    data.variant = variantList.map((r) => ({
      name: r.name,
      id: r.id,
      image: r.image,
      price: r.price,
      discount: r.discount,
      qty: r.qty,
      size: r.size.toString(),
    }));

    dispatch(putProduct(data))
      .then(unwrapResult)
      .then((res) => {
        console.log(res, "RESIULT SAVE DATA");
        message.success("Product edited! 👍");
        onReset();
        setVariantList(() => []);
        navigate(-1);
      })
      .catch((err) => console.log(err.response));
    console.log("Success:", data);
  };

  const [DataFillVariant, setDataFillVariant] = useState({});

  const handleEditVariant = (variantObj) => {
    handleModalVariant();
    setDataFillVariant(variantObj);
  };

  const handleModalVariant = () => setIsModalVariant((prev) => !prev);

  const handleDeleteVariant = (id) =>
    setVariantList((prev) => prev.filter((f) => f.id !== id));
  return (
    <div className="gbox bg-white">
      <Form
        form={formProduct}
        name="createAgentForm"
        layout="vertical"
        initialValues={{
          status: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
        // disabled={loading}
      >
        <div className="row">
          <div className="col-md-6">
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}>
              <Input type="text" />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item
              label="Category"
              name="category"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}>
              {/* <Select>
                <Select.Option value="Fashion">Fashion</Select.Option>
                <Select.Option value="Food and baverage">
                  Food and baverage
                </Select.Option>
              </Select> */}
              <Input type="text" />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  //   required: true,
                  //   message: "This field is required",
                },
              ]}>
              <Input.TextArea />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item
              label="Status"
              name="status"
              valuePropName="checked"
              // rules={[
              //   {
              //     required: true,
              //     message: "This field is required",
              //   },
              // ]}
            >
              <Switch checkedChildren="ACTIVE" unCheckedChildren="NOT-ACTIVE" />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item
              label="Weight (Grams)"
              name="weight"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}>
              <Input type="number" suffix="Grams" />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item
              label="SKU (Stock Keeping Unit)"
              name="sku"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}>
              <Input type="text" />
            </Form.Item>
          </div>
        </div>
      </Form>
      <div className="gbox bg-light">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="title-box mb-0 ">
            Variant {`( ${variantList?.length} )`}
          </p>
          <Button onClick={handleModalVariant} type="primary">
            + Add Variant
          </Button>
        </div>
        <div className="variant-box ">
          {variantList?.map((res, i) => (
            <div
              key={i}
              className={` wrapboxes d-flex justify-content-between align-items-center  
                        ${
                          variantList?.length !== i + 1 && "border-bottom"
                        } px-3`}>
              <img src={res?.image} alt="" />
              <div className=" p-2 border-rounded">
                <p className="label">Name</p>
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
                <p className="label">Discount</p>
                {rupiahFormat(res.discount)}
              </div>
              <div className=" p-2 border-rounded">
                <p className="label">Size</p>
                {res.size.toString()}
              </div>
              <div className=" p-2 border-rounded d-flex">
                <p className="label"></p>
                <Button
                  className="d-flex align-items-center me-2"
                  onClick={() => handleEditVariant(res)}>
                  <IoCreateOutline color="blue" size={24} />
                </Button>
                <Button
                  onClick={() => handleDeleteVariant(res.id)}
                  className="d-flex align-items-center ms-2">
                  <IoTrash color="red" size={24} className="pointer" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ModalVariantEditForm
        isModalVariant={isModalVariant}
        handleModalVariant={handleModalVariant}
        setVariantList={setVariantList}
        DataFillVariant={DataFillVariant}
      />
      <hr />
      <div className="d-flex justify-content-center">
        <Button
          type="primary"
          htmlType="submit"
          form="createAgentForm"
          shape="round"
          // loading
          size="large"
          className="text-dark bg-warning px-5">
          EDIT PRODUCT
        </Button>
      </div>
    </div>
  );
}
