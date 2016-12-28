import React, { Component } from 'react';
import logo from '../logo.png';
import '../styles/App.css';
// import './ListItem.js';

const ListItem = (props) => {
  return (
    <div>
      <div onClick={props.deleteItem}>{props.name}</div>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      input: '',
    };
  }
  
  deleteItem(index) {
    // this.setState({items.})
    let newArr = this.state.items.slice();
    console.log(event);
    delete newArr[index];
    // console.log(newArr);
    this.setState({items: newArr});
  }

  handleClick() {
    this.setState({items: this.state.items.concat({name: this.state.input})});
  }

  handleChange(event) {

    this.setState({input: event.target.value});
    // console.log(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My Groceries</h2>
        </div>
        <div className="App-intro">
          <input value={this.state.input} onChange={this.handleChange.bind(this)} />
          <button onClick={this.handleClick.bind(this)}>Add Item</button>
          <br /> <br />
          Items: {this.state.items.map((item, i) => <ListItem deleteItem={this.deleteItem.bind(this, i)} name={item.name} />)}
        </div>
      </div>
    );
  }
}

export default App;