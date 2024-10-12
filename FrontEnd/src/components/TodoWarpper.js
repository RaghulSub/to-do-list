import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";
import Tasks from "./Tasks.js";
import "./TodoWarpper.css";
import axios from "axios";

uuidv4();

function TodoWarpper() {
  const [tasks, setTasks] = useState([]);
  const [trigger,setTrigger] = useState(true);
  

  useEffect(()=>{                    // used to refresh tasks after every operations
    const fetchData = async () =>{
      try{
        let url =  "http://localhost:5000/ToDo/GetToDo";
        const res = await axios.get(url);
        console.log('Fetch:',res);
        setTasks(res.data);
      }catch(error){
        console.log("Error while fetching data",error);
      }
    }
    fetchData();
  },[trigger])


  const whenSubmited = (taskVal) => {

    let url = 'http://localhost:5000/ToDo/InsertToDo';
    axios.post(url, {
      id:uuidv4(),
      description: taskVal,
      title: "Default",
    })
    .then((response) => {
      // const res = response.data;
      console.log(response.data); // Handle success response
      setTrigger(!trigger);  // Call the function to trigger useEffect in TodoWarpper
    })
    .catch((err) => {
      console.log(err); // Handle error response
    });
  }

  const toggleCompleted = (id) => {
    let url = 'http://localhost:5000/ToDo/UpdateToDo';
    axios.put(url,{
      id:id,
      date:new Date(),
    })
    .then((response) => {
      const res = response.data;
      if(res.success){
        setTrigger(!trigger);  // trigger the change to useEffect 
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const deleteTask = (id) => {
    console.log(id);
    const url = 'http://localhost:5000/ToDo/DeleteToDo';
    axios.delete(url,{
      data:{id:id},
    })
    .then((response)=>{
      const res = response.data;
      if(res.success){
        setTrigger(!trigger);  // trigger the change to useEffect
      }
    })
    .catch((err)=>{
      console.log("error:",err);
    });
  }

  return (
    <div className="TodoWarpper">
      <TodoList whenSubmited={whenSubmited} />

      {tasks && tasks.map((task, index) => {
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
