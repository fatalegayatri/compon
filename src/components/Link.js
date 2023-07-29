import React from "react";
import { useContext } from "react";
import classNames from "classnames";
import NavigationContext from "../Context/NavigationContext";
function Link({ to, children, className }) {
  const { Nagivate, currentPath } = useContext(NavigationContext);
  const handleClick = (event) => {
    if (event.cntrlKey || event.metaKey) {
      return;
    }
    Nagivate(to);
    event.preventDefault();
  };

  const classes = classNames("text-blue-400  ", className, {
    "text-blue-600 font-bold border-l-4 border-gray-500 pl-3 ":
      currentPath === to,
  });

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
