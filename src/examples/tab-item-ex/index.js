import React from "react";
import TabItem from "share/components/atoms/tab-item";
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const TabItemsWrapper= styled.div`
*{
    border:1px solid #e8e8f3;
    &:first-child{
        border-top-left-radius:6px;
    }
    &:last-child{
        border-bottom-left-radius:6px;
    }
}

`
const TabItemExamples = () => {
  return (
    <div style={{margin:"10px 100px"}}>
      {/* Tab Items and Tabs */}
      <br />
      <TabItem activeColor="#d71a63" color="#e8e8f3" active vertical /> <br />
      <TabItem activeColor="#d71a63" color="#e8e8f3" active /> <br />
      <TabItem
        activeColor="#d71a63"
        color="#e8e8f3"
        active
        showArrow={false}
        borderRadius="10px"
      />
      <br />
      <TabItemsWrapper>
          <TabItem
              activeColor="#d71a63"
              color="#f9f9ff"
              title="All Subjects"
              active
              vertical
            />
            <TabItem
              activeColor="#d71a63"
              color="#f9f9ff"
              showArrow={false}
              title="Physics"
            />
             <TabItem
              activeColor="#d71a63"
              color="#f9f9ff"
              vertical
              title="Chemistry"
            />
             <TabItem
              activeColor="#d71a63"
              color="#f9f9ff"
              showArrow={false}
              title="Biology"
            />
      </TabItemsWrapper>
      
        <br/>
    <button><Link to="/tabview" >TAB LAYOUTS</Link></button>
       
    </div>
  );
};

export default TabItemExamples;
