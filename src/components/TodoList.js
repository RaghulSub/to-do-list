import React from "react";
import "./TodoList.css";

function whenSubmited(addTask, taskVal) {
  addTask(taskVal);
}

function TodoList(props) {
  var val;

  return (
    <form
      id="TodoList"
      onSubmit={(event) => {
        event.preventDefault();
        let textField = document.getElementById("TaskField");
        textField.value = "";
        whenSubmited(props.addTask, val);
      }}
    >
      <input
        type="text"
        id="TaskField"
        placeholder="Enter Task"
        onChange={(e) => {
          val = e.target.value;
        }}
      />
      <input type="submit" value="Add Task" />
    </form>
  );
}

export default TodoList;
