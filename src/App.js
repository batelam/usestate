
import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const[delta, setDelta] = useState(1)
  const[maxCounter, setMaxCounter] = useState(1)
  const[reset, setReset] = useState(false)
  function handleDelta(e){
    console.log(e);
    setDelta(Number(e.target.value))
  }
  function handleMaxCounter(maxfield){
    setMaxCounter(Number(maxfield.target.value))
  }

  function getReset(data){
    console.log(data)
    setReset(data)
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
      <Counter delta = {delta} maxCounter = {maxCounter} getReset = {getReset} needToReset = {reset}/>
      <Counter delta = {delta} maxCounter = {maxCounter} getReset = {getReset} needToReset = {reset}/>
    </div>
  );
}

export default App;
