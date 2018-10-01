import React, { Component } from 'react';
import Header from './containers/Header';
import MainContent from './containers/MainContent';
import Footer from './containers/Footer';
import './index.css';

class App extends Component {
  render() {
    return (
       <div name="top">
         <Header/>
         <MainContent/>
         <Footer/>
      </div>
    );
  }
}

export default App;
