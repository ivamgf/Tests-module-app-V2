import React, { Component } from 'react';
import './about-style.css';
import '../../App.css';
import Profile from '../../components/profile/Profile';

export default class About extends Component {
    render() {
        return (
            <article className="App-article">
                <h3 className="styleTitle">About</h3>                
                <Profile />
            </article>
        )
    }
}