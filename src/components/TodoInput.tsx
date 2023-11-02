import { FC } from "react";
import Button from "./Button";

const TodoInput: FC = () => {
  return (
    <form className="mt-16 flex justify-between gap-7 self-stretch">
      <input
        type="text"
        placeholder="Type your todo"
        className="w-full placeholder-shown:bg-slate-800 bg-slate-600 transition-all duration-200 ease-in outline-none px-4 py-1 rounded-full text-white"
        name="todo"
        id="todo"
      />
      <Button onClick={() => {}}>Submit</Button>
    </form>
  );
};

export default TodoInput;
