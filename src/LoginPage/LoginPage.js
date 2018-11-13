import React, { Component } from 'react';
import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Check from '../check'
import { render } from 'react-dom';
import {BrowserRouter , Route ,Link,Redirect} from "react-router-dom";
import {browserHistory} from'react-router';
import UserPage from '../UserPage/UserPage';
class LoginPage extends Component {
    state ={
        username:"",
        password:"",
        loginSucess:false
    }

    userNameHandler = (event) =>{
        let userName=event.target.value;
        this.setState({
            username:userName,
        })
    }

    passwordHandler = (event) =>{
        let Password = event.target.value;
        this.setState({
            password:Password,
        })
    }

    userLoginButtonClick = () =>{
         if(this.state.username==""||this.state.password==""){
             alert("Please fill all details...");
         }
         else{
             if(this.state.username=="Akshay"&&this.state.password=="easy"){
                 this.setState({
                     loginSucess:true,
                 })
             }
             else{
                 alert("..!incorrect username and password");
                 this.setState({
                    username:"",
                    password:""
                 })
             }
         }
    }

    render(){
        if(this.state.loginSucess)
        {
            return(
                <Redirect to="/UserPage"/>
            )
        }
        return(
            <React.Fragment>
                {this.state.loginSucess?<Route path="/UserPage/" exact strict component={UserPage}/>:
                <div>
                <div><span>User Name</span><input type="text" value={this.state.username} onChange={this.userNameHandler}/></div>
                <div><span>User Name</span><input type="password" value={this.state.password} onChange={this.passwordHandler} /></div>
                <div><input type="button" onClick={()=>{this.userLoginButtonClick()}} value="Login"></input></div>
                </div>}
            </React.Fragment>
        )
    }
    }
    // <BrowserRouter><Route path="/UserPage/" exact strict render={()=><UserPage name={this.state.username}></UserPage>
    //                 }/></BrowserRouter>

export default LoginPage;