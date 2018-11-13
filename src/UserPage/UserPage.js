import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter ,Route,Link,NavLink,Switch} from 'react-router-dom';
import UserTypePage from '../UserTypePage/UserTypePage';
import LoginPage from '../LoginPage/LoginPage';
import NastingRoute from '../NestingRoatPage/NeastingRoute';
import './UserPage.css';


class UserPage extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="LoginPage">
                    <div className="page-Header">
                        <NavLink to="/Home/Akshay" activeClassName="active">Home</NavLink>
                        <NavLink to="/Main" activeClassName="active">Main Page</NavLink>
                        <NavLink to="/LoginPage" activeClassName="active">Login Page</NavLink>
                        <NavLink to="/UserTypePage" activeClassName="active">User Type</NavLink>
                        <NavLink to="/NastingRoute" activeClassName="active">NastingRoute</NavLink>
                    </div>
                    <div className="main_Body">
                        <Switch>
                            <Route path='/Main' exact render={
                                ()=>{return(<div>{this.props.name} welcome</div>);
                                }
                            }/>
                            <Route path ='/Home/:username'  render={
                                ({match})=>{return(<div> Home {match.params.username}</div>)}
                            }
                            />
                            <Route path ='/LoginPage' exact component={LoginPage}/>
                            <Route path ='/UserTypePage' component={UserTypePage}/>
                            <Route path ='/NastingRoute' component={NastingRoute}/>
                        </Switch>      
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default UserPage;