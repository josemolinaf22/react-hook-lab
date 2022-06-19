import React, { useState } from "react";

function AddTodo(props) {
  const [userInput, setUserInput] = useState("");

  function handleAddTodo(e) {
    e.preventDefault();
    props.addTodo(userInput);
    setUserInput("");
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={userInput}
          placeholder="Add To Do"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
