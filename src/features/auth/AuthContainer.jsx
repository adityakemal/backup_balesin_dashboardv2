import React from "react";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Register from "./components/Register";

import logo from "../../images/balesinLogoWhite.png";
import wave from "../../images/wave.svg";

export default function AuthContainer() {
  const { isRegister } = useSelector((state) => state.auth);

  return (
    <div style={{ backgroundImage: `url(${wave})` }} className="auth ">
      <div className="container-fluid d-flex align-items-center justify-content-center position-relative h-100">
        <div className="w-100 text-center logo">
          <img src={logo} alt="" />
        </div>

        <div className=" box py-4 px-5 bg-white">
          <h3 className="mb-2 text-center">Welcome to Dashboard 👋</h3>
          <p className="mb-4 text-center light">
            Sign in with your Balesin account
          </p>
          <Login />
        </div>
      </div>
    </div>
  );
}
