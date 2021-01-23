import styled,{css} from 'styled-components'


export const StyledTable=styled.table(({block,list})=>`
    border-collapse: collapse;
    font-family:inherit;
    margin:3px;
    width:${block ? "100%" : 'auto'};
    * {
      box-sizing: border-box;
    }
   
    td{
        padding: 24px 57px 22px 20px;
        border: solid 1px #edeff9;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width:313px;
        vertical-align: middle;
        ${list && css`
            padding: 9px 57px 9px 20px;
            border-top:none;
            border-left:none;
            border-right:none;
        `}
       
    };
`)



export const TableHead=styled.th(({align})=>`
    text-align: ${align ? align : 'center'}; 
    vertical-align: middle;
    padding: 24px 57px 22px 20px;
    background-color: #f9f9ff;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #242424;
    font-family:inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width:313px;
    border: solid 1px #edeff9;
    border-top-style:none;
  
    &:first-child {
        border-left-style:none;
    }
    &:last-child {
        border-right-style:none;
    }
`)
