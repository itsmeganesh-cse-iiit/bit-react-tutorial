import React,{useState} from "react";
import Tabs from "share/components/organisms/tabs";
import styled from 'styled-components'



const TabsExamples = () => {
  const [activeTab, setActiveTab] = useState(1)
  const Data=({data})=>(<>
  
  <h2>{data}</h2>
  <div style={{marginBottom:"300px"}}>margin</div>
  end of data
  </>)
  let tabdata=[
      {
          name:"All Subjects",
          data:<Data data="Data 1"/>,
          id:1,
      },
      {
        name:"Physics",
        data:<Data data="Data 2"/>,
        id:2,
       },
       {
        name:"Chemistry",
        data:<Data data="Data 3"/>,
        id:3,
       },
       {
        name:"Biology",
        data:<Data data="Data 4"/>,
        id:4,
       },
  ]

  const onTabChange=(tabId)=>{
    setActiveTab(tabId)
  }
  return (
    <div>
    <br/>
    {/* <h2>Vertical Tabs</h2>
      <Tabs data={tabdata} activeTab={activeTab} onChange={onTabChange}  activeColor="#d71a63" color="#f9f9ff" layout="vertical"/>
       */}
    <h2>Horizontal Tabs</h2>
      
      <Tabs data={tabdata} activeTab={activeTab} onChange={onTabChange}  activeColor="#d71a63" color="#f9f9ff"/>
         
    </div>
  );
};

export default TabsExamples;
