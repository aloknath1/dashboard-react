import React, {Component} from 'react';
import './App.css';
import auth from './components/auth';

import LoginForm from './components/login';
import Dashboard from './components/dashboard';
import Users from './components/users';
import Search from './components/search';

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isloggedIn : true
    }

    window.sessionStorage.setItem('auth', this.state.isloggedIn);
    this.logout = this.logout.bind(this);
  }
  logout = () => {
    auth.logout(() => {            
      this.setState({isloggedIn : auth.isAuthenticated()});
   });
   window.sessionStorage.setItem('auth', auth.isAuthenticated());
  } 

  componentDidMount(){
    console.log(auth.isAuthenticated());
    if(auth.isAuthenticated() == true){
      this.setState({isloggedIn : true});
      window.sessionStorage.setItem('auth', auth.isAuthenticated());
    }else{
      this.setState({isloggedIn : false});
      window.sessionStorage.setItem('auth', auth.isAuthenticated());
    }
  }

  render(){  
    if(window.sessionStorage.getItem('auth') == false) {
      return <Redirect to="/login" />
    }else{
      return (    
        <div className="App">
          <header className="App-header">
            <p>Coding Test</p>   
          </header>     
          
          <Router>                                            
            <Switch>                    
                <Route exact path="/login">
                  <LoginForm /> 
                </Route> 
                <Route path="/dashboard" authed={this.state.isloggedIn}>                        
                    <Dashboard />
                </Route> 
                <Route path="/users" authed={this.state.isloggedIn}>                        
                    <Users />
                </Route> 
                <Route path="/search" authed={this.state.isloggedIn}>                        
                    <Search />
                </Route> 
            </Switch>           
          </Router>               
        </div>
      );
    }     
  }
}

export default App;