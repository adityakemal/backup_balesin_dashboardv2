import { Menu, Dropdown, Select, Input } from "antd";
import {
  BellOutlined,
  SearchOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { postStoreInfo } from "../shared.api";
import { handleActiveuOtlet } from "../shared.reducer";

// import logo from "../../../images/balesinLogo.png";

export default function Navbar() {
  let location = useLocation();
  let navigate = useNavigate();
  const { outlet_id } = useParams();

  const dispatch = useDispatch();
  const { outletList, outletActive } = useSelector((state) => state.shared);
  useEffect(() => {
    const data = {
      bot_id: localStorage.getItem("bot_id"),
      store_id: localStorage.getItem("store_id"),
    };
    dispatch(postStoreInfo(data));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const itemsMenu = [
    // {
    //   key: "1",
    //   label: <Link to="/dashboard">Dashboard</Link>,
    // },
    {
      key: "2",
      label: (
        <div
          onClick={handleLogout}
          className="text-danger"
          style={{ width: 130 }}>
          Keluar
        </div>
      ),
    },
  ];

  const dataOutlet = [
    {
      key: -1,
      value: -1,
      label: "All outlet",
    },
    ...outletList.map((res, i) => ({
      key: res.id,
      value: res.id,
      label: res.name,
    })),
  ];

  // useEffect(() => {
  //   // dispatch(handleActiveuOtlet(dataOutlet[0]));
  // }, []);

  const handleOutlet = ({ key }) => {
    const data = dataOutlet.find((res) => res.key == key);
    const menuLocation = location.pathname.split("/")[1];
    navigate(`/${menuLocation}/${data.value}`);
  };

  const [isShown, setIsShown] = useState(false);
  return (
    <div className="navbar">
      <div className="container px-4">
        <div className="d-flex justify-content-between align-items-center w-100">
          {/* <Link to={"/home"}>
          <div className="left d-flex align-items-center">
            <img src={logo} alt="logo" className="logo me-2" />
          </div>
        </Link> */}
          <Dropdown
            autosize={true}
            menu={{
              items: dataOutlet,
              onClick: handleOutlet,
            }}>
            <div
              className="pointer d-flex align-items-center  py-2 "
              style={{
                boxShadow: `0px 3px 6px #00000029`,
                border: 0,
                borderRadius: 10,
              }}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}>
              <ShopOutlined className="mx-3" />
              <div className="" style={{ minWidth: 170 }}>
                {outlet_id
                  ? dataOutlet.find((res) => res.value == outlet_id)?.label
                  : "All Outlet"}
              </div>
              <IoChevronDown
                className="mx-3"
                style={{
                  transform: isShown ? "rotate(0deg)" : "rotate(-90deg)",
                  transition: ".3s",
                }}
              />
              {/* <Input
                readOnly
                style={{
                  boxShadow: `0px 3px 6px #00000029`,
                  border: 0,
                }}
                size="large"
                prefix={<ShopOutlined className="mx-2" />}
                suffix={
                  <IoChevronDown
                    style={{
                      transform: isShown ? "rotate(0deg)" : "rotate(-90deg)",
                      transition: ".3s",
                    }}
                  />
                }
                placeholder="large size"
                value={dataOutlet.find((res) => res.value == outlet_id)?.label}
              /> */}
            </div>
          </Dropdown>

          <div className="right d-flex align-items-center">
            <div className="d-flex align-items-center">
              <p className="mb-0 name">Sedjuk Bakmi & Kopi</p>
              <Dropdown
                menu={{
                  items: itemsMenu,
                }}>
                <div className="profilepic d-flex justify-content-center align-items-center">
                  <UserOutlined style={{ fontSize: 23 }} />
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
