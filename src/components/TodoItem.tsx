import type { Todo } from "../App";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

export default function TodoItem({
  todo,
  toggleTodo,
  handleDeleteTodo,
}: TodoItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {todo.text}
      <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
    </li>
  );
}
