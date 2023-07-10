import {
  CameraOutlined,
  LoadingOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { nanoid } from "nanoid";

import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Spin,
  Upload,
  message,
} from "antd";
import axios from "axios";
import React, { useState } from "react";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

// {
//   "mode": "mt",
//   "bot_id": 103,
//   "store_id": 76,
//   "market_id": 37,
//   "outlet_id": 74,
//   "name": "test",
//   "description": "desc",
//   "category": "Fashion",
//   "weight": "10",
//   "sku": "1111",
//   "variant": [
//       {
//           "name": "var 1",
//           "image": "https://repo-platform.s3.ap-southeast-1.amazonaws.com/balesin-faq/undefined/1688956292554.png",
//           "price": 100000,
//           "discount": 0,
//           "qty": 20,
//           "size": [
//               "l",
//               "M",
//               "xl"
//           ]
//       }
//   ],
//   "status": true
// }

// const beforeUpload = (file) => {
//   const isJpgOrPng =
//     file.type === "image/jpeg" ||
//     file.type === "image/png" ||
//     file.type === "image/jpg";
//   if (!isJpgOrPng) {
//     message.error("You can only upload JPG/PNG file!");
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error("Image must smaller than 2MB!");
//   }
//   return isJpgOrPng && isLt2M;
// };

export default function ModalVariantForm({
  isModalVariant,
  handleModalVariant,
  setVariantList,
}) {
  const [formVariant] = Form.useForm();
  const onReset = () => {
    formVariant.resetFields();
  };

  const onFinish = (values) => {
    values.image = imageUrl;
    values.id = nanoid();
    console.log("Success:", values);
    setVariantList((prev) => [...prev, values]);
    handleModalVariant();
    setImageUrl("");
    onReset();
  };
  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleChangeImage = async (info) => {
    // if (info.file.status === "uploading") {
    //   setLoading(true);
    //   return;
    // }
    setLoading(true);
    const isLt2M = info.target.files[0].size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
      return;
    }

    console.log(info.target.files[0]);
    // if (info.file.status === "done") {
    getBase64(info.target.files[0], async (url) => {
      // setLoading(false);
      // console.log(url, "URLLLLL");

      try {
        // console.log(imageBase, "IMAGE BASE");
        const response = await axios.post(
          "https://faq.balesin.id/api/custom/upload",
          {
            file: url,
            file_name: info?.target?.files[0]?.name,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTgwNywiZW1haWwiOiJiYWxlc2luaWRAZ21haWwuY29tIiwiaWF0IjoxNjg2MTE1NjkxMDU2LCJleHAiOjE2ODYxMTU2OTEwNTZ9.IY6DvNWrVDn7rMuzQI6YS00wm47IO8KMxxMF_DU93G4",
            },
          }
        );
        setImageUrl(response.data.response);
        // console.log(response.data, ">>>>responsedataimage");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        message.error("Upload Failed!");
        console.log(error.response);
      }
    });
    // }
    //   // Get this url from response in real world.
  };

  return (
    <Modal
      closable={false}
      title={<p className="text-center">Add New Variant</p>}
      open={isModalVariant}
      width={700}
      maskClosable={false}
      okText="Add Variant"
      okButtonProps={{
        htmlType: "submit",
        form: "createNewVariant",
        className: "bg-warning text-dark",
      }}
      //   onOk={handleOk}
      onCancel={() => handleModalVariant()}>
      <Form
        id="createNewVariant"
        layout="horizontal"
        labelCol={{
          span: 5,
        }}
        initialValues={{
          stock: 0,
        }}
        form={formVariant}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        // disabled={loading}
      >
        <div className="row">
          <div className="col-md-12">
            <Form.Item
              label="Variant Name"
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
          <div className="col-md-12">
            <Form.Item
              label="Price"
              name="price"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}>
              <Input type="number" />
            </Form.Item>
          </div>
          <div className="col-md-12">
            <Form.Item
              label="Discount"
              name="discount"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}>
              <Input type="number" />
            </Form.Item>
          </div>
          <div className="col-md-12">
            <Form.Item
              label="Image"
              name="image"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}>
              {/* {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <Upload
                  name="avatar"
                  maxCount={1}
                  htmlType="button"
                  listType="picture-card"
                  className="avatar-uploader"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}>
                  <button type="button">add</button>
                </Upload>
              )} */}
              <div>
                <label
                  for="inputimage"
                  style={{
                    width: 100,
                    height: 100,
                    overflow: "hidden",
                    borderRadius: 6,
                  }}
                  className="d-flex align-items-center justify-content-center border pointer">
                  {loading ? (
                    <Spin />
                  ) : (
                    <>
                      {imageUrl ? (
                        <img
                          accept="image/jpg, image/jpeg, image/png"
                          src={imageUrl}
                          alt="avatar"
                          style={{
                            height: 100,
                            width: 100,
                            objectFit: "contain",
                          }}
                          // className="ms-5"
                        />
                      ) : (
                        <CameraOutlined />
                      )}
                    </>
                  )}
                </label>
                <input
                  id="inputimage"
                  type="file"
                  onChange={handleChangeImage}
                  style={{ display: "none" }}
                />
              </div>
            </Form.Item>
          </div>

          <div className="col-md-12">
            <Form.Item
              label="Stock"
              name="qty"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}>
              <Input type="number" />
            </Form.Item>
          </div>
          <div className="col-md-12">
            <Form.Item
              label="Product Size"
              name="size"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}>
              {/* <Input type="number" /> */}
              <Select
                mode="tags"
                style={{
                  width: "100%",
                }}
                // onChange={() => {}}
                tokenSeparators={[","]}
                // options={[]}
              />
            </Form.Item>
          </div>
        </div>
      </Form>
    </Modal>
  );
}
