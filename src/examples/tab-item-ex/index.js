import React from 'react'
import TabItem from 'share/components/atoms/tab-item'

const TabItemExamples = () => {
    return (
        <div>
    {/* Tab Items and Tabs */}
    <br/>
    <TabItem color="#d71a63" active vertical/> <br/>

    <TabItem  color="#d71a63" active /> <br/>
    
    <TabItem  color="#d71a63" active showArrow={false} borderRadius="10px" /><br/>

   <table>
     <tr>
      <TabItem  color="#e8e8f3"  showArrow={false}  title="Profile"/>
      </tr>
      <tr>
      <TabItem  color="#e8e8f3"  showArrow={false}  title="FAQs" />
      </tr>
      <tr>
      <TabItem  activeColor="#d71a63" color="#e8e8f3"  active vertical  title="Help" />
      </tr>
      <tr>
      <TabItem  color="#e8e8f3"  showArrow={false}  title="FAQs" />
      </tr>
   </table>
        </div>
    )
}

export default TabItemExamples
