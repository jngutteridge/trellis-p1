import React from "react";
import UserDisplayComponent from "./UserDisplayComponent";
import {Link} from "react-router-dom";
import {ReactComponent as DashboardIcon} from "../Assets/Icons/dashboard.svg";

export const ProfilePanelComponent = ({user}) => (
    <div className="panel">
        <div className="container">
            <h1>Profile</h1>
            <UserDisplayComponent user={user}/>
        </div>
        <nav className="nav-container">
            <Link to="/">
                <button><DashboardIcon/>Boom</button>
            </Link>
        </nav>
    </div>
);
