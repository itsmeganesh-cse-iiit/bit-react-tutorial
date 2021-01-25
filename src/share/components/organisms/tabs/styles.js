import styled, { css } from "styled-components";

export const TabItemsWrapper = styled.div`
  display: flex;
  

  @media screen and (max-width:767px){
    overflow:auto;
    
  }
  * {
    border: 1px solid #e8e8f3;
    box-sizing: border-box;
    border-bottom:none;
    border-right-style: none;
    &:first-child {
      border-top-left-radius: 6px;
    }
    &:last-child {
      border-bottom-left-radius: 6px;
      border-bottom:1px solid #e8e8f3;
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
        &:first-child {
            border-left-style: solid;
    }
      `}
    
    ${({borderRadius})=>borderRadius && css`
        *{
            border-radius:0px;
        }
    `}

    ${({padLayout})=>padLayout && css`
        margin:10px 30px;
        border:none;
        font-size:18px;
        &:first-child{
            margin-top:30px;
        }
        &:last-child{
            border:none;
        }
    `}

    
  }
  ${({padLayout})=>padLayout && css`
        border:none;
        border-radius: 6px;
        box-shadow: 0 16px 32px 0 rgba(221, 230, 237, 0.4);
        background-color: #ffffff;

    `}

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
  overflow-x:auto;

  ${({padLayout})=>padLayout && css`
        border:none;
        border-radius: 6px;
        box-shadow: 0 16px 32px 0 rgba(221, 230, 237, 0.4);
        background-color: #ffffff;
        margin-left:20px;
    `}
`;
