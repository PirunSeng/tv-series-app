import React, { Component } from 'react';
import logo from '../../logo.svg';
// import Series from '../../containers/Series'; moved to Main
import Main from '../Main';
import './App.css';
import 'whatwg-fetch';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;

// We can pass the props something more than just string like, boolean, array, function, etc.
