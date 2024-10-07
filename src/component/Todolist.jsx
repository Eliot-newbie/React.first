import React from "react";
import Todoitem from "./Todoitem";
import styles from "./todo.module.css";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "./utils/firebase";

function Todolist({ todos, setTodos }) {
    const sortedTodos = todos.slice().sort(
        (a , b)=> Number(a.done)- Number (b.done)
    );
  async function handleDelete(id) {
    // setTodos(todos.filter((i) => i !== item));
    await deleteDoc(doc(db, "todos", id));
  }
  async function handleComplete(item){
    // const newArray = todos.map(i =>(
    //     i.name === name?{...i,done: !i.done} : i
    // ));
    // setTodos(newArray)

    await updateDoc(doc(db,"todos", item.id), {
      done : !item.done,
    })
    
  }

//   let numbers = [2,6,3,1].sort((a,b)=> a - b);
//   console.log(numbers)
  return (
    <div className={styles.list}>
      <div>
        {sortedTodos.map((item) => (
          <Todoitem 
          key={item.id} 
          item={item}
          handleDelete= {handleDelete}
          handleComplete= {handleComplete}
           />
        ))}
      </div>
    </div>
  );
}

export default Todolist;
