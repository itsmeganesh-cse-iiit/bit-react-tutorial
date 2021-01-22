import styled,{css} from 'styled-components'

const PROPS={
    height:{
        sm:"38px",
        md:"48px",
        lg:"68px"
    },
    width:{
        sm:"15%",
        md:"30%",
        lg:"45%"
    }
}
const hasProperty=(inpVal,data)=>{
    return data ? data :inpVal
}

export const Wrap=styled.div`
    display:flex;
    flex-direction:column;
`
  
export const InputLabel=styled.label`
  font-family: inherit;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #464646;
  font-weight:500;
  margin-bottom:10px;
`


export const ErrText=styled.div(({size,block})=>`
    margin-top:5px;
    font-family: inherit;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: left;
    color: #dc3545;
    width:${hasProperty(size,PROPS.width[size])};
    min-width:216px;

    ${block && css`
        width:99%;
    `}
`)