import { FC, useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { TodoType } from "./Todo";
import React from "react";

const Main: FC = () => {
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/todo")
      .then((res) => res.json())
      .then((data) => {
        setTodoList(data);
      });
  }, []);

  const deleteTodo = (id: number) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((todoItem) => id !== todoItem.id);
    });
    fetch(`http://localhost:3000/todo/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
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

        fetch(`http://localhost:3000/todo/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: newTitle,
          }),
        })
          .then((res) => res.json())
          .catch((err) => {
            console.log(err);
          });

        return todoItem;
      });
    });
  };

  const checkTodo = (id: number) => {
    setTodoList((prevTodo) => {
      return prevTodo.map((todoItem) => {
        if (todoItem.id === id) {
          return {
            ...todoItem,
            completed: !todoItem.completed,
          };
        }

        fetch(`http://localhost:3000/todo/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            completed: !todoItem.completed,
          }),
        })
          .then((res) => res.json())
          .catch((err) => {
            console.log(err);
          });

        return todoItem;
      });
    });
  };

  return (
    <main className="mt-16 flex flex-col items-stretch gap-6 w-[1000px] mx-auto h-[600px] mb-16">
      <TodoInput setTodo={setTodoList} />
      <TodoList
        checkTodo={checkTodo}
        onEdit={editTodo}
        onDelete={deleteTodo}
        todos={todoList}
      />
    </main>
  );
};

export default React.memo(Main);
