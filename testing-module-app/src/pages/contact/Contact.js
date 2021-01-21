import React, { Component } from 'react';
import './contact-style.css';
import '../../App.css';
import Contacts from '../../components/contacts/Contacts'

export default class Contact extends Component {
    render() {
        return (
            <article className="App-article">
                <h3 className="styleTitle">Contact</h3>                
                <Contacts />
            </article>
        )
    }
}