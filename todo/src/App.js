import React, { Component } from "react";
import Item from "./components/item.js";
import "./App.css";
class App extends Component {
  state = {
    value: "",
    id: 0,
    list: []
  };

  additem = () => {
    let listcopy = this.state.list;
    let idcopy = this.state.id;
    idcopy++;
    if (this.state.value !== "") listcopy.push(this.state.value);
    this.setState({
      value: "",
      id: idcopy,
      list: listcopy
    });
  };

  addvalue = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          className="input m-2"
          value={this.state.value}
          onChange={this.addvalue}
          type="text"
          placeholder="Enter the task"
        />
        <button onClick={this.additem} className="btn btn-primary btn-sm m-2">
          Add
        </button>

        <ul>
          {this.state.list.map(each => (
            <li>
              <Item task={each} id={this.state.list.indexOf(each)} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
