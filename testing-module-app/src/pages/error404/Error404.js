import React, { Component } from 'react';
import './error404-style.css';
import '../../App.css';

export default class Error404 extends Component {
    render() {
        return (
            <article className="App-article">
                <h3 className="styleTitle">404 Page not found!</h3>                
                <p className="styleTitle">
                Sorry, this page doesn't exist!
                </p>
               
            </article>
        )
    }
}