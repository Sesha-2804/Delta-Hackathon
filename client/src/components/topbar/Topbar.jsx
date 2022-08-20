import React from "react";
import './topbar.css';
import { Link } from "react-router-dom";



export default function Topbar() {


    return (
        <div className="topbarContainer">
            <div className="topbarLeft">

                <span className="logo">To Do Tab</span>


            </div>
            <div className="topbarCenter">
                <span className="welcomeMsg">Welcome User</span>
            </div>
            <div className="topbarRight">
                <div className="userBox">
                    
                    <span className="userProfile">
                    <Link className="link" to='/editprofile'>Add TimeTable</Link>
                    </span>
                </div>
                <button className="logout">Edit my profile</button>
                <button className="logout">Log out</button>
            </div>
        </div>
    )
}
