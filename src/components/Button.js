import React from "react";
import classNames from "classnames";
const Button = ({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  rounded,
  whiteBg,
  ...rest
}) => {
  const classes = classNames(
    rest.className,
    "py-1.5 flex items-center px-3 border",
    {
      "bg-blue-500 text-white border-blue-500": primary && !whiteBg,
      "bg-white text-blue-500 border-blue-500": primary && whiteBg,
      "bg-gray-500 text-white border-gray-500": secondary && !whiteBg,
      "bg-white text-gray-500 border-gray-500": secondary && whiteBg,
      "bg-yellow-500 text-white border-yellow-500": warning && !whiteBg,
      "bg-white text-yellow-500 border-yellow-500": warning && whiteBg,
      "bg-green-500 text-white border-green-500": success && !whiteBg,
      "bg-white text-green-500 border-green-500": success && whiteBg,
      "bg-red-500 text-white border-red-500": danger && !whiteBg,
      "bg-white text-red-500 border-red-500": danger && whiteBg,
      "rounded-full": rounded,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}{" "}
    </button>
  );
};
Button.propTypes = {
  vaditation: ({ primary, secondary, success, danger, warning }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!danger) +
      Number(!!warning);
    if (count > 1) {
      return new Error("only one button type can be used at a time");
    }
  },
};

export default Button;
