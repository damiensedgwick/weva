import { useState } from "react";
import { useTodos } from "hooks";

import styles from "./AddTodo.module.css";

export const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodos();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        setTodo("");
        handleAddTodo(todo);
      }}
    >
      <input
        type="text"
        placeholder="Add todo"
        className={styles.input}
        onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  );
};
