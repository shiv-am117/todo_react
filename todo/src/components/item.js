import React, { Component } from "react";
import "./item.css";
class Item extends Component {
  state = {
    task: this.props.task,
    classes: "normal"
  };

  handledone = () => {
    this.setState({ classes: "del" });
  };

  handleundone = () => {
    this.setState({ classes: "normal" });
  };

  render() {
    return (
      <div>
        <span className="badge badge-secondary m-2 ">{this.props.id + 1}</span>
        <span className={this.state.classes}>{this.state.task}</span>
        <button className="btn btn-warning btn-sm " onClick={this.handledone}>
          Done
        </button>
        <button className="btn btn-danger btn-sm " onClick={this.handleundone}>
          Undone
        </button>
      </div>
    );
  }
}

export default Item;
