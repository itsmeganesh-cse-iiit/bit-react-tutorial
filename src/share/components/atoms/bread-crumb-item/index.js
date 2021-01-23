import React from 'react'
import {Wrap,ArrowIcon,Text} from './styles'
const BreadCrumbItem = ({label,color,activeColor,active,position,totalCount,onClick,to,...rest}) => {
    let props={
        activeColor:activeColor,
        active:active,
        color:color,
        position:position,
        totalCount:totalCount
    }

    if((position===totalCount-1) || (position===0 && totalCount===1)){
        props["active"]=true
    }
    const handleClick=()=>{
        onClick(to)
    }
    return (
        <Wrap {...props} {...rest} onClick={handleClick}>
            <Text {...props} >{label} </Text>
            <ArrowIcon {...props}>&#62;</ArrowIcon>
        </Wrap>
    )
}

BreadCrumbItem.defaultProps={
    color:'#d71a63',
    activeColor:'#242424',
    active:false,
    label:"item",
    onClick:()=>{}

}

export default BreadCrumbItem
