import { Menu, Dropdown, Select, Input } from "antd";
import {
  BellOutlined,
  SearchOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown, IoChevronForwardOutline } from "react-icons/io5";

// import logo from "../../../images/balesinLogo.png";

export default function Navbar() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  // const menu = (
  //   <Menu style={{ width: 200 }}>
  //     <Menu.Item>
  //       <Link to="/dashboard">Dashboard</Link>
  //     </Menu.Item>
  //     <Menu.Item onClick={handleLogout}>
  //       <span className="text-danger">Keluar</span>
  //     </Menu.Item>
  //   </Menu>
  // );

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
      key: 0,
      value: "all",
      label: "All outlet",
    },
    {
      key: 1,
      value: "lucy",
      label: "SCBD",
    },
    {
      key: 2,
      value: "Yiminghe",
      label: "Bandung",
    },
    {
      key: 3,
      value: "disabled",
      label: "Jakarta",
      disabled: true,
    },
  ];

  const [OutletActive, setOutletActive] = useState({
    value: "all",
    label: "All outlet",
  });

  const [isShown, setIsShown] = useState(false);

  const handleOutlet = ({ key }) => {
    const data = dataOutlet.find((res) => res.key == key);
    setOutletActive(data);
  };

  return (
    <div className="navbar px-4">
      <div className="d-flex justify-content-between align-items-center w-100">
        {/* <Link to={"/home"}>
          <div className="left d-flex align-items-center">
            <img src={logo} alt="logo" className="logo me-2" />
          </div>
        </Link> */}
        <Dropdown
          menu={{
            items: dataOutlet,
            onClick: handleOutlet,
          }}>
          <div
            className="pointer"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <Input
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
              value={OutletActive.label}
            />
          </div>
        </Dropdown>

        <div className="right d-flex align-items-center">
          {/* <div className="icons">
            <SearchOutlined />
            <Link to="/cart">
              <ShoppingCartOutlined />
            </Link>
            <BellOutlined />
          </div> */}

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
  );
}
