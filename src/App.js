import React,{useState} from 'react';

import Input from 'share/components/atoms/input'
import InputGroup from 'share/components/molecules/input-group'
import styled from 'styled-components';

function App() {
  const [firstName, setFirstName] = useState('')
  console.log("firstname",firstName)
  return (
    <>
    <h3>Input</h3>
      <Input 
      type="password"
      value={firstName} 
      onChange={e=>setFirstName(e.target.value)}
      size="md"
      block
      // error
      />

      <h3>Input group</h3>
      <InputGroup type="password" error size="560px"  onChange={e=>setFirstName(e.target.value)} errorText="Please fill all fields" />
    </>
  );
}

export default App;
