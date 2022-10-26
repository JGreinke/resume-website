import {Link} from 'react-router-dom';
import React from 'react';
import "./navBar.css";
import logo from "./img/DahliaNoBackground.png";

const NavBar = () => {

    return(
        <div className="navbar">
            <ul>
                <li><img src={logo} alt="logo" className="logo-image" /></li>
                <li><Link className="navbar-link" to="/">Home</Link></li>
                <li><Link className="navbar-link" to="/timeline">Timeline</Link></li>
                <li><Link className="navbar-link" to="/projects">Projects</Link></li>
                <li><Link className="navbar-link" to="/skills">Skills</Link></li>
            </ul>
        </div>
    )

}

export default NavBar;