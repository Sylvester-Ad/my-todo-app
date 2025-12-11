import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAddTodo(): void {
    if (!todoText.trim()) return;

    setTodos((prev) => [
      {
        id: Date.now(),
        text: todoText,
        completed: false,
      },
      ...prev,
    ]);
    setTodoText("");
  }

  function handleDeleteTodo(id: number): void {
    const newTodos: Todo[] = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function handleToggleTodo(id: number): void {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  return (
    <div className="min-h-screen items-center justify-center flex flex-col bg-linear-to-br from-[#3b0b59] via-[#0f172a] to-black p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-6 space-y-4">
        <p className="text-center">My first TypeScript + React App</p>
        <TodoHeader />
        <TodoInput
          todoText={todoText}
          setTodoText={setTodoText}
          handleAddTodo={handleAddTodo}
        />
        <TodoList
          todos={todos}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
