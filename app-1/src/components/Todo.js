import React from "react";

function Todo(props) {
  // COMPONENT CONNECTED TO LIST.js
  return (
    <div>
      <h2>{props.item}</h2>
    </div>
  );
}

export default Todo;
