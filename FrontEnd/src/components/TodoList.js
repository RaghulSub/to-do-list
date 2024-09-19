import React, { useState } from "react";
import "./TodoList.css";
import axios from 'axios';

function whenSubmited(addTask, taskVal) {
  let url = 'http://localhost:5000/ToDo/InsertToDo'; // Ensure this URL points to your backend
  axios.post(url, {
    description: taskVal,
    title: "Default",
  })
  .then((response) => {
    console.log(response.data); // Handle success response
  })
  .catch((err) => {
    console.log(err); // Handle error response
  });

  addTask(taskVal); // Call the function to update the task list
}

function TodoList(props) {
  const [val, setVal] = useState(""); // State to manage task input

  return (
    <form
      id="TodoList"
      onSubmit={(event) => {
        event.preventDefault();
        if (val.trim() === "") return; // Prevent empty submissions
        whenSubmited(props.addTask, val);
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
