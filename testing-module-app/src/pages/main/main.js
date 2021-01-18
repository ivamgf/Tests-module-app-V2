import React, { Component } from 'react';
import './main-style.css';
import '../../App.css';

const URLImage1 = `http://www.testing-module.orkneytech.com.br/assets/images/list.png`;

export default class Main extends Component {
    
    render() {
        return (
            <article className="App-article">
                <h3 className="styleTitle">Testing Module App V-1.0.0</h3>                
                <p className="styleTitle">
                Register your user in the app!
                </p>
                <img className="styleImg" src={URLImage1} alt="List"></img>
            </article>
        )
    }
}