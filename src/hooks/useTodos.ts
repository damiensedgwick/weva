import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const seed = [
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

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const ls = window.localStorage;

  useEffect(() => {
    const ls = window.localStorage;
    const todos = ls.getItem("WEVA_TODOS");

    if (todos) {
      setTodos(JSON.parse(todos));
    } else {
      ls.setItem("WEVA_TODOS", JSON.stringify(seed));
      setTodos(seed);
    }
  }, []);

  const handleAddTodo = (todo: string) => {
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

  const handleUpdateTodo = (id: number) => {
    const todos = ls.getItem("WEVA_TODOS");

    if (todos) {
      const parsedTodos = JSON.parse(todos);

      const updatedTodos = parsedTodos.map((todo: Todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }

        return todo;
      });

      ls.setItem("WEVA_TODOS", JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
    }
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    ls.setItem("WEVA_TODOS", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  return {
    todos,
    setTodos,
    handleAddTodo,
    handleUpdateTodo,
    handleDeleteTodo
  };
};

export { useTodos, type Todo };
