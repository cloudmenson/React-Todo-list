import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Todo-list-items.css";

export default class TodoListItems extends Component {
  render() {
    const { label, onDelete, toggleImportant, toggleDone, done, important } =
      this.props;
    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }
    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={toggleDone}>
          {label}
        </span>
        <div className="todo-list-item-btn-wrapper">
          <button
            className="btn btn-outline-primary float-right btn-sm"
            type="button"
            onClick={toggleImportant}
          >
            <FontAwesomeIcon icon={faExclamation} />
          </button>
          <button
            className="btn btn-outline-danger float-right btn-sm"
            type="button"
            onClick={onDelete}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </span>
    );
  }
}
