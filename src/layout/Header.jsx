import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

function Header() {
  return (
    <div style={{ display:"flex", justifyContent:"center", color: "white" }}>
      <Menu mode="horizontal"  className="AntMenu"     >
        
        
        <NavLink to="/">
          <Menu.Item className="siderMenu">Anasayfaaaa</Menu.Item>
        </NavLink>
        
        
        <NavLink to="iletisim">
          <Menu.Item className="siderMenu">iletişim</Menu.Item>
        </NavLink>

        <NavLink to="hakkimizda">
          <Menu.Item className="siderMenu">Hakkımızda</Menu.Item>
        </NavLink>


        <Menu.SubMenu className="siderMenu" title="test">
          <Menu.Item >test</Menu.Item>
          <Menu.Item >test</Menu.Item>
          <Menu.Item >test</Menu.Item>
          <Menu.Item >test</Menu.Item>
          <Menu.Item >test</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  );
}

export default Header;
