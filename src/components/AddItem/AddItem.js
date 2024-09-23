import React, { Component } from "react";
export default class AddItem extends Component {
  state = {
    name: "",
    age: "",
  };
  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  submit = (e) => {
    e.preventDefault();
    if (e.target.name.value === "") {
      return false;
    } else {
      this.props.addItem(this.state);
      this.setState({
        name: "",
        age: "",
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            type="name"
            placeholder="Enter Name"
            id="name"
            onChange={this.change}
            value={this.state.name}
          />
          <input
            type="number"
            placeholder="Enter age"
            id="age"
            onChange={this.change}
            value={this.state.age}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
