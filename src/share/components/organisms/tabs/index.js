import React,{useRef,useEffect,useState} from "react";
import TabItem from "share/components/atoms/tab-item";
import {TabItemsWrapper,TabsWrapper,Content} from './styles'

const Tabs = ({data,layout,color,activeColor,activeTab,onChange,borderRadius,showArrow,padLayout,isMarginable}) => {
  const [getHeight, setGetHeight] = useState('100%')
  const content=useRef(null)
  useEffect(() => {
    setGetHeight(`${content.current.scrollHeight+10}px`)
  }, [content.current])
  return (
    <TabsWrapper layout={layout} borderRadius={borderRadius}  >
      <TabItemsWrapper layout={layout} padLayout={padLayout} isMarginable={isMarginable} ref={content} maxHeight={getHeight}>
          {data.map((tabData,index)=>(
            <TabItem
            id={tabData.id}
            contentAlign={layout!=='vertical' && 'center'}
            activeColor={activeColor}
            color={color}
            title={tabData.name}
            active={index+1===activeTab}
            vertical={layout==='vertical'}
            onClick={(id)=>onChange(id)}
            borderRadius={borderRadius}
            showArrow={showArrow}
            />

          ))}
         
      </TabItemsWrapper>
       <Content padLayout={padLayout}>
           {data.filter(each=>each.id===activeTab)[0].data}
       </Content>
      </TabsWrapper>     
  );
};

Tabs.defaultProps={
    onChange:()=>{},
    borderRadius:"0px" 
}
export default Tabs;
