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
        <tr>
          <td colSpan={4}>Atomic Physics & Nuclear Physics</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
        </tr>
        <tr>
          <td colSpan={4}>
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
