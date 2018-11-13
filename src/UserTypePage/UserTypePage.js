import React from 'react';
import {Route,Link,Switch,BrowserRouter} from 'react-router-dom';
import './UserTypePage.css';

const UserTypePage = ({match}) => {
    console.log("outer",match)
    return(
        <React.Fragment>
            <ul>
                <li><Link to={`${match.url}/Admin`}>Admin</Link></li>
                <li><Link to={`${match.url}/Manager`}>Manager</Link></li>
                <li><Link to={`${match.url}/User`}>User</Link></li>
            </ul>
            <div className="devision"></div>
            <div className="view-user">
                <Route path={`${match.path}/:name`} render={({match})=>{return(<div>{match.params.name}</div>)}}></Route>
            </div>
        </React.Fragment>
    )
}
export default UserTypePage;