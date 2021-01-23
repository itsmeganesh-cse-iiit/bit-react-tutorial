import React from "react";
import { StyledTable, TableHead } from "./styles";
const Table = ({ children, columns, block, ...rest }) => {
  return (
    <StyledTable {...rest} block={block}>
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
};
export default Table;
