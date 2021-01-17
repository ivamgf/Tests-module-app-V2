import React, { Component } from 'react';
import './main-style.css';
import '../../App.css';

export default class Main extends Component {
    render() {
        return (
            <article className="App-article">
                <button type="button" className="btn btn-style btn-style-hov">
                    <i className="fas fa-film fa-5x"></i><br></br>
                    See Users...
                </button>
                
                <p>
                Register your user in the app!
                </p>
            </article>
        )
    }
}