import type { Todo } from "../App";

interface TodoItemProps {
  todo: Todo;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

export default function TodoItem({
  todo,
  onToggleTodo,
  onDeleteTodo,
}: TodoItemProps) {
  return (
    <li
      className={`flex items-center justify-between p-4 rounded-xl shadow-md bg-white/20
      ${
        todo.completed
          ? "border-l-4 border-green-400 line-through text-gray-300"
          : "border-l-4 border-purple-400 text-white"
      }
      hover:shadow-lg transition-shadow duration-200`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleTodo(todo.id)}
            className="w-5 h-5 accent-purple-400"
          />
          <span>{todo.text}</span>
        </div>
        <button
          className="text-red-400 hover:text-red-700 font-bold ml-auto"
          onClick={() => onDeleteTodo(todo.id)}
        >
          delete
        </button>
      </div>
    </li>
  );
}
