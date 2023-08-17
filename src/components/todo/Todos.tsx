import { Cog, Trash } from "icons";
import { useTodos } from "hooks";

import styles from "./Todos.module.css";

interface Props {
  username: string;
}

export const Todos = ({ username }: Props) => {
  const { todos, handleUpdateTodo, handleDeleteTodo } = useTodos();

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
