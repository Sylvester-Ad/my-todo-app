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
    <>
      <input
        id="input"
        placeholder="Enter a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </>
  );
}
