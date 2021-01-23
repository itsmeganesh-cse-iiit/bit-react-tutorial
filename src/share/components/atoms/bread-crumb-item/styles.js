import styled, { css } from "styled-components";
 
export const Wrap = styled.div`
  display: inline-block;
  margin: 0 9px 0 0px;
  font-family: inherit;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: ${({color})=>color};
  ${({active,activeColor})=>active && css`
    color : ${activeColor};
  `}
 
`

export const ArrowIcon = styled.div(({isLast})=>`
  display: inline-block;
  margin: 1px 0px 1px 9px;
  ${isLast && css`
   display:none;
  `} 
`)
  


export const Text = styled.div(({active,color,isLast})=>`
  display: inline-block;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${color};
    ${isLast && css`
        border-bottom:none;
    `}
  }

  ${active && css`
    cursor: default;
  `}
`)
 
