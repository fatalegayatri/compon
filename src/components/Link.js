import React from "react";
import { useContext } from "react";
import NavigationContext from "../Context/NavigationContext";
function Link({ to, children }) {
  const { Nagivate } = useContext(NavigationContext);
  const handleClick = (event) => {
    if (event.cntrlKey || event.metaKey) {
      return;
    }
    Nagivate(to);
    event.preventDefault();
  };
  console.log(to);

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
