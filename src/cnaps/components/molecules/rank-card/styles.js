import styled from 'styled-components'

export const Wrap= styled.div(({rankBackGround})=>`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-image:${rankBackGround};
    border-radius: 6px;
    border: solid 1px #e8e8f3;
    background-color: #ffffff;
    font-family:inherit;
`)
export const RankDetails=styled.div(({})=>`
display:flex;
align-items:center;
h2{
    font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #613a20;
}

`)
export const RankDesc=styled.div(({})=>`
  margin-right:10%;
  h4{
    font-size: 24px;
    font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #242424;
  }
  width: 382px;
  


`)