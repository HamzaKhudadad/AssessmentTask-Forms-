
import React from 'react';
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Layout, } from 'antd';

import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";

import UserResponselist from '../components/userresponselist.component';
import Formpage from '../components/addresponse.component';


import Sidebar from '../components/sidebar';


import titleImg from '../assets/Title.png';

const { Header, Sider, Footer, Content, } = Layout;

const Userpage = () => {




    return (
        
<Layout>
        <Sider style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
  
        left: 0,
      }}>
          
             
        <Sidebar/>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
          
             <img src={titleImg} style={{width:'250px' , margin: '0px 0px 0px 220px'}} alt="" />
             
          </Header>
          <Content style={{margin: '24px 0px 24px 200px', padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff"}}>
     
        {/* <Responselist></Responselist> */}
        <Switch>
                    <Route path="/home" component={UserResponselist} />
                    <Route path="/add" component={Formpage} />
                   
                    {/* <Redirect to="/home" from="/" /> */}
                </Switch> 
                


          </Content>
        <Footer style={{ margin: '0px 0px 0px 200px',textAlign: 'center' }}>  ©2020 Created by Raja Hamza</Footer>
        </Layout>
        
      </Layout>
    )

}
export default Userpage;