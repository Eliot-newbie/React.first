import React from "react";
import styles from "./todo.module.css";

function Todoitem({ item, handleDelete, handleComplete }) {
  let nameStyle = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={nameStyle} onClick={() => handleComplete(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(item)}
          >
            X
          </button>
        </span>
      </div>
    </div>
  );
}

export default Todoitem;
