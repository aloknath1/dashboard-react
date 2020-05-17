import React, {Component} from 'react';
import auth from './auth';
import { Redirect } from "react-router-dom";
  
  class LoginForm extends Component {  
    constructor(props){
        super(props);
        
        this.state = {
            username: '',
            password: '',
            isloggedIn : ''
        };            

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);        
    }

    handleChange(e){      
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        /*const { username, password }  = this.state;

        axios.post(
            "http://localhost:3000/sessions",
            {
                user: {
                    username: username,
                    password: password
                }
            },
            {withCredentials: true}
           
        ).then(response => {
            console.log('response from login');
            if(response.data.loggedIn){
                this.props.handleSucccessfulAuth();
            }
        }).catch(err){
            console.log('login error', err);
        }*/

        this.validationCheck();
       
    }

    validationCheck = () => {
       try{
        if(this.state.username.toLowerCase() === 'admin' && this.state.password.toLowerCase() === '12345'){
            //set the session storage
            window.sessionStorage.setItem('userData',this.state.username);          
           
            auth.login(() => {            
               this.setState({isloggedIn : auth.isAuthenticated()});
            });
           }else{
               //error
               // this.setState({error : 'Invalid credentials'});
                window.sessionStorage.setItem('userData','');
           }
       }catch(err){
           console.log(err);
       }    
    }     

    render(){      
        if(this.state.isloggedIn === true) {
            return <Redirect to="/dashboard" />
        }
        return (
            <div className="login-form">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>                                     
                    <div>
                        <label>Username</label>
                        <input type="text" name="username" onChange={this.handleChange} />
                    </div>   
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleChange} />
                    </div>   
                    <div>                    
                        <input type="submit" name="submit" />
                    </div>
                </form>
            </div>
          );
    }
  
}

export default LoginForm;
