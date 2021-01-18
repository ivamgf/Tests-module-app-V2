// import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Component } from 'react';
import Routes from './routes';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
      return (
      
      <div className="App">
        <Header />
        <Routes />
        
        <Footer />
      </div>
    );
  }
  
}

export default App;
