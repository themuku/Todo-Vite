import { FC, FormEvent, useState } from "react";
import Button from "./Button";
import { TodoType } from "./Todo";
import clsx from "clsx";
import Input from "./Input";

const TodoInput: FC<{
  setTodo: React.Dispatch<React.SetStateAction<TodoType[]>>;
}> = ({ setTodo }) => {
  const [todoValue, setTodoValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todoValue.length === 0) {
      setIsValid(false);
      return null;
    }

    setIsValid(true);

    setTodo((prevTodos) => {
      const newTodo: TodoType = {
        id: prevTodos.length + 1,
        title: todoValue,
        completed: false,
      };

      return [...prevTodos, newTodo];
    });
    setTodoValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-16 flex justify-between gap-7 self-stretch"
    >
      <Input
        isValid={isValid}
        setIsValid={setIsValid}
        setTodoValue={setTodoValue}
        todoValue={todoValue}
      />
      <Button>Submit</Button>
    </form>
  );
};

export default TodoInput;
