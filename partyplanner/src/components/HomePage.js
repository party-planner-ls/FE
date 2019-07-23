import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

class HomePage extends Component {
    render(){
        return(
            <div className = 'pageLayout'>
                <div className = 'content'>
                    <h2>Welcome To The Best <br/> Party Planner <br/> App On The Web</h2>
                    <div className = 'home'>
                    <p>Wanna see what the hype is about?</p>
                    <NavLink to = '/register'>Sign up Now!</NavLink>
                    </div>
                    <div className = 'home'>
                    <p>Already apart of the family?</p>
                    <NavLink to = '/login'>Login Now!</NavLink>
                    </div>
            </div>
            </div>
        );
    }
}

export default HomePage;
