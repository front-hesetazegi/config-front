import React from "react";
import "./button.css";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  variant?: "outlined" | "contained" | "text";
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "outlined",
  size = "medium",
  backgroundColor,
  label,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        `storybook-button--${variant}`,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
