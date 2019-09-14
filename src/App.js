import React, { useState } from 'react';
import './App.css';

function App() {

  const [gender, setGender] = useState('female')
  const [a, setA] = useState('code')
  const [check, setCheck] = useState(true)

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <select name='gender'  value={gender} onChange={e => setGender(e.target.value)} >
            <option value='male' >Male</option>
            <option value='female' >Female</option>
      </select>

      <br /> <br /> <br />

        <input type="radio" name="a" value="game" checked={a=== 'game'} onChange={e => setA(e.target.value)} /> Game<br />
        <input type="radio" name="a" value="code" checked={a=== 'code'} onChange={e => setA(e.target.value)} /> Code<br />
        <input type="radio" name="a" value="other" checked={a=== 'other'} onChange={e => setA(e.target.value)} /> Other

        <br /> <br /> <br />

        <input 
            type="checkbox" 
            name="check"
            checked={check} 
            onChange={e => setCheck(e.target.checked)}
         /> I have a bike<br />
    </div>

  );
}

export default App;