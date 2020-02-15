import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "To-Do-App",
      text: "",
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleCheckbox = this.handleCheckbox.bind(this);
  }
  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    // handleCheckbox = e => {
    //   console.log(e);

    // };
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ""
    }));
  };
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <h1 className="title">{this.state.title}</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="newToDo">Enter To Do Items : </label>
            <input
              type="text"
              id="newToDo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button type="submit">Add To Do Item</button>
          </form>
        </div>
        <ToDoList
          items={this.state.items}
          // handleC={this.state.handleCheckbox}
        />
      </React.Fragment>
    );
  }
}

export default App;

class ToDoList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li className="" key={item.id}>
            <input
              type="checkbox"
              // onChange={this.props.handleC}
              id="item-checkbox"
            />
            {item.text}
          </li>
        ))}
      </ul>
    );
  }
}
