import React from "react";
import TabItem from "share/components/atoms/tab-item";
import {TabItemsWrapper,TabsWrapper,Content} from './styles'

const Tabs = ({data,layout,color,activeColor,activeTab,onChange}) => {
 
  return (
    <TabsWrapper layout={layout}>
      <TabItemsWrapper layout={layout}>
          {data.map((tabData,index)=>(
            <TabItem
            id={tabData.id}
            contentAlign="center"
            activeColor={activeColor}
            color={color}
            title={tabData.name}
             active={index+1===activeTab}
            vertical={layout==='vertical'}
            onClick={(id)=>onChange(id)}
            />

          ))}
         
      </TabItemsWrapper>
       <Content>
           {data.filter(each=>each.id===activeTab)[0].data}
       </Content>
      </TabsWrapper>     
  );
};

Tabs.defaultProps={
    onChange:()=>{} 
}
export default Tabs;
