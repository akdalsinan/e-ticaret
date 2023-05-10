import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Avatar, Badge, Button, Tooltip } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Sepet from "../components/Sepet";
import logo from "../image/logo.png";

function Header({ count }) {
  return (
    <div className="headerDiv">
      <NavLink to="/">
        <img
          style={{ height: "75px", margin: "0px 100px 2px " }}
          src={logo}
          alt=""
        />
      </NavLink>

      <Menu mode="horizontal" className="AntMenu">
        <NavLink to="/">
          <Menu.Item className="siderMenu">Anasayfa</Menu.Item>
        </NavLink>

        <NavLink to="iletisim">
          <Menu.Item className="siderMenu">İletişim</Menu.Item>
        </NavLink>

        <NavLink to="hakkimizda">
          <Menu.Item className="siderMenu">Hakkımızda</Menu.Item>
        </NavLink>

        {/* <Menu.SubMenu className="siderMenu" title="test">
          <Menu.Item>test</Menu.Item>
          <Menu.Item>test</Menu.Item>
          <Menu.Item>test</Menu.Item>
          <Menu.Item>test</Menu.Item>
          <Menu.Item>test</Menu.Item>
        </Menu.SubMenu> */}
      </Menu>
      <NavLink to="sepet">
        <Badge count={count}>
          <Avatar shape="square" icon={<ShoppingCartOutlined />} />
        </Badge>
      </NavLink>
      
      <NavLink to="oturum">
        <Button style={{ margin: "10px" }} type="primary" danger>
          Oturum Aç
        </Button>
      </NavLink>
    </div>
  );
}

export default Header;
