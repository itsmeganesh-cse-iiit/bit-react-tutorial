import React from "react";

const ArrowDown = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="8"
      fill="none"
      viewBox="0 0 14 8"
    >

      <path
        stroke={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.6"
        d="M1 1l6 6 6-6"
      />
 
    </svg>
  );
};
ArrowDown.defaultProps = {
  fill: "#242424",
};
export default ArrowDown;
