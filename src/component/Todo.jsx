import React, { useEffect, useState } from "react";
import Form from "./form";
import Todolist from "./Todolist";
import Footer from "./footer/Footer";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./utils/firebase";

function Todo() {

  const [todos, setTodos] = useState([]);
  let completedTodos = todos.filter(i =>i.done == true).length;
  let totalTodos = todos.length;

  useEffect(() => {
    const q = query(collection(db,"todos"));
    const unsubscribe = onSnapshot(q,(querySnapshot) => {
      let todoArr = [];
      querySnapshot.forEach(doc => {
        todoArr.push({...doc.data(), id: doc.id});
      })
      setTodos(todoArr);
    })
    return () => unsubscribe();
  } , [])

  return (
    <div>
      <Form/>


     < Todolist
        todos ={todos}     
        />

      <Footer completedTodos = {completedTodos} totalTodos = {totalTodos} />
  
    </div>
  );
}

export default Todo;
