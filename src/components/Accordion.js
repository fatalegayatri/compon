import React from "react";
import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";
const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (nextIndex) => {
    if (nextIndex === activeIndex) {
      setActiveIndex(-1);
      return;
    }
    setActiveIndex(nextIndex);
  };

  const renderedItems = data.map((item, index) => {
    const Isextend = index === activeIndex;
    const icons = (
      <span className="text-2xl">
        {Isextend ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.id} className="w-96">
        <div
          onClick={() => {
            handleClick(index);
          }}
          className=" flex items-center justify-between cursor-pointer bg-slate-100 p-4 rounded-md border-b border-2"
        >
          {item.title}
          {icons}
        </div>
        {Isextend && (
          <div className="bg-gray-200 p-6 rounded-md border-b border-2">
            {item.content}
          </div>
        )}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
};

export default Accordion;
