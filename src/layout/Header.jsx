import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Avatar, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Sepet from "../components/Sepet";
import logo from "../image/logo.png"

function Header({count}) {
  return (
    <div className="headerDiv" >

      <img style={{height:"75px", margin:"0px 100px 2px "}} src={logo} alt="" />
      <Menu mode="horizontal" className="AntMenu">
      

        <NavLink to="/">
          <Menu.Item className="siderMenu">Anasayfaaaa</Menu.Item>
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
          <Badge  count={count}>
            <Avatar shape="square" icon={<ShoppingCartOutlined />} />
          </Badge>
        </NavLink>
    </div>
  );
}

export default Header;
