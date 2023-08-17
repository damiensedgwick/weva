import { useState } from "react";

import styles from "./AddTodo.module.css";

interface Props {
  handleAddTodo: (todo: string) => void;
}

export const AddTodo = ({ handleAddTodo }: Props) => {
  const [todo, setTodo] = useState("");

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
