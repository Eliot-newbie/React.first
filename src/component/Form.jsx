import React, { useState } from "react";
import styles from "./form.module.css";

function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({
    name: "",
    done: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name: "",done:false});
  }

  return (
    <form className={styles.todoform}>
      <input
        className={styles.modernInput}
        type="text"
        value={todo.name}
        onChange={(e) => setTodo({ ...todo, name: e.target.value })}
      />
      <button
        className={styles.modernButton}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        add
      </button>
    </form>
  );
}

export default Form;
