import React,{useState,useRef} from "react";
import Arrow from "./assets/arrow-down";
import {
  AccordionItemWrapper,
  AccordionHeader,
  AccordionBody,
  Title,
  AccordionContainer,
  ExpansionText,
  BorderBottom
} from "./styles";
const Accordion = ({data=[],arrows=true,defaultStyles=true,exapandText=""}) => {
    

  return (
    <AccordionContainer>
        {data.map(each=> <AccordionItem {...each} arrows={arrows} defaultStyles={defaultStyles} exapandText={exapandText}/>)}
    </AccordionContainer>
  );
};

const AccordionItem = ({activeColor,color,title,body,arrows,defaultStyles,exapandText}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [setHeight, setHeightState] = useState("0px");
  const content = useRef(null);
 

  const handleToggleAccordion=()=>{
    setIsExpanded(prevExpanded =>!prevExpanded)
    setHeightState(
        isExpanded ? "0px" : `${content.current.scrollHeight}px`
      );
  }
  return (
    <AccordionItemWrapper>
      <AccordionHeader defaultStyles={defaultStyles} isExpanded={isExpanded} onClick={handleToggleAccordion} color={color} activeColor={activeColor}>
        <Title>{title}</Title>
        {arrows && <Arrow fill={isExpanded ? activeColor : color}/>}
      </AccordionHeader>
      <AccordionBody  maxHeight={setHeight}>
     <div ref={content} style={{ maxHeight: `${setHeight}` }}>{body}</div>
     {!arrows && <ExpansionText onClick={handleToggleAccordion}>{isExpanded ? 'Collapse ' : 'Expand '}{exapandText}</ExpansionText>}
      <BorderBottom/>
      </AccordionBody>

    </AccordionItemWrapper>
  );
};

AccordionItem.defaultProps={
    activeColor:"#d71a63",
    color:"#242424"
}

export default Accordion;
