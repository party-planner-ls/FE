import {React, Component} from 'react';
import './App.css';

export class HomePage extends Component {
    render(){
        return(
            <div className = 'container'>
                <div className = 'content'>
                    <h2>Welcome To The Best Party Panner APP On The Web</h2>
                    <p>Wanna see what the hype is about?</p>
                    <NavLink to = '/register'>Sign up Now!</NavLink>
                    <p>Already apart of the family?</p>
                    <NavLink to = '/login'>Sign up Now!</NavLink>
            </div>
            </div>
        );
    }
}

