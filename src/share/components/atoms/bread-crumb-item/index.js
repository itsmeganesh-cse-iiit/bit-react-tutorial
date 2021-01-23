import React from 'react'
import {Wrap,ArrowIcon,Text} from './styles'
const BreadCrumbItem = ({label,color,activeColor,active,position,totalCount,...rest}) => {
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
    return (
        <Wrap {...props} {...rest} >
            <Text {...props} >{label} </Text>
            <ArrowIcon {...props}>&#62;</ArrowIcon>
        </Wrap>
    )
}

BreadCrumbItem.defaultProps={
    color:'#d71a63',
    activeColor:'#242424',
    active:false,
    label:"item"

}

export default BreadCrumbItem
