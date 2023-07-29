import React from "react";
import useSort from "../Hooks/Sort-hook";
import Table from "./Table";
const SortedTable = (props) => {
  const { config, data } = props;
  const { hanldeOnclick, updatedData, getIcon, sortBy, sortOrder } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortvalue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          onClick={() => hanldeOnclick(column.label)}
          className="hover:bg-gray-300 cursor-pointer p-3"
        >
          <div className="flex justify-between  items-center">
            {getIcon(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return (
    <>
      <Table {...props} config={updatedConfig} data={updatedData}></Table>{" "}
    </>
  );
};

export default SortedTable;
