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
          required
          type="text"
          className="form-control"
          value={this.state.label}
          placeholder="Write a task"
          onChange={this.labelChange}
        />
        <button className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
}
