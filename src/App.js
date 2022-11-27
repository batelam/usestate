
import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const[delta, setDelta] = useState(1)
  function handleDelta(e){
    console.log(e);
    setDelta(Number(e.target.value))
  }

  return (
    <div className="App">
      <b>Usestate</b>
      <br/>
      <input type="number" value={delta} onChange={handleDelta}/>
      <Counter delta = {delta}/>
      <Counter delta = {delta}/>
    </div>
  );
}

export default App;
