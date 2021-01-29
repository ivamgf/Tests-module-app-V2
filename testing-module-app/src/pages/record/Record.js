import React, { Component } from 'react';
import './record-style.css';
import '../../App.css';
import Lists from '../../components/lists/Lists';
import QueryTxt from '../../components/queryTxt/QueryTxt';

export default class Record extends Component {
    render() {
        return (
            <article className="App-article">
                <h3 className="styleTitle">Record</h3>                
                <QueryTxt />
                <Lists />               
            </article>
        )
    }
}