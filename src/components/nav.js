import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

const Nav = () => {    
    return (
        <div className="nav-side">
            <ul>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/search">Star Wars</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    );
}

export default Nav;