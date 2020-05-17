import React, { Component } from 'react';
import auth from './auth';
import { Route ,Redirect } from "react-router-dom";
import Nav from './nav';
import routes from '../routes.js';

class Dashboard extends Component{


  render(){
    //const routes = routes;
    console.log(window.sessionStorage.getItem('auth'));
    if(window.sessionStorage.getItem('auth') == false) {
        return <Redirect to="/login" />
    }else{
      return (
        <div className="dashboard">   
            <p>Welcome User <a href="javascript:void(0)" onClick={this.logout}>logout</a></p>
           <Nav />
            <div>
             {
               routes.map((route) => (
                <Route
                  key= {route.path}
                  path= {route.path}
                  exact= {route.exact}
                  component = {route.component}
                />
               ))
              }
            </div>
        </div>
      );
    } 
  }
}

export default Dashboard;