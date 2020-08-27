import React from 'react';
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './App.css';


import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";

import Signin from './pages/Signin';
import Userpage from './pages/user.page'
import Adminpage from './pages/admin.page'





const App = () => {
    
  


   

 
console.log(localStorage.adminLoggedIn);


        return (
        
 
        <Router>
                   {/* <FetchdataRedux/> */}
                  
                    <Route path="/signin" component={Signin}  />
                    <Route path="/home" component={Userpage}  />
                    <Route path="/add" component={Userpage}  />
                    
                    
                    <Route path="/responselist" render={() => (localStorage.adminLoggedIn)
                    ?<Adminpage/>
                    :<Redirect to="/home" />}
                        />

                        <Route path="/adduser" render={() => (localStorage.adminLoggedIn)
                    ?<Adminpage/>
                    :<Redirect to="/home" />}
                        />

                        

                        
              
      </Router> 
        );



    }



export default App;