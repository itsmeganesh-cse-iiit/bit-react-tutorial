import React from 'react'
import {Wrap,RankDetails,RankDesc} from './styles'
const RankCard = ({rankBadge,grade,description}) => {
    return (
        <Wrap>
            <RankDetails>
                <img src={rankBadge} alt='Rank badge'/>
                <h2>{grade}</h2>
                
                </RankDetails> 
            <RankDesc>
    <h4>{description}</h4>
            </RankDesc>
        </Wrap>
    )
}

RankCard.defaultProps={
    grade:"High Distinction"
}
export default RankCard
