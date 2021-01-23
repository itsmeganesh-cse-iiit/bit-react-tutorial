import React,{useState} from "react";
import Tabs from "share/components/organisms/tabs";
import styled from 'styled-components'



const TabsExamples = () => {
  const [activeTab, setActiveTab] = useState(1)
  const Data=({data})=>(<div style={{margin:"20px 50px"}}>
  <h2>{data}</h2>
  <div style={{marginBottom:"200px"}}>Data</div>
  End of data
  </div>)
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

  let tabdata2=[
    {
        name:"Profile",
        data:<Data data="Data 1"/>,
        id:1,
    },
    {
      name:"FAQ's",
      data:<Data data="Data 2"/>,
      id:2,
     },
     {
        name:"Help",
        data:<Data data="Data 2"/>,
        id:3,
       },
       {
        name:"Password",
        data:<Data data="Data 2"/>,
        id:4,
       },
]

  const onTabChange=(tabId)=>{
    setActiveTab(tabId)
  }
  return (
    <div style={{margin:"20px 100px"}}>
    <h2>Vertical Tabs</h2>
      <Tabs data={tabdata} activeTab={activeTab} onChange={onTabChange}  activeColor="#d71a63" color="#f9f9ff" layout="vertical"/>
      

    <h2>Horizontal Tabs</h2>
      <Tabs data={tabdata} activeTab={activeTab} onChange={onTabChange}  activeColor="#d71a63" color="#f9f9ff"/>
    
      <h2>Vertical Layout-2</h2>
      <Tabs data={tabdata2} activeTab={activeTab} onChange={onTabChange}  activeColor="#d71a63" color="#ffff" layout="vertical" borderRadius="6px" showArrow={false} padLayout/>
    
    </div>
  );
};

export default TabsExamples;
