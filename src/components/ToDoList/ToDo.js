import React from "react";
import Button from 'react-bootstrap/Button';

export default props => (
  <div style={{ display: "flex", justifyContent: "center" ***REMOVED******REMOVED***>
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : ""
    ***REMOVED******REMOVED***
      onClick={props.toggleComplete***REMOVED***
    >
      {props.todo.text***REMOVED***
    </div>
    <button class='btn btn-danger' onClick={props.onDelete***REMOVED***>x</button>
  </div>
);