import styled,{css} from 'styled-components'


export const StyledTable=styled.table`
    border-collapse: collapse;
    font-family:inherit;
    margin:3px;
    width:${({block})=>block ? "100%" : 'auto'};
    * {
      box-sizing: border-box;
    }
   
    td{
        padding: 24px 38px 22px 38px;
        border: solid 1px #edeff9;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width:335px;
        vertical-align: middle;
        ${({list})=>list && css`
            padding: 9px 57px 9px 20px;
            border-top:none;
            border-left:none;
            border-right:none;
        `}
        ${({noPad})=>noPad && css`
            padding:0px;
            padding-right:-10px;
            z-index:100;
        `}
       
    };
`



export const TableHead=styled.th(({align})=>`
    text-align: ${align ? align : 'center'}; 
    vertical-align: middle;
    padding: 24px 38px 22px 38px;
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
    max-width:335px;
    border: solid 1px #edeff9;
    border-top-style:none;
  
    &:first-child {
        border-left-style:none;
    }
    &:last-child {
        border-right-style:none;
    }
`)
