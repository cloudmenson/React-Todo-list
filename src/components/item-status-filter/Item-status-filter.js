import React, { Component } from "react";
import "./Item-status-filter.css";

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];
  render() {
    const { filter, filterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? "btn-success" : "btn-outline-secondary";
      return (
        <button
          className={`btn ${clazz}`}
          type="button"
          key={name}
          onClick={() => filterChange(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group btng">{buttons}</div>;
  }
}
