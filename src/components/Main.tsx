import { FC } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TODOS = [
  {
    id: 1,
    title: "Todo 1",
    completed: true,
  },
  {
    id: 2,
    title: "Todo 2",
    completed: false,
  },
  {
    id: 3,
    title: "Todo 3",
    completed: false,
  },
];

const Main: FC = () => {
  return (
    <main className="mt-16 flex flex-col items-stretch gap-6 w-[1000px] mx-auto h-[600px] mb-16">
      <TodoInput todos={TODOS} />
      <TodoList todos={TODOS} />
    </main>
  );
};

export default Main;
