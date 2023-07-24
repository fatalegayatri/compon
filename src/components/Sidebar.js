import React from "react";
import Link from "./Link";

const Sidebar = () => {
  const links = [
    {
      label: "Accordion",
      path: "/Accordion",
    },
    {
      label: "Dropdown",
      path: "/Dropdown",
    },
    {
      label: "Button",
      path: "/Button",
    },
  ];
  const rederedList = links.map((link) => {
    return (
      <Link key={link.label} to={link.path}>
        {link.label}
      </Link>
    );
  });
  return <div className="">{rederedList}</div>;
};

export default Sidebar;
