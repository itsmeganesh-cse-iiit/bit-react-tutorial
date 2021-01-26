import styled, { css } from "styled-components";


const MODAL_SIZE={
    "xl":"80%",
    "lg":"60%",
    "md":'40%',
    "sm":"32%",
    "xs":"15%"
}
export const ModalContainer = styled.div`
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  padding-top: 96px;
  border-radius: 6px;
`;

export const ModalContent = styled.div`
  background-color: white;
  width: ${({size})=>size ? MODAL_SIZE[size] :"32%"};
  min-width: 400px;
  max-width: 640px;
  height: auto;
  min-height:319px;
  max-height:calc(100%-50px);
  margin: auto;
  padding: 10px;
  border-radius: 6px;
  background-color: #ffffff;
  display:flex;
  flex-direction:column;
`;

export const ModalHeader = styled.div``;

export const ModalBody = styled.div`
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  flex-grow:3;
`;

export const ModalFooter = styled.div`
  display:flex;
  justify-content:flex-end;
`;

export const H2 = styled.h2`
  font-family: inherit;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.75;
  letter-spacing: normal;
  text-align: left;
  color: #d71a63;
  text-align: center;
`;

export const Button = styled.button`
  min-width: 101px;
  height: 48px;
  width:auto;
  max-width:200px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  margin:10px 10px;
  border-radius: 6px;
  border: solid 1px #d71a63;
  background-color: #ffffff;
  outline: none;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  cursor: pointer;
  color: #d71a63;
  padding:0 20px;
  &:hover {
    background-color: #d71a63;
    color: white;
    ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: #ffff;
      color: #d71a63;
    `}
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: #d71a63;
      color: white;
    `}

   
`;
