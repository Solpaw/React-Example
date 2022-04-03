import React from "react";
import {  NavLink } from "react-router-dom";
import './sidebar.scss';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="col-3 d-none d-md-block box">
                <div className="image d-flex justify-content-center">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo"/>
                </div>
                <ul>
                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;