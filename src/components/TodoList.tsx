import { FC } from "react";
import Todo, { TodoType } from "./Todo";

type TodoListType = {
  todos: TodoType[];
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
  checkTodo: (id: number) => void;
};

const TodoList: FC<TodoListType> = ({ todos, onDelete, onEdit, checkTodo }) => {
  return (
    <div className="bg-slate-100 h-full rounded-2xl flex flex-col gap-3 py-4 px-4">
      {todos.map((todo) => {
        return (
          <Todo
            checkTodo={checkTodo}
            onEdit={onEdit}
            onDelete={onDelete}
            todo={todo}
            key={todo.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
