import React from "react";
import Link from "./Link";

const Sidebar = ({ className }) => {
  const links = [
    {
      label: "Accordion",
      path: "/Accordion",
    },
    {
      label: "Modal",
      path: "/Modal",
    },
    {
      label: "Dropdown",
      path: "/Dropdown",
    },
    {
      label: "Button",
      path: "/Button",
    },
    {
      label: "Table",
      path: "/Table",
    },
  ];
  const rederedList = links.map((link) => {
    return (
      <Link key={link.label} to={link.path} className={"mb-3"}>
        {link.label}
      </Link>
    );
  });

  return <div className="flex flex-col">{rederedList}</div>;
};

export default Sidebar;
