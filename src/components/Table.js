import React, { Fragment } from "react";

const Table = ({ data, config }) => {
  const dataToShow = data.map((rowdata) => {
    return (
      <tr key={rowdata.label} className="border-collapse border-b-2">
        {config.map((coldata) => {
          return (
            <td className="p-3" key={coldata.label}>
              {coldata.rendered(rowdata)}
            </td>
          );
        })}
      </tr>
    );
  });
  const headerToShow = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  return (
    <table className="border-collapse border-spacing-0 border-2">
      <thead>
        <tr className=" border-b-2">{headerToShow}</tr>
      </thead>
      <tbody>{dataToShow}</tbody>
    </table>
  );
};

export default Table;
