
import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const[delta, setDelta] = useState(1)
  const[maxCounter, setMaxCounter] = useState(1)
  function handleDelta(e){
    console.log(e);
    setDelta(Number(e.target.value))
  }
  function handleMaxCounter(maxfield){
    setMaxCounter(Number(maxfield.target.value))
  }

  return (
    <div className="App">
      <b>Usestate</b>
      <br/>
      <h3>Delta field:</h3>
      <input type="number" value={delta} onChange={handleDelta}/>
      <br/>
      <h3>Max Counter field:</h3>
      <input type="number" value={maxCounter} onChange={handleMaxCounter}/>
      <Counter delta = {delta} maxCounter = {maxCounter}/>
      <Counter delta = {delta} maxCounter = {maxCounter}/>
    </div>
  );
}

export default App;
