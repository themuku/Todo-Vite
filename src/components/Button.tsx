import { FC } from "react";
import clsx from "clsx";
import React from "react";

export enum ButtonSize {
  LARGE = "LARGE",
  SMALL = "SMALL",
}

type ButtonType = {
  disabled?: boolean;
  children: React.ReactNode;
  size?: ButtonSize;
  isSecondary?: boolean;
  isEditing?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: FC<ButtonType> = ({
  children,
  disabled = false,
  size = ButtonSize.LARGE,
  isSecondary = false,
  isEditing,
  onClick,
}) => {
  console.log(isEditing);
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "text-center font-semibold transition-all duration-100  text-semibold rounded-full",
        {
          "px-8 py-4": size === ButtonSize.LARGE,
          "px-2 py-1": size === ButtonSize.SMALL,
          "bg-lime-400 hover:bg-lime-600": !isSecondary,
          "bg-cyan-200 hover:bg-cyan-400": isSecondary,
          "cursor-not-allowed bg-slate-400 hover:bg-slate-400": disabled,
          "bg-cyan-300 hover:bg-cyan-500 text-slate-900 px-4": isEditing,
          "text-white": !isEditing,
        }
      )}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
