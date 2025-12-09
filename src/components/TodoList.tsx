import type { Todo } from "../App";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

export default function TodoList({
  todos,
  toggleTodo,
  handleDeleteTodo,
}: TodoListProps) {
  return (
    <div>
      <ul>
        {todos.length === 0 && <li>No todos</li>}

        {todos.map((todo) => (
          <TodoItem
						key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
