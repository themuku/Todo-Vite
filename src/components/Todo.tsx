import clsx from "clsx";
import { FC, useState } from "react";
import Button, { ButtonSize } from "./Button";
import Input from "./Input";

export type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

const Todo: FC<{
  todo: TodoType;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
}> = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [todoValue, setTodoValue] = useState(todo.title);

  return (
    <div
      className={clsx(
        "px-4 py-2 w-full rounded-md flex justify-between items-center",
        {
          "bg-lime-300": todo.completed,
          "bg-red-400": !todo.completed,
        }
      )}
    >
      {isEditing && (
        <>
          <Input
            isEditing
            isValid={isValid}
            setIsValid={setIsValid}
            setTodoValue={setTodoValue}
            todoValue={todoValue}
          />
          <div className="flex gap-4">
            <Button
              isSecondary
              isEditing
              size={ButtonSize.SMALL}
              onClick={() => {
                if (!isEditing) return;
                onEdit(todo.id, todoValue);
                setIsEditing(false);
              }}
            >
              Edit
            </Button>
          </div>
        </>
      )}
      {!isEditing && (
        <>
          <h4>{todo.title}</h4>
          <div className="flex gap-4">
            <Button
              isSecondary
              size={ButtonSize.SMALL}
              onClick={() => {
                setIsEditing(true);
              }}
            >
              🖊️
            </Button>
            <Button
              isSecondary
              size={ButtonSize.SMALL}
              onClick={() => {
                onDelete(todo.id);
              }}
            >
              ❌
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
