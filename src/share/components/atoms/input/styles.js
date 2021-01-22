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


export const StyledInput=styled.input(({type,size,disabled,error,typeLabel})=>`
    height:${hasProperty('48px',PROPS.height[size])};
    z-index:1;
    box-sizing:border-box
    border-radius: 6px;
    border: 1px solid #ced4da;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #767676;
    font-family: inherit;
    padding:0;
    background-color: #ffffff;
    outline:none;
    padding: 12px;  
    
    /* Enable space for hide/show password icon */
    ${typeLabel==='password' && css`
        padding-right:44px;
    `};
    width:100%;

    /* Input error */
    ${error && css`
        border-color:red;
        border: 1px solid #dc3545;
        
    `};

    /* Input disabled */
    ${disabled && css`
        background-color: #f9f9ff;
        cursor:not-allowed;
    `};

    ${typeLabel==="textarea" && css`
        height:auto !important;
    `}
`)



export const StyledTextArea=styled.textarea(({type,size,disabled,error,typeLabel})=>`
    height:${hasProperty('48px',PROPS.height[size])};
    z-index:1;
    box-sizing:border-box
    border-radius: 6px;
    border: 1px solid #ced4da;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #767676;
    font-family: inherit;
    padding:0;
    background-color: #ffffff;
    outline:none;
    padding: 12px;  
    
    /* Enable space for hide/show password icon */
    ${typeLabel==='password' && css`
        padding-right:44px;
    `};
    width:100%;

    /* Input error */
    ${error && css`
        border-color:red;
        border: 1px solid #dc3545;
        
    `};

    /* Input disabled */
    ${disabled && css`
        background-color: #f9f9ff;
        cursor:not-allowed;
    `};

    ${typeLabel==="textarea" && css`
        height:auto !important;
    `}
`)


export const Styles=styled.div(({size,block})=>`
    * {
        box-sizing: border-box;
      }
    position:relative;
    width:${hasProperty(size,PROPS.width[size])};
    min-width:216px;
    /* Input block width */
    ${block && css`
        width:99%;
    `}

`)

export const EyeIcon=styled.img``

export const IconWrapper=styled.div`
position:absolute;
right:15px;
top:0;
height:100%;
display:flex;
justify-content:center;
align-items:center;
transition: all 0.3s ease;
z-index:2;

`