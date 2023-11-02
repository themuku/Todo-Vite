import { FC } from "react";
import clsx from "clsx";

export enum ButtonSize {
  LARGE = "LARGE",
  SMALL = "SMALL",
}

type ButtonType = {
  disabled?: boolean;
  children: React.ReactNode;
  size?: ButtonSize;
  isSecondary?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: FC<ButtonType> = ({
  children,
  disabled = false,
  size = ButtonSize.LARGE,
  isSecondary = false,
  onClick,
}) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "text-center font-semibold transition-all duration-100 text-white text-semibold rounded-full",
        {
          "px-8 py-4": size === ButtonSize.LARGE,
          "px-2 py-1": size === ButtonSize.SMALL,
          "bg-lime-400 hover:bg-lime-600": !isSecondary,
          "bg-cyan-200 hover:bg-cyan-400": isSecondary,
          "cursor-not-allowed bg-slate-400 hover:bg-slate-400": disabled,
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
