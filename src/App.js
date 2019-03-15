import React, { Component } from 'react';
import logo from './neo4j_logo.png';
import './App.css';
import Bingocard from './Bingocard';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Neo4j Buzzword Bingo Hackathon</h1>
        </header>
        <p className="App-intro">
          Enregistrez votre projet sur <a href="https://hackdash.org/dashboards/neograph">HackDash</a>.
        </p>

        <p className="App-intro"><a href="http://neo4j-users-slack-invite.herokuapp.com/">Rejoignez notre slack</a> #graph-hack-2019.</p>
        <Bingocard></Bingocard>

      </div>
    );
  }
}

export default App;
