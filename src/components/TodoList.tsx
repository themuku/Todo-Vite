import { FC } from "react";
import Todo, { TodoType } from "./Todo";

const TodoList: FC<{ todos: TodoType[] }> = ({ todos }) => {
  return (
    <div className="bg-slate-100 h-full rounded-2xl flex flex-col gap-3 py-4 px-4">
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default TodoList;
