import React from "react";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "blue" | "green";
type ButtonBg = "light" | "dark" | "blue";
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  parentBg?: ButtonBg;
  className?: string;
  type?: ButtonType;
  disabled?: boolean;

  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const sizeMap = {
  sm: "h-[40px] text-sm px-5",
  md: "h-[50px] text-base px-6",
  lg: "h-[60px] lg:h-[50px] xxl:h-[60px] text-base s:text-xl lg:text-base xxl:text-xl px-[10px] xl:px-6 xxl:px-8",
};

const colorMap = {
  blue: "bg-main-blue text-main-white",
  green: "bg-main-green text-main-dark",
};

const hoverMap = {
  light: {
    blue: "hover:bg-main-dark",
    green: "hover:bg-main-dark hover:text-main-white",
  },
  dark: {
    blue: "hover:bg-main-white hover:text-main-dark",
    green: "hover:bg-main-white",
  },
  blue: {
    blue: "hover:bg-main-white hover:text-main-blue",
    green: "hover:bg-main-white",
  },
};

const Button = ({
  children,
  size = "md",
  variant = "blue",
  parentBg = "light",
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) => {
  const classes = `
    rounded-[8px]
    font-bold
    font-helvetica
    leading-[130%]
    flex items-center justify-center
    transition-colors duration-300
    w-full
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${sizeMap[size]}
    ${colorMap[variant]}
    ${hoverMap[parentBg][variant]}
    ${className}
  `;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;
