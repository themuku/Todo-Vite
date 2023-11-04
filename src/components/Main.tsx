import { FC, useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { TodoType } from "./Todo";
import React from "react";

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
  const [todoList, setTodoList] = useState<TodoType[]>(TODOS);

  const deleteTodo = (id: number) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((todoItem) => id !== todoItem.id);
    });
  };

  const editTodo = (id: number, newTitle: string) => {
    setTodoList((prevTodo) => {
      return prevTodo.map((todoItem) => {
        if (todoItem.id === id) {
          return {
            ...todoItem,
            title: newTitle,
          };
        }
        return todoItem;
      });
    });
  };

  return (
    <main className="mt-16 flex flex-col items-stretch gap-6 w-[1000px] mx-auto h-[600px] mb-16">
      <TodoInput setTodo={setTodoList} />
      <TodoList onEdit={editTodo} onDelete={deleteTodo} todos={todoList} />
    </main>
  );
};

export default React.memo(Main);
