import {
  AppstoreOutlined,
  BarChartOutlined,
  LineChartOutlined,
  LogoutOutlined,
  MessageOutlined,
  RobotOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";

import logo from "../../../images/balesinLogo.png";

export default function SideBar({ children }) {
  // const { botId } = useParams();

  const data = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <AppstoreOutlined className="icon" />,
    },
    {
      name: "Sales",
      path: `/sales`,
      icon: <WalletOutlined className="icon" />,
    },
    {
      name: "Marketing",
      path: `/marketing`,
      icon: <LineChartOutlined className="icon" />,
    },
  ];

  const handleLogout = async () => {
    await localStorage.clear();
    await window.location.reload();
  };

  return (
    <div className="sidebar">
      <Link to={"/home"}>
        <img src={logo} alt="logo" className="logo me-2 mb-5" />
      </Link>
      {data.map((res, i) => (
        <Tooltip className="" title={res.name} key={i} placement="right">
          <NavLink
            className={({ isActive }) =>
              `listmenu  w-100 ${isActive && "active"}`
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
  );
}
