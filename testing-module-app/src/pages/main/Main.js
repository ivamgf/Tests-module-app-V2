import React, { Component } from 'react';
import './main-style.css';
import '../../App.css';
import ProgressBar from '../../components/progressBar/ProgressBar';

const URLImage1 = `http://www.testing-module.orkneytech.com.br/assets/images/list.png`;

export default class Main extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            home: false,
            load: true
        }
    }

    componentDidMount = () => {
        window.setTimeout(() => {
            this.setState({
                home: true,
                load: false
            })
        }, 3000)        
    }

    render() {
        const { home, load } = this.state;
        return (
            <article className="App-article">
                <div id="loader" style={{ display: load ? "block" : "none"}}><ProgressBar /></div>
                <h3 className="styleTitle">Testing Module App V-1.0.0</h3> 
                <div id="BoxApp" style={{ display: home ? "block" : "none"}}>                                   
                    <p className="styleTitle">
                    Register your user in the app!
                    </p>
                    <img className="styleImg" src={URLImage1} alt="List"></img>
                </div>
                
            </article>
        )
    }
}