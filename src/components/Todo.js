import React from "react";
import TodoWarpper from "./TodoWarpper";
import Header from "./Header.js";
import "./Todo.css";

function Todo() {
  return (
    <div className="Todo">
      <Header/>
      <TodoWarpper />
    </div>
  );
}

export default Todo;
