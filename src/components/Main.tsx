import { FC } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Main: FC = () => {
  return (
    <main className="mt-16 flex flex-col items-stretch gap-6 w-[1000px] mx-auto h-[600px] mb-16">
      <TodoInput />
      <TodoList />
    </main>
  );
};

export default Main;
