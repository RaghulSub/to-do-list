import React, { useState } from "react";
import "./TodoList.css";



function TodoList({whenSubmited}) {
  const [val, setVal] = useState(""); // State to manage task input

  return (
    <form
      id="TodoList"
      onSubmit={(event) => {
        event.preventDefault();
        if (val.trim() === "") return; // Prevent empty submissions
        whenSubmited(val);
        setVal(""); // Clear input field after submission
      }}
    >
      <input
        type="text"
        id="TaskField"
        value={val} // Bind input value to state
        placeholder="Enter Task"
        onChange={(e) => setVal(e.target.value)} // Update state on input change
      />
      <input type="submit" value="Add Task" />
    </form>
  );
}

export default TodoList;
