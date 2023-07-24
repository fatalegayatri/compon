import React from "react";
import { useState, useEffect } from "react";
import Panel from "./Panel";
import { useRef } from "react";
import { GoChevronDown } from "react-icons/go";
function Dropdown({ options, onChange, value }) {
  const [Isopen, setIsopen] = useState(false);
  const Elref = useRef(null);
  const handleClick = () => {
    setIsopen(!Isopen);
  };
  const handleSelect = (option) => {
    setIsopen(false);
    onChange(option);
  };
  console.log(options);
  const renderedOption = options.map((option) => {
    return (
      <div
        className="hover:bg-blue-200 p-1"
        onClick={() => handleSelect(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });
  useEffect(() => {
    const onBodyClick = (event) => {
      if (!Elref.current.contains(event.target)) {
        setIsopen(false);
      }
    };
    document.addEventListener("click", onBodyClick);
    return () => {
      document.removeEventListener("click", onBodyClick);
    };
  }, []);

  return (
    <div ref={Elref} className="w-48 relative ">
      <Panel
        onClick={handleClick}
        className="flex justify-between items-center"
      >
        {value?.label || "select..."} <GoChevronDown className="text-lg" />{" "}
      </Panel>
      {Isopen && (
        <Panel className=" absolute top-full w-full cursor-pointer ">
          {renderedOption}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
