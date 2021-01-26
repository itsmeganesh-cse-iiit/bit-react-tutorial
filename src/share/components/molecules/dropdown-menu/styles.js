import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const DropDownIcon = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  margin: 0 8px 0 0;
  border-radius: 32px;
  background-color: #d71a63;
  color: #ffff;
  font-family: inherit;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const DropDownName = styled.div`
  display: inline-block;
  max-width: 94px;
  height: 18px;
  margin: 6px 5px 8px;
  font-family: Lato;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #242424;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const MenuIcon = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;

export const DropdownMenuHolder = styled.div`
  div {
    border-bottom: 1px solid #e5e5e5;

    &:last-child {
      border-bottom: none;
    }
  }
  position: absolute;
  transition:all 0.5s ease;
  top: 55px;
  right: 0px;
  display: none;
  border-radius: 6px;
  box-shadow: 0 16px 32px 0 rgba(221, 230, 237, 0.4);
  background-color: #ffffff;
  padding: 20px 16px 20px;
  background-color: #ffffff;
  ${({ show }) =>
    show &&
    css`
      display: block;
    `}
  /* border:1px solid red; */
    &:after {
    color: "#ffff";
    content: "";
    position: absolute;

    border-width: 17px 17px 0;
    border-style: solid;
    box-shadow: 0 16px 32px 0 rgba(221, 230, 237, 0.4);
    /* box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.15); */
    border-color: #ffff transparent;
    top: -17px;
    right: 40px;
    z-index: 1;
    transform: rotateX(180deg);
  }
`;

export const DropDownContainer = styled.div`
  position: relative;
  width: 180px;
  z-index: 9999999;
  cursor:pointer;
`;

export const ItemName = styled.label`
  height: 18px;
  margin: 0 0 2px 16px;
  font-family: Lato;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pinter;
`;

export const DropDownItemWrapper = styled.div`
  display: flex;
  padding: 9px 118px 11px 8px;
  align-items: center;
  color: red;
  cursor: pointer;
  ${ItemName} {
    color: #212226;
  }
  :hover {
    ${ItemName} {
      color: ${({ activeColor }) => activeColor};
    }
  }

  svg{
    color:green;
  }
`;

