import React from "react";
import styles from "./todo.module.css";

function Todoitem({ item, handleDelete, handleComplete }) {
  let nameStyle = item.done ? styles.completed : "";
  console.log(item)
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={nameStyle} onClick={() => handleComplete(item)}>
          {item.name}
        </span>
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(item.id)}
          >
            X
          </button>
        </span>
      </div>
    </div>
  );
}

export default Todoitem;
