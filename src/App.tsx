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
      ...prev,
      {
        id: Date.now(),
        text: todoText,
        completed: false,
      },
    ]);
    setTodoText("");
  }

  function handleDeleteTodo(id: number): void {
    const newTodos: Todo[] = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function toggleTodo(id: number): void {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  return (
    <>
      <p>Welcome to your first TypeScript + React App</p>
      <TodoHeader />
      <TodoInput
				todoText={todoText}
				setTodoText={setTodoText}
				handleAddTodo={handleAddTodo}
			/>
			<TodoList 
				todos={todos}
				toggleTodo={toggleTodo}
				handleDeleteTodo={handleDeleteTodo}
			/>
    </>
  );
}

export default App;
