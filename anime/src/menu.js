import React from 'react'
import { Link, withRouter } from "react-router-dom";
import { logout } from './api';

const Menu = () => {
    return (
        <div>
            <ul className="nav nav-tabs bg-dark pt-1">
      <li className="nav-item">
        <Link  className="nav-link fa fa-home"  to="/">
        <span className="icon">Home</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link fa "  to="/signup">
        <span className="icon">Signup</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link fa "  to="/login">
        <span className="icon">login</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link   className="nav-link fa " onClick={logout}>
        <span className="icon">logout</span>
        </Link>
      </li>
      </ul>
            
        </div>
    )
}

export default Menu
