import React,{useState} from 'react';

import Input from 'share/components/atoms/input'

function App() {
  const [firstName, setFirstName] = useState('')
  console.log("firstname",firstName)
  return (
    <>
      <Input 
      type="password"
      value={firstName} 
      onChange={e=>setFirstName(e.target.value)}
      size="md"
      block
      // error
      />
    </>
  );
}

export default App;
