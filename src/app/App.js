import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Gameday Nashville</h1>
        </header>
        <button className="btn btn-primary">ImaButton</button>
      </div>
    );
  }
}

export default App;
