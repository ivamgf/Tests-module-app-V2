import React, { Component } from 'react';
import './register-style.css';
import '../../App.css';
import Form from'../../components/form/Form';

export default class Register extends Component {
    render() {
        return (
            <article className="App-article">
                <h3 className="styleTitle">Register</h3>                
                <Form />                
            </article>
        )
    }
}