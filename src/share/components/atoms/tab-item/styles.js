import styled,{css} from 'styled-components'

const POSITION={
    left:"flex-start",
    right:"flex-end",
    center:"center",
}


export const Wrap=styled.div(({contentAlign,activeColor,borderRadius,color,active,showArrow,arrowPosition,vertical})=>`
    width: 230px;
    height: 48px;
    border-radius: ${borderRadius};
    background-color: ${active ? activeColor :color};
    display:flex;
    justify-content:${POSITION[contentAlign]};
    align-items:center;
    font-family: inherit;
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: normal;
    position:relative;
    padding:0 20px;
    color:#565656;
    z-index:2;
    transition:all 0.3s ease;
    cursor:pointer;

    @media screen and (max-width:767px){
        white-space: nowrap;
       text-overflow: ellipsis;
    }
    

    ${active && css`
        color: #ffffff;
        font-weight: bold;
    `};


    /* arrow */
    &:after{
        color: ${active ? activeColor :color};
        content:"";
        position: absolute;
        ${(active && showArrow) && css`
            border-width: 10px 10px 0;
            border-style: solid;
        `}
        border-color: ${active ? activeColor :color} transparent;
        bottom: -7px;
        left: auto;
        z-index:1;
     
        @media screen and (max-width:767px){
            display:none;
        }
        ${(arrowPosition==="left" || vertical)&& css`
            transform:rotate(-90deg);
            bottom:auto;
            left:auto;
            top: auto;
            right: -12px;
            
        `}

       
    }

`)