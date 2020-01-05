import React from "react";
import Button from 'react-bootstrap/Button';

export default props => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : ""
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
    <button class='btn btn-danger' onClick={props.onDelete}>X</button>
  </div>
);