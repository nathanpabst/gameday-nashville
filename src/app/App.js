import React from 'react';
// import firebase from 'firebase';

import './App.css';

import fbConnection from '../firebaseRequests/connection';
fbConnection();

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gameday Nashville</h1>
        </header>
        <button className="btn btn-primary">ImaButton</button>
      </div>
    );
  }
}

export default App;
