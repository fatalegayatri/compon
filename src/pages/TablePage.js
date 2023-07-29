import React from "react";
// import Table from "../components/Table";
import SortedTable from "../components/SortedTable";
const TablePage = () => {
  const data = [
    {
      name: "Apple",
      color: "bg-red-400",
      score: 6,
      prize: 60,
    },
    {
      name: "Banana",
      color: "bg-yellow-200",
      score: 3.5,
      prize: 30,
    },
    {
      name: "Orange",
      color: "bg-orange-300",
      score: 3,
      prize: 48,
    },
    {
      name: "Mango",
      color: "bg-yellow-300",
      score: 5,
      prize: 10,
    },
    {
      name: "Stwabbery",
      color: "bg-red-600",
      score: 10,
      prize: 40,
    },
  ];
  const config = [
    {
      label: "name",
      rendered: (data) => data.name,
      sortvalue: (data) => data.name,
    },
    {
      label: "color",
      rendered: (data) => {
        return <div className={`p-3 m-3 ${data.color} `}></div>;
      },
    },
    {
      label: "price",
      rendered: (data) => data.prize,
    },
    {
      label: "score",
      rendered: (data) => {
        return data.score;
      },
      sortvalue: (data) => data.score,
    },
  ];
  return <SortedTable data={data} config={config}></SortedTable>;
};

export default TablePage;
