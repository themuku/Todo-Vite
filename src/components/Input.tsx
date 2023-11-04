import clsx from "clsx";
import React, { FC } from "react";

type InputType = {
  setTodoValue: React.Dispatch<React.SetStateAction<string>>;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  todoValue: string;
  isValid: boolean;
  isEditing?: boolean;
};

const Input: FC<InputType> = ({
  setTodoValue,
  setIsValid,
  todoValue,
  isValid,
  isEditing,
}) => {
  return (
    <input
      onChange={(e) => {
        if (todoValue.length === 0) {
          setIsValid(true);
        }

        setTodoValue(e.target.value);
      }}
      onBlur={() => {
        if (todoValue.length === 0) {
          setIsValid(false);
        }
      }}
      autoFocus={isEditing ? true : false}
      value={todoValue}
      type="text"
      placeholder="Type your todo"
      className={clsx(
        "transition-all duration-200 ease-in outline-none px-4 py-1 rounded-full text-white",
        {
          "bg-red-400 placeholder:text-white": !isValid,
          "bg-slate-800 placeholder-shown:bg-slate-800": isValid,
          "w-full": !isEditing,
          "w-1/2": isEditing,
        }
      )}
      name="todo"
      id="todo"
    />
  );
};

export default React.memo(Input);
