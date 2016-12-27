import React, { Component } from 'react';
import logo from '../logo.png';
import '../styles/App.css';
import './ListItem.js';

// Put this into its own file. 
const ListItem = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.id}</div>
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

  handleClick() {
    // BAD: this.state.items.push(this.state.input);

    // Always use setState if you modify React state. Also remember to use concat, as it doesn't mutate the original array.
    this.setState({ items: this.state.items.concat({ name: this.state.input }) });
    
  }

  // The point of handleChange is that it ensures that the value in input is determined by this.state.input; the model determines the view.
  handleChange(event) {
    // Maybe something like event.preventDefault should be here. 
    this.setState({ input: event.target.value });
    console.log(event.target.value);
  }

  // displayListItem() {
    
  // }

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange.bind(this)} />

        <button onClick={this.handleClick.bind(this)}></button>
        Items: {this.state.items.map(item => <ListItem name={item.name} />)}
        
      </div>
    );
  }
}

// <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>My Groceries</h2>
//         </div>
//         <p className="App-intro">
//           <input onChange={event => this.setState({item: event.target.value})} />
//           <br /> <br />
//           Item: {this.state.item}
//         </p>
//       </div>

export default App;