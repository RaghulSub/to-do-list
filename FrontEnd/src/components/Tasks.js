import React from "react";
import "./Tasks.css";

function Tasks({ task, toggleCompleted, deleteTask }) {
  return (
    <div className="Tasks" id={task.id}>
      <input
        type="checkbox"
        className="TaskCheckBox"
        onChange={() => {
          toggleCompleted(task.id);
        }}
      />
      <label className={task.completed ? "TaskCompleted" : "TaskNotCompleted"}>
        {task.description}
      </label>
      <i
        className="material-icons"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        delete
      </i>
    </div>
  );
}

export default Tasks;
