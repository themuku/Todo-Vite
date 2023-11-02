import clsx from "clsx";
import { FC } from "react";
import Button, { ButtonSize } from "./Button";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const Todo: FC<{ todo: Todo }> = ({ todo }) => {
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
      <h4>{todo.title}</h4>
      <div className="flex gap-4">
        <Button isSecondary size={ButtonSize.SMALL} onClick={() => {}}>
          🖊️
        </Button>
        <Button isSecondary size={ButtonSize.SMALL} onClick={() => {}}>
          ❌
        </Button>
      </div>
    </div>
  );
};

export default Todo;
