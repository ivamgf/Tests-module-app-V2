import React, { Component } from 'react';
import './error404-style.css';
import '../../App.css';
import ErrorIcon from '@material-ui/icons/Error';

export default class Error404 extends Component {
    render() {
        return (
            <article className="App-article">
                <ErrorIcon color="secondary" fontSize="large" />
                <h3 className="styleTitle">404 Page not found!</h3>                
                <p className="styleTitle">
                Sorry, this page doesn't exist!
                </p>
               
            </article>
        )
    }
}