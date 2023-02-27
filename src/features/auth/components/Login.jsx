// import React, { useState } from 'react';
// import { unwrapResult } from '@reduxjs/toolkit';
// // import { Button, Checkbox, Form, Input, notification } from 'antd';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { postLogin } from '../auth.api';

// import { Formik } from 'formik'

// import { handleRegister } from '../auth.reducer';

// const Login = () => {
//     // const { loading, isRegister } = useSelector(state => state.auth)

//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const onFinish = (values) => {
//          localStorage.setItem('auth', true)
//          localStorage.setItem('token', 'dummy-token-here')
//          navigate('/home')

//         console.log('Success:', values);
//         // dispatch(postLogin(values))
//         //     .then(unwrapResult)
//         //     .then(async (res) => {

//         //         await localStorage.setItem('auth', true)
//         //         await localStorage.setItem('token', 'dummy-token-here')

//         //         await navigate('/home')

//         //     })
//         //     .catch(err => {
//         //         console.log(err)
//         //         notification.error({
//         //             message: 'Error Login',
//         //             description:
//         //                 'Please enter the correct username and password.',
//         //         });
//         //     })
//     };

//     const onFinishFailed = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//     };

//     const validationSchema = Yup.object().shape({
//         email: Yup.string()
//           .email("Must be an email")
//           .required("This field is required"),
//         password: Yup.string()
//           .min(6, "At least 6 characters")
//           .required("This field is required")
//       });

//     // return (
//     //     <>
//     //         <Form
//     //             name="basic"
//     //             layout="vertical"
//     //             initialValues={{
//     //                 remember: true,
//     //             }}
//     //             onFinish={onFinish}
//     //             onFinishFailed={onFinishFailed}
//     //             autoComplete="on"
//     //             disabled={loading}
//     //         >
//     //             <Form.Item
//     //                 label="Email"
//     //                 name="email"
//     //                 rules={[
//     //                     {
//     //                         required: true,
//     //                         message: 'Silahkan masukan email anda!',
//     //                     },
//     //                 ]}
//     //             >
//     //                 <Input type='email' />
//     //             </Form.Item>

//     //             <Form.Item
//     //                 label="Sandi"
//     //                 name="password"
//     //                 rules={[
//     //                     {
//     //                         required: true,
//     //                         message: 'Silahkan masukan kata sandi anda!',
//     //                     },
//     //                 ]}
//     //             >
//     //                 <Input.Password />
//     //             </Form.Item>

//     //             <Form.Item
//     //                 name="remember_me"
//     //                 valuePropName="checked"
//     //             >
//     //                 <Checkbox>Ingat saya</Checkbox>
//     //             </Form.Item>

//     //             <Form.Item
//     //             >
//     //                 <Button type="primary" htmlType="submit" size='large' className='w-100' loading={loading}>
//     //                     Masuk
//     //                 </Button>
//     //             </Form.Item>
//     //         </Form>
//     //         {/* <p className="text-center text-primary pointer" onClick={() => dispatch(handleRegister())}>
//     //             {isRegister ? 'Masuk Disini!' : 'Daftar Disini!'}
//     //         </p> */}
//     //     </>
//     // );

//     return (
//         <Form>
//         {/* every formik-antd component must have the 'name' prop set: */}
//         <Input name='email' placeholder='email' />
//         <Input name='firstName' placeholder='First Name' />
//         {/* the rest of the api stays as is */}
//         <InputNumber name='age' min={0} />
//         <Checkbox name='newsletter'>Newsletter</Checkbox>
//       </Form>
//     )
// };
// export default Login;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, notification } from "antd";

import * as Yup from "yup";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../auth.api";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const onFinish = (values) => {
    console.log("Success:", values);
    // localStorage.setItem("auth", true);
    // localStorage.setItem("token", "dummy-token-here");

    dispatch(postLogin(values))
      .then(unwrapResult)
      .then(async (res) => {
        console.log(res, "result api login");
        await localStorage.setItem("auth", true);
        await localStorage.setItem("bot_id", res.bot_id);
        await localStorage.setItem("store_id", res.store_id);
        await navigate("/dashboard/-1");
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          message: "Error Login",
          description: "Please enter the correct email and password.",
        });
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be an email")
      .required("This field is required"),
    password: Yup.string()
      .min(6, "At least 6 characters")
      .required("This field is required"),
  });

  const yupSync = {
    async validator({ field }, value) {
      await validationSchema.validateSyncAt(field, { [field]: value });
    },
  };

  return (
    <div>
      <Form
        name="basic"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
        disabled={loading}
        layout={"vertical"}
        scrollToFirstError={true}>
        <Form.Item label="Email" name="email" rules={[yupSync]}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[yupSync]}>
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
