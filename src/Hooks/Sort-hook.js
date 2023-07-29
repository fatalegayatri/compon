import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
const useSort = (data, config) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const hanldeOnclick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("dsec");
      setSortBy(label);
    } else if (sortOrder === "dsec") {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  let updatedData = data;
  if (sortBy && sortOrder) {
    const { sortvalue } = config.find((column) => column.label === sortBy);
    updatedData = [...data].sort((a, b) => {
      const valueA = sortvalue(a);
      const valueB = sortvalue(b);
      const reverseorder = sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseorder;
      } else {
        return (valueA - valueB) * reverseorder;
      }
    });
  }
  function getIcon(label, sortBy, sortOrder) {
    if (label !== sortBy) {
      return (
        <div>
          <GoChevronUp />
          <GoChevronDown />
        </div>
      );
    }
    if (sortOrder === null) {
      return (
        <div className="">
          <GoChevronUp />
          <GoChevronDown />
        </div>
      );
    } else if (sortOrder === "asc") {
      return (
        <div className="">
          {" "}
          <GoChevronDown />
        </div>
      );
    } else if (sortOrder === "desc") {
      return (
        <div className="">
          <GoChevronDown />;
        </div>
      );
    }
  }
  return {
    sortBy,
    sortOrder,
    updatedData,
    hanldeOnclick,
    getIcon,
  };
};

export default useSort;
