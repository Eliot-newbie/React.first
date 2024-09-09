import React, { useState } from "react";
import Form from "./form";
import Todolist from "./Todolist";
import Footer from "./footer/Footer";

function Todo() {

  const [todos, setTodos] = useState([]);
  let completedTodos = todos.filter(i =>i.done == true).length;
  let totalTodos = todos.length;

  console.log(todos);
  return (
    <div>
      <Form 
        todos = {todos}
        setTodos ={setTodos}
      />


     < Todolist
        todos ={todos}     
        setTodos = {setTodos}
        />

      <Footer completedTodos = {completedTodos} totalTodos = {totalTodos} />
  
    </div>
  );
}

export default Todo;
