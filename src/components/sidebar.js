import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Menu,Button, } from 'antd';
import {
  HomeOutlined,
    GlobalOutlined,
   
 
  } from '@ant-design/icons';

import {useHistory}  from 'react-router';
import axios from 'axios';

import logo from '../assets/logo.png';
import logo1 from '../assets/logo1.png';

const Text = styled.h1`
font-size:1.8rem;
font-weight:600;
color:white;
margin: 0px 20px 20px 10px;
`;

const Sidebar = () => {




  const [User, setUser] = useState("");
  const [Dis, setDis] = useState(true);
  const [Log, setLog] = useState(false);

  useEffect(() => {
    let mounted = true
  axios.get("/user/").then(res => {
    if (mounted) 
    {
      setUser(res.data.user);
      setLog(true);
      if (res.data.user.type=="admin")
         {setDis(false);} 
    }
    });
  
    return function cleanup() {
      mounted = false
  }

  },[]);

     console.log(Log);
     
    const history = useHistory();

    const handleGlobalClick = () => {
       
        history.push('/home');
      
    }
    
    const handleAddClick = () => {
    
      history.push('/add');
       
        
        
    }

    const handleAddUserClick = () => {
    
      history.push('/adduser');
       
   
        
    }

    
    const handleAllResponsesClick = () => {
    
      history.push('/responselist');
       
   
        
    }

    const Login = () => {
    
      history.push('/signin');
       
   
        
    }

    const Logout = () => {
      axios.post("user/logout").then((resp)=>{
        localStorage.adminLoggedIn = false;
        localStorage.userLoggedIn = false;
        history.push('/signin');
       
  
      })
  }

  return (
      <div>
        {Dis
        ?<img src={logo} style={{width:'80px' , margin: '20px 0px 0px 0px'}} alt="" />
        :<img src={logo1} style={{width:'80px' , margin: '20px 0px 0px 0px'}} alt="" />
}
        <Text >{User.fullname}</Text>
        {Log
        ?<div>
           <Button  type="danger" htmlType="button" onClick={() => Logout()}>
              Logout
            </Button>
        </div>
        
          :<div><Button  type="danger" htmlType="button" onClick={() => Login()}>
              Login
            </Button>
            </div>
}
        {Dis
        ?<div style={{display:{Dis}}}><Menu theme="dark" mode="inline" >
            <Menu.Item key="1" onClick={handleGlobalClick} icon={<GlobalOutlined />}>
              Submited Responses
            </Menu.Item>
            <Menu.Item key="2" onClick={handleAddClick} icon={<HomeOutlined />}>
              Fill Form
            </Menu.Item>
          
          </Menu>

        </div>
        :<div style={{display:{Dis}}}><Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
        <Menu.Item key="1" onClick={handleAllResponsesClick} icon={<GlobalOutlined />}>
         All Responses
        </Menu.Item>
        <Menu.Item key="2" onClick={handleAddUserClick} icon={<HomeOutlined />}>
          Add User
        </Menu.Item>
      
      </Menu>

    </div>
}
    
        </div>
  );
}

export default Sidebar;
