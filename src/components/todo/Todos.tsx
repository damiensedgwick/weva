import { useEffect, useState } from "react";
import { Cog, Trash } from "icons";
import styles from "./Todos.module.css";

const data = [
  {
    id: 1,
    title: "Take out the trash",
    completed: false
  },
  {
    id: 2,
    title: "Finish my side project",
    completed: false
  },
  {
    id: 3,
    title: "Go to the dentist",
    completed: false
  },
  {
    id: 4,
    title: "Grab groceries for the weekend",
    completed: false
  },
  {
    id: 5,
    title: "Walk the dog",
    completed: false
  },
  {
    id: 6,
    title: "Clean the car",
    completed: false
  }
];

interface Props {
  username: string;
}

export const Todos = ({ username }: Props) => {
  const [todos, setTodos] = useState<
    { id: number; title: string; completed: boolean }[]
  >([]);

  useEffect(() => {
    const ls = window.localStorage;
    const todos = ls.getItem("WEVA_TODOS");

    if (todos) {
      setTodos(JSON.parse(todos));
    } else {
      ls.setItem("WEVA_TODOS", JSON.stringify(data));
      setTodos(data);
    }
  }, [todos]);

  const handleUpdateTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }

      return todo;
    });

    const ls = window.localStorage;

    ls.setItem("WEVA_TODOS", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    const ls = window.localStorage;

    ls.setItem("WEVA_TODOS", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.settings}>
        <Cog />
      </button>
      <h1 className={styles.title}>Welcome {username}</h1>
      <p className={styles.subtitle}>Here is a list of your todos</p>
      <div className={styles.todos}>
        <ul className={styles.remaining}>
          {todos
            .filter((todo) => !todo.completed)
            .map((todo) => (
              <li key={todo.id} className={styles.todo}>
                <p>{todo.title}</p>
                <div className={styles.actions}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleUpdateTodo(todo.id)}
                  />
                  <button
                    className={styles.button}
                    type="button"
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    <Trash />
                  </button>
                </div>
              </li>
            ))}
        </ul>
        <ul className={styles.completed}>
          {todos
            .filter((todo) => todo.completed)
            .map((todo) => (
              <li key={todo.id} className={styles.todo}>
                <p>{todo.title}</p>
                <div className={styles.actions}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleUpdateTodo(todo.id)}
                  />
                  <button
                    className={styles.button}
                    type="button"
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    <Trash />
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
