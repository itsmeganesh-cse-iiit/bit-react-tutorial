import React from "react";
import Table from "share/components/organisms/table";

const columns = [
  {
    name: "Topic Name",
    align: "left",
    colSpan: 4,
  },
  {
    name: "Questions",
  },
  {
    name: "Correct",
  },
  {
    name: "Wrong",
  },
];
const TableExamples = () => {
  const TableData = () => {
    return (
      <>
        <tr align="center">
          <td colSpan={4} align="left">Atomic Physics & Nuclear Physics</td>
          <td >1</td>
          <td>1</td>
          <td>0</td>
        </tr>
        <tr align="center">
          <td colSpan={4} align="left">
            Electrostatics - I [Electric Charges, Fields & Poten
            sldfkjskldjflskdjf
          </td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
        </tr>
      </>
    );
  };
  return (
    <div>
      <h3>Table</h3>
      <Table columns={columns}><TableData/></Table>

      <h3>Table-Block</h3>
      <Table columns={columns} block><TableData/></Table>

      <h3>Table - Heading - alignments</h3>
      <Table columns={columns} block><TableData/></Table>
    </div>
  );
};

export default TableExamples;
