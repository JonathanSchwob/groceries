import React, { Component } from 'react';
import logo from '../logo.png';
import '../styles/App.css';
import './ListItem.js';

class App extends Component {
  constructor() {
    super();

    this.state = {item: ''};
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My Groceries</h2>
        </div>
        <p className="App-intro">
          <input onChange={event => this.setState({item: event.target.value})} />
          <br /> <br />
          Item: {this.state.item}
        </p>
      </div>
    );
  }
}

export default App;