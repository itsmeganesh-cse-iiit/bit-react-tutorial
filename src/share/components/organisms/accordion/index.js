import React,{useState} from "react";
import Arrow from "./assets/arrow-down";
import {
  AccordionItemWrapper,
  AccordionHeader,
  AccordionBody,
  Title,
  AccordionContainer,
  ExpansionText
} from "./styles";
const Accordion = ({data=[],arrows=true,defaultStyles=true}) => {

  return (
    <AccordionContainer>
        {data.map(each=> <AccordionItem {...each} arrows={arrows} defaultStyles={defaultStyles}/>)}
    </AccordionContainer>
  );
};

const AccordionItem = ({activeColor,color,title,body,arrows,defaultStyles}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <AccordionItemWrapper>
      <AccordionHeader defaultStyles={defaultStyles} isExpanded={isExpanded} onClick={()=>setIsExpanded(!isExpanded)} color={color} activeColor={activeColor}>
        <Title isExpanded={isExpanded}>{title}</Title>
        {arrows && <Arrow fill={isExpanded ? activeColor : color}/>}
      </AccordionHeader>
      <AccordionBody>
      {isExpanded && <div>{body}</div>}
      {!arrows && <ExpansionText onClick={()=>setIsExpanded(!isExpanded)}>{isExpanded ? 'Collapse ' : 'Exapand '} Answer</ExpansionText>}
      </AccordionBody>

      
     
    </AccordionItemWrapper>
  );
};

AccordionItem.defaultProps={
    activeColor:"#d71a63",
    color:"#242424"
}

export default Accordion;
