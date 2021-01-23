import styled, { css } from "styled-components";

export const TabItemsWrapper = styled.div`
  display: flex;
  * {
    border: 1px solid #e8e8f3;
    box-sizing: border-box;
    border-right-style: none;
    &:first-child {
      border-top-left-radius: 6px;
    }
    &:last-child {
      border-bottom-left-radius: 6px;
    }

    ${({ layout }) =>
      layout !== "vertical" &&
      css`
        border-left-style: none;
        &:last-child {
          border-right-style: solid;
          border-top-right-radius: 6px;
          border-bottom-left-radius: 0px;
        }
      `}
  }

  ${({ layout }) =>
    layout === "vertical" &&
    css`
      flex-direction: column;
    `}
`;

export const TabsWrapper = styled.div`
  display: flex;
  ${({ layout }) =>
    layout !== "vertical" &&
    css`
      flex-direction: column;
    `}
`;

export const Content = styled.div`
  width: 100%;
  border: 1px solid #e8e8f3;
`;
