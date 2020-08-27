
import React from 'react';
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Layout, } from 'antd';

import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";

import AllResponses from '../components/allresponses.component';


import Sidebar from '../components/sidebar';
import Adduser from '../components/adduser.component';



import titleImg from '../assets/Title.png';

const { Header, Sider, Footer, Content } = Layout;

const Adminpage = () => {




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
     
    
             
         <Switch>
                    <Route path="/responselist" component={AllResponses} />
                    <Route path="/adduser" component={Adduser} />
                  
                </Switch> 


          </Content>
        <Footer style={{ margin: '0px 0px 0px 200px',textAlign: 'center' }}>  ©2020 Created by Raja Hamza</Footer>
        </Layout>
        
      </Layout>
    )

}
export default Adminpage;