import React from "react";
import classNames from "classnames";
const Panel = ({ className, children, ...rest }) => {
  const classes = classNames(
    "border shadow-sm p-3  bg-white rounded",
    className
  );
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Panel;
