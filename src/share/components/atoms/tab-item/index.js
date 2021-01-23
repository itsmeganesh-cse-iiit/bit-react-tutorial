import React from "react";
import { Wrap } from "./styles";

const TabItem = ({
  vertical,
  contentAlign,
  color,
  activeColor,
  active,
  showArrow,
  arrowPosition,
  borderRadius,
  title,
  children,
  onClick,
  id,
  ...rest
}) => {
  return (
    <Wrap
      contentAlign={contentAlign}
      activeColor={activeColor}
      color={color}
      active={active}
      showArrow={showArrow}
      arrowPosition={arrowPosition}
      borderRadius={borderRadius}
      vertical={vertical}
      {...rest}
      onClick={()=>onClick(id)}
    >
      {children ? children : title}
    </Wrap>
  );
};

TabItem.defaultProps = {
  contentAlign: "left",
  color: "#e8e8f3",
  activeColor:"#d71a63",
  active: false,
  showArrow: true,
  arrowPosition: "middle",
  vertical: false,
  borderRadius:"0px",
  title:'Tab Item',
  onClick:()=>{}
};
export default TabItem;
