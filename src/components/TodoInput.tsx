import { FC, FormEvent, useState } from "react";
import Button from "./Button";
import { TodoType } from "./Todo";

const TodoInput: FC<{ todos: TodoType[] }> = ({ todos }) => {
  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: TodoType = {
      id: todos.length + 1,
      title: todoValue,
      completed: false,
    };

    todos.push(newTodo);
    setTodoValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-16 flex justify-between gap-7 self-stretch"
    >
      <input
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        value={todoValue}
        type="text"
        placeholder="Type your todo"
        className="w-full placeholder-shown:bg-slate-800 bg-slate-600 transition-all duration-200 ease-in outline-none px-4 py-1 rounded-full text-white"
        name="todo"
        id="todo"
      />
      <Button>Submit</Button>
    </form>
  );
};

export default TodoInput;
