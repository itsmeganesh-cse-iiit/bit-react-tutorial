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
    background-color: ${color};
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
    ${active && css`
        background-color:${activeColor};
        color: #ffffff;
        font-weight: bold;

    `};


    /* arrow */
    &:after{
        color:${color};
        content:"";
        position: absolute;
        ${(active && showArrow) && css`
            border-width: 10px 10px 0;
            border-style: solid;
        `}
        border-color: ${color} transparent;
        bottom: -7px;
        left: 95px;
        z-index:1;

        ${(arrowPosition==="left" || vertical)&& css`
            transform:rotate(-90deg);
            bottom:auto;
            left:auto;
            top: 17px;
            right: -12px;
        `}
    }

`)