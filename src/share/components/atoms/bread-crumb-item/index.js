import React from 'react'
import {Wrap,ArrowIcon,Text} from './styles'
const BreadCrumbItem = ({label,color,activeColor,active,isLast,...rest}) => {
    let props={
        activeColor:activeColor,
        active:active,
        color:color,
        isLast:isLast
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
    isLast:false,
    label:"item"

}

export default BreadCrumbItem
