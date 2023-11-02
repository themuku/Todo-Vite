import { FC } from "react";
import Todo from "./Todo";

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

const TodoList: FC = () => {
  return (
    <div className="bg-slate-100 h-full rounded-2xl flex flex-col gap-3 py-4 px-4">
      {TODOS.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default TodoList;
