import { useState } from "react";
import styles from "./AddTodo.module.css";

interface Props {
  setTodos: (
    todos: { id: number; title: string; completed: boolean }[]
  ) => void;
}

export const AddTodo = ({ setTodos }: Props) => {
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    const ls = window.localStorage;
    const todos = ls.getItem("WEVA_TODOS");

    if (todos) {
      const parsedTodos = JSON.parse(todos);

      const newTodo = {
        id: parsedTodos[parsedTodos.length - 1].id + 1,
        title: todo,
        completed: false
      };

      const updatedTodos = [...parsedTodos, newTodo];

      ls.setItem("WEVA_TODOS", JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
    } else {
      const newTodo = {
        id: 1,
        title: todo,
        completed: false
      };

      ls.setItem("WEVA_TODOS", JSON.stringify([newTodo]));
      setTodos([newTodo]);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        handleAddTodo();
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
