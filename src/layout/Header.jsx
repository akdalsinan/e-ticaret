import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

function Header() {
  return (
    <div style={{ backgroundColor: "red", height: "70px", color: "white" }}>
      <Menu mode="horizontal" style={{ backgroundColor: "red" }}>
        <NavLink to="/">
          <Menu.Item className="siderMenu">Anasayfa</Menu.Item>
        </NavLink>
        <NavLink to="iletisim">
          <Menu.Item className="siderMenu">iletişim</Menu.Item>
        </NavLink>
        <NavLink to="hakkimizda">
          <Menu.Item className="siderMenu">Hakkımızda</Menu.Item>
        </NavLink>
        <Menu.SubMenu className="siderMenu" title="test">
          <Menu.Item className="siderMenu">Hakkımızda</Menu.Item>
          <Menu.Item className="siderMenu">Hakkımızda</Menu.Item>
          <Menu.Item className="siderMenu">Hakkımızda</Menu.Item>
          <Menu.Item className="siderMenu">Hakkımızda</Menu.Item>
          <Menu.Item className="siderMenu">Hakkımızda</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  );
}

export default Header;
