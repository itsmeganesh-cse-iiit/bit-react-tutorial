import React from 'react'
import RankCard from 'cnaps/components/molecules/rank-card'
import Gold from './gold.png'
import Pink from './pink.png'
import Blue from './blue.png'
import Grey from './grey.png'
const RankCardExamples = () => {
    return (
        <div>
            <RankCard rankBadge={Grey} grade='Remedial' description='There is a need to improve your 
techniques and capabilities. All the Best!'/>
            <br/>
            <RankCard rankBadge={Blue} grade='Satisfactory' description='Good Performance! 
There is still scope for improvement'/><br/>
            <RankCard rankBadge={Pink} grade='Distinction' description='Very Good Job! Keep it Up' />
            <br/> <RankCard rankBadge={Gold} grade='High Distinction' description='Congrats! You are among the best 
performers overall'/>

        </div>
    )
}

export default RankCardExamples
