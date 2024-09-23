import React, { Component } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import AddItem from "./components/AddItem/AddItem";
import "./App.css";
class App extends Component {
  state = {
    item: [
      { id: 1, name: "Ali", age: 22 },
      { id: 2, name: "Abdo", age: 21 },
      { id: 3, name: "Ahmed", age: 23 },
    ],
  };
  deleteItem = (id) => {
    let item = this.state.item;
    let i = item.findIndex((item) => item.id === id);
    item.splice(i, 1);
    this.setState({ item });
  };
  addItem = (item) => {
    let items = this.state.item;
    item.id=items.length+1;
    items.push(item);
    this.setState({ items: item });
  };
  
  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItem item={this.state.item} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
