import React, { useState } from "react";
import {
  Wrapper,
  DropDownIcon,
  DropDownName,
  MenuIcon,
  DropdownMenuHolder,
  DropDownContainer,
  DropDownItemWrapper,
  ItemName,
} from "./styles";
import ArrowDown from "./assets/arrow-down.svg";

const DropdownMenu = ({activeColor,data,name,history}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };
  

  const handleItemClick=(pathname,fn)=>{
    if(fn)  fn()
    else history.push({pathname:pathname})
    setOpenMenu(false)
  }
  return (
    <DropDownContainer>
      <DropdownMenuButton onClick={toggleMenu} name={name} />
      <DropdownMenuHolder show={openMenu}>
        {data.map((each) => (
          <DropdownMenuItem
            label={each.label}
            icon={each.icon}
            color={"#212226"}
            activeColor={activeColor}
            route={each.route}
            handleItemClick={handleItemClick}
            fn={each.fn}
          />
        ))}
      </DropdownMenuHolder>
    </DropDownContainer>
  );
};

const DropdownMenuItem = ({ label, icon, color,activeColor,route,handleItemClick,fn }) => {
  const [hovered, setHovered] = useState(false)
  let Icon = icon;
  return (
    <DropDownItemWrapper onClick={()=>handleItemClick(route,fn) } activeColor={activeColor} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
      <Icon fill={hovered ? activeColor : color } />
      <ItemName activeColor={activeColor} >{label}</ItemName>
    </DropDownItemWrapper>
  );
};

const DropdownMenuButton = ({ name,...rest}) => {
  return (
    <Wrapper {...rest}>
      <DropDownIcon>{name.charAt(0) || ""}</DropDownIcon>
      <DropDownName title={name}>{name}</DropDownName>
      <MenuIcon src={ArrowDown} alt="arrow-down" />
    </Wrapper>
  );
};

export default DropdownMenu;

DropdownMenuButton.defaultProps={
  name:""
}
DropdownMenu.defaultProps={
    activeColor:"#d71a63"
}