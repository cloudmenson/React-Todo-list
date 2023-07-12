import React from "react";
import TodoListItems from "../todo-list-items";
import "./Todo-list.css";

const TodoList = ({ todos, onDelete, toggleImportant, toggleDone }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li className="list-group-item" key={item.id}>
        <TodoListItems
          {...itemProps}
          onDelete={() => onDelete(id)}
          toggleImportant={() => toggleImportant(id)}
          toggleDone={() => toggleDone(id)}
        />
      </li>
    );
  });
  return <ul className="list-group todo-list">
    {elements}
  </ul>;
};
export default TodoList;
