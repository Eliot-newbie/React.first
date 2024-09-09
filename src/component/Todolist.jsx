import React from "react";
import Todoitem from "./Todoitem";
import styles from "./todo.module.css";

function Todolist({ todos, setTodos }) {
    const sortedTodos = todos.slice().sort(
        (a , b)=> Number(a.done)- Number (b.done)
    );
  function handleDelete(item) {
    setTodos(todos.filter((i) => i !== item));
  }
  function handleComplete(name){
    const newArray = todos.map(i =>(
        i.name === name?{...i,done: !i.done} : i
    ));
    setTodos(newArray)
  }

//   let numbers = [2,6,3,1].sort((a,b)=> a - b);
//   console.log(numbers)
  console.log(todos)
  return (
    <div className={styles.list}>
      <div>
        {sortedTodos.map((item) => (
          <Todoitem 
          key={item.name} 
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
