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
  onClick: () => void;
};

const Button: FC<ButtonType> = ({
  children,
  disabled = true,
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
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
