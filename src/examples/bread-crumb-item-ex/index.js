import React from 'react'
import BreakCrumbItem from 'share/components/atoms/bread-crumb-item'
const BreadCrumbItemExamples = () => {
    return (
        <div style={{margin:"10px 100px"}}>
            <BreakCrumbItem label="Home"/> <br/>
            <BreakCrumbItem label="Exams"/><br/>
            <BreakCrumbItem label="Details"/><br/>
            <BreakCrumbItem  active label="ISSO Exam"/><br/>
        </div>
    )
}

export default BreadCrumbItemExamples
