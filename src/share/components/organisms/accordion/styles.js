import styled, { css } from "styled-components";

export const AccordionItemWrapper = styled.div`
  display: block;
  margin: 12px 0px;
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: ${({ isExpanded, color, activeColor,defaultStyles }) =>
    (isExpanded && defaultStyles) ? activeColor : color};

  svg {
    transform: rotate(180deg);
    transform: ${({ isExpanded }) =>
      isExpanded ? "rotate(180deg)" : "rotate(0deg)"};
    font-size: 1rem;
  }
  transition: transform 1s ease-out;
`;

export const AccordionBody = styled.div`
  margin-right: 12px;
  margin-top: 12px;
  font-family: inherit;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  border-bottom: 1px solid #e8e8f3;
  overflow: auto;

  div {
    margin: 12px 0px;
    max-height: auto;
    transition: all 0.2s ease-out;
  }
`;

export const Title = styled.div`
  font-family: Lato;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  ${({ isExpanded,defaultStyles }) =>
    (isExpanded && defaultStyles) &&
    css`
      font-weight: bold;
    `}
`;

export const AccordionContainer = styled.div`
  * {
    margin-bottom: 1px solid red;
  }
`;

export const ExpansionText = styled.div`
  display: inline-block;
  font-family:inherit;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: left;
  color: #0c85bb;
  text-decoration:underline;
  cursor: pointer;
`;
