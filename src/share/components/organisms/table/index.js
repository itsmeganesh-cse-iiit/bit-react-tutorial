import React from "react";
import { StyledTable, TableHead } from "./styles";
const Table = ({ children, columns,list, block,noPad, ...rest }) => {
  
  return (
    <StyledTable {...rest} block={block} list={list} noPad={noPad}>
      <thead>
        <tr>
          {columns.map((col) => (
            <TableHead colSpan={col.colSpan} align={col.align}>
              {col.name}
            </TableHead>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </StyledTable>
  );
};

Table.defaultProps = {
  columns: [],
  block: false,
  list:false,
  noPad:false
};
export default Table;
