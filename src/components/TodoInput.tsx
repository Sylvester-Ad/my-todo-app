interface TodoInputProps {
  todoText: string;
  setTodoText: (value: string) => void;
  handleAddTodo: () => void;
}

export default function TodoInput({
  todoText,
  setTodoText,
  handleAddTodo,
}: TodoInputProps) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        id="input"
        className="flex-1 p-2 border placeholder-cyan-800 border-blue-300 text-white rounded-2xl hover:border-blue-500 focus:ring-purple-400 focus:outline-none"
        placeholder="Enter a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        className="px-4 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-md transition-colors"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
}
