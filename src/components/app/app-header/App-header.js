import React from "react";
import "./App-header.css";

const Appheader = ({ done, todo }) => {
  return (
    <div className="app__header d-flex">
      <h1>Todo list</h1>
      <h2>
        {done} done, {todo} needs to be done
      </h2>
    </div>
  );
};

export default Appheader;
