import React,{useState} from 'react';

import Input from 'share/components/atoms/input'
import InputGroup from 'share/components/molecules/input-group'
import styled from 'styled-components';
import TabItem from 'cnaps/components/atoms/tab-item'

function App() {
  const [firstName, setFirstName] = useState('')
  console.log("firstname",firstName)
  return (
    <>
    {/* Inputs */}


    {/* <h3>Input - Text</h3>
      <Input 
      type="password"
      value={firstName} 
      onChange={e=>setFirstName(e.target.value)}
      size="md"
      // block
      // error
      />

      <h3>Input - TextArea</h3>
      <Input 
      type="textarea"
      value={firstName} 
      onChange={e=>setFirstName(e.target.value)}
      // size="lg"
      block
      rows={10}
      // error
      resize
      />
      <h3>Input group Password</h3>
      <InputGroup type="password" error size="560px" block  onChange={e=>setFirstName(e.target.value)} errorText="Please fill all fields" />
      
      <h3>Input group TextArea</h3>

      <InputGroup type="textarea" inputLabel="Unique ID" rows={6} disabled size="560px" block  onChange={e=>setFirstName(e.target.value)} errorText="Please fill all fields" /> */}
    
    
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

    

    </>
  );
}

export default App;
