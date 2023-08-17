import { Trash } from "icons";

import styles from "./Todos.module.css";
import { Todo } from "hooks/useTodos";

interface Props {
  username: string;
  todos: Todo[];
  handleUpdateTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

export const Todos = ({
  username,
  todos,
  handleUpdateTodo,
  handleDeleteTodo
}: Props) => {
  return (
    <div className={styles.wrapper}>
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
