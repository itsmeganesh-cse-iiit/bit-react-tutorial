import React from 'react'
import Accordion from 'share/components/organisms/accordion'
const AccordionExamples = () => {

    const TitleHead=()=><div style={{fontSize:"20px",fontWeight:"bold"}}>This section contains 10 multiple choice questions. Each question has 4 options (A), (B), (C) and (D) for its answer,
    out of which ONLY ONE option can be correct.</div>
   
    let data=[
        {
            title:"Reference site about Lorem Ipsum, giving information on its origins",
            body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
           title:"Giving information on its origins",
           body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
       },
       {
           title:"About Lorem Ipsum, giving information on its origins",
           body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
       },
       {
           title:"Reference site about information on its origins",
           body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
       },
    ]
    return (
        <div>
             <h3>Ex-1 : Accordion with default styles</h3>
            <Accordion data={data.slice(0,2)}/>
            <br/>
            <h3>Ex-2 :Accordion w/o arrows and with default styles</h3>
            <Accordion data={data.slice(0,1)} arrows={false} defaultStyles={true}/>
            <br/>
            <h3>Ex-3 :Accordion w/o arrows and w/o default styles</h3>
            <Accordion data={data.slice(0,1)} arrows={false} defaultStyles={false}/>
        </div>
    )
}

export default AccordionExamples
