import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Image } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";




function Header() {
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;
  return (
    <Layout>
        <Header className="header" style={{ padding: 0}}>
       
            <Menu theme="light" mode="horizontal" >
            
                <Menu.Item key="1">
                <img width="5%" src="https://www.codeandmore.com.tr//assets/images/logo.jpg" />
                Code and More
                </Menu.Item>
                <SubMenu key="2" icon={<UserOutlined />} title="Welcome User">
                    <Menu.Item key="1">My Profile</Menu.Item>
                    <Menu.Item key="2">Page List</Menu.Item>
                    <Menu.Item key="3">LogOut</Menu.Item>
                    
                </SubMenu>
            </Menu>
        </Header>
    </Layout>
  );
}

export default Header;