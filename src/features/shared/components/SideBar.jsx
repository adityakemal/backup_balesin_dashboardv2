import {
  AppstoreOutlined,
  CustomerServiceOutlined,
  LineChartOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";

import logo from "../../../images/balesinLogo.png";

export default function SideBar() {
  // const { outlet_id } = useParams();

  const data = [
    {
      name: "Dashboard",
      path: `/dashboard`,
      icon: <AppstoreOutlined className="icon" />,
    },
    {
      name: "Sales",
      path: `/sales`,
      icon: <WalletOutlined className="icon" />,
      disabled: true,
    },
    {
      name: "Marketing",
      path: `/marketing`,
      icon: <LineChartOutlined className="icon" />,
      disabled: true,
    },
    {
      name: "Live Agent",
      path: `/live-agent`,
      icon: <CustomerServiceOutlined className="icon" />,
      disabled: false,
    },
  ];

  const handleLogout = async () => {
    await localStorage.clear();
    await window.location.reload();
  };

  return (
    <div className="wrapsidebar">
      <div className="sidebar">
        <Link to={"/home"}>
          <img src={logo} alt="logo" className="logo me-2 mb-5" />
        </Link>
        {data.map((res, i) => (
          <Tooltip
            className=""
            title={res.disabled ? "" : res.name}
            key={i}
            placement="right">
            <NavLink
              onClick={(e) => res.disabled && e.preventDefault()}
              className={({ isActive }) =>
                `listmenu  w-100 ${isActive && "active"} ${
                  res.disabled && "disabled"
                }`
              }
              to={res.path}
              end>
              {res.icon}
              <p className="name mb-0">{res.name}</p>
            </NavLink>
          </Tooltip>
        ))}
        {/* <a className="pointer" onClick={handleLogout}>
        <div className="listmenu w-100">
          <LogoutOutlined />
          <p className="name mb-0">Log Out</p>
        </div>
      </a> */}
      </div>
    </div>
  );
}
