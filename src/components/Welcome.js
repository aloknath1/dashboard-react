import React, { Component } from 'react';
import {    
  useHistory
} from "react-router-dom";

class Welcome extends Component {
  constructor(props){
    super(props);

    this.username = JSON.parse(window.sessionStorage.getItem('userData')) || '';
    this.removeSession = this.removeSession.bind(this);
  }   

  removeSession = (e) => {
    e.preventDefault();
    window.sessionStorage.removeItem('userData');
    
    let history = useHistory();   
    let { from } = { from: { pathname: "/" } };
    history.replace(from);
    //window.location.reload();
  }

  render(){    
      return (
        <div className="welcome">    
            { 
                this.username ?  `Welcome ${this.username}`  : ''
              } 
           
        </div>
      );
    }
}


export default Welcome;