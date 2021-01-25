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
  ItemIcon,
} from "./styles";
import ArrowDown from "./assets/arrow-down.svg";
import ProfileIcon from "./assets/ProfileIcon";
import LogoutIcon from "./assets/LogoutIcon";
import FaqIcon from "./assets/FaqIcon";
const DropdownMenu = ({activeColor}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  let profileData = [
    {
      id:1,
      label: "Profile",
      icon: ProfileIcon,
      route: "/settings/profile",
    },
    {
      id:2,
      label: "FAQ's",
      icon: FaqIcon,
      route: "/settings/faqs",
    },
    {
      id:3,
      label: "Logout",
      icon: LogoutIcon,
      route: "/logout",
    },
  ];
  return (
    <DropDownContainer >
      <DropdownMenuButton onClick={toggleMenu} />
      <DropdownMenuHolder show={openMenu}>
        {profileData.map((each) => (
          <DropdownMenuItem
            label={each.label}
            icon={each.icon}
            color={"#212226"}
            activeColor={activeColor}
          />
        ))}
      </DropdownMenuHolder>
    </DropDownContainer>
  );
};

const DropdownMenuItem = ({ label, icon, color,activeColor }) => {
  let Icon = icon;
  return (
    <DropDownItemWrapper activeColor={activeColor}>
      <Icon fill={color} activeColor={activeColor} />
      <ItemName >{label}</ItemName>
    </DropDownItemWrapper>
  );
};

const DropdownMenuButton = ({ ...rest }) => {
  return (
    <Wrapper {...rest}>
      <DropDownIcon>U</DropDownIcon>
      <DropDownName>Umesh Kumar</DropDownName>
      <MenuIcon src={ArrowDown} alt="arrow-down" />
    </Wrapper>
  );
};
export default DropdownMenu;


DropdownMenu.defaultProps={
    activeColor:"#d71a63"
}