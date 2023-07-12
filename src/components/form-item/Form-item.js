import React, { Component } from "react";
import "./Form-item.css";

export default class FormItem extends Component {
  state = {
    label: "",
  };

  labelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: "",
    });
  };
  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          className="form-control"
          type="text"
          onChange={this.labelChange}
          placeholder="Write a task"
          value={this.state.label}
          required
        />
        <button className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
}
