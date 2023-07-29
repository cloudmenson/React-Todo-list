import React, { Component } from "react";

import TodoList from "../todo-list";
import FormItem from "../form-item";
import Appheader from "./app-header";
import ItemStatusFilter from "../item-status-filter";

import "./App.css";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [],
    term: "",
    filter: "all",
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem("todo-item")
      ? JSON.parse(localStorage.getItem("todo-item"))
      : [];
    this.setState({ todoData: localStorageRef });
  }

  componentDidUpdate() {
    localStorage.setItem("todo-item", JSON.stringify(this.state.todoData));
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };

  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  searchChange = (item) => {
    this.setState({ item });
  };

  filterChange = (filter) => {
    this.setState({ filter });
  };

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  search = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) =>
      item.label.toLowerCase().includes(term.toLowerCase())
    );
  };

  toggleDone = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, "done"),
    }));
  };

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <Appheader todo={todoCount} done={doneCount} />

        <div className="search-panel">
          <ItemStatusFilter filter={filter} filterChange={this.filterChange} />
        </div>

        <TodoList
          todos={visibleItems}
          onDelete={this.deleteItem}
          toggleDone={this.toggleDone}
          toggleImportant={this.toggleImportant}
        />
        <FormItem onItemAdded={this.addItem} />
      </div>
    );
  }
}
