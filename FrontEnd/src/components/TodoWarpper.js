import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";
import Tasks from "./Tasks.js";
import "./TodoWarpper.css";
import axios from "axios";

uuidv4();

function TodoWarpper() {
  const [tasks, setTasks] = useState([]);
  let url =  "http://localhost:5000/ToDo/GetToDo";
  const res = axios.get(url);
  console.log(res.data);

  const addTask = (newToDo) => {
    setTasks([...tasks, { id: uuidv4(), task: newToDo, completed: false }]);
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="TodoWarpper">
      <TodoList addTask={addTask} />

      {tasks.map((task, index) => {
        return (
          <Tasks
            task={task}
            key={index}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
}

export default TodoWarpper;
