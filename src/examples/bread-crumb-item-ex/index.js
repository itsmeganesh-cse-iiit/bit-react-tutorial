import React from 'react'
import BreakCrumbItem from 'share/components/atoms/bread-crumb-item'
const BreadCrumbItemExamples = () => {
    return (
        <div>
            <BreakCrumbItem label="Home"/>
            <BreakCrumbItem label="Exams"/>
            <BreakCrumbItem label="Details"/>
            <BreakCrumbItem isLast active label="ISSO Exam"/>
        </div>
    )
}

export default BreadCrumbItemExamples
