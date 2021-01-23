import React from "react";
import Table from "share/components/organisms/table";
import styled from 'styled-components'

const Circle=styled.div`
  width: 56px;
  height: 56px;
  margin: 0 16px 0 0;
  background-color: rgba(216, 27, 100, 0.1);
  border-radius:50px;
`

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
  const TableData2 = () => {
    return (
      <>
        <tr align="center">
          <td colSpan={4} align="left"><div style={{display:"flex",alignItems:"center"}}><Circle/> &nbsp;Physics</div></td>
          <td><b>56/75</b> <br/>Score</td>
          <td><b>56/75</b> <br/>Accuracy</td>
          <td><b>56/75</b> <br/>Avg. Time/ question</td>
          
        </tr>
        <tr align="center">
        <td colSpan={4} align="left"><div style={{display:"flex",alignItems:"center"}}><Circle/> &nbsp;Chemistry</div></td>
          <td><b>56/75</b> <br/>Score</td>
          <td><b>56/75</b> <br/>Accuracy</td>
          <td><b>56/75</b> <br/>Avg. Time/ question</td>
          
        </tr>
      </>
    );
  };
  const TableData3 = () => {
    return (
      <>
        <tr align="left">
          <td><div style={{display:"flex",alignItems:"center"}}><Circle/> &nbsp;Physics</div></td>
          <td><div style={{display:"flex",alignItems:"center"}}><Circle/> &nbsp;Physics</div></td>
          <td><div style={{display:"flex",alignItems:"center"}}><Circle/> &nbsp;Physics</div></td>
          <td><div style={{display:"flex",alignItems:"center"}}><Circle/> &nbsp;Physics</div></td>
        </tr>

        <tr align="left">
          <td><div style={{display:"flex",alignItems:"center"}}><Circle/> &nbsp;Physics</div></td>
          <td><div style={{display:"flex",alignItems:"center"}}><Circle/> &nbsp;Physics</div></td>
          <td><div style={{display:"flex",alignItems:"center"}}><Circle/> &nbsp;Physics</div></td>
          <td><div style={{display:"flex",alignItems:"center"}}><Circle/> &nbsp;Physics</div></td>
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

      <h3>Table - w/o Heading</h3>
      <Table block list><TableData2/></Table>



      <h3>Table - w/o Heading ex-2</h3>
      <Table block ><TableData3/></Table>
    </div>
  );
};

export default TableExamples;
