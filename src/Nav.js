import React from 'react';
import './App.css';
// import {Link} from 'react-router-dom'
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";
import Home from './Home'
import AddMenu from './AddMenu'
import ListMenu from './ListMenu'
import AddNewLanguage from './AddNewLanguage'
import About from './About'
import AttachtedLanguage from './AttachtedLanguage'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


function Nav() {
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;
  return (
    <Layout>
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item>
            <Link to='/'>
                     <li>Home</li>
            </Link></Menu.Item>
        <Menu.Item>
            <Link to='/addmenu'>
                     <li>Add Menu</li>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/listmenu'>
                     <li>List Menu</li>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/addnewlanguage'>
                     <li>Add New Language</li>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/attachtedlanguage'>
                     <li>Attatchedted Language</li>
            </Link>
        </Menu.Item>
        <Menu.Item>
        <Link to='/about'>
                 <li>About</li>
             </Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout style={{ padding: "0 24px 24px" }}>
      
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 800
        }}
      >
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/addmenu" component={AddMenu}/>
          <Route path="/listmenu" component={ListMenu}/>
          <Route path="/addnewlanguage" component={AddNewLanguage}/>
          <Route path="/attachtedlanguage" component={AttachtedLanguage}/>
        </Switch> 
      </Content>
    </Layout>
  </Layout>
  );
}

export default Nav;