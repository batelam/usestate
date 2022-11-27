import { useState } from "react";
import './Counter.css';

function Counter() {
    const[count, setCount] = useState(1)
    const[delta, setDelta] = useState(1)
    function incr(){
        setCount(
            function(oldCount){
                return oldCount + delta
            }
        )
        
    }
    function resetCounter(){
      setCount(
        function(oldCount){
          return oldCount = 1
        }
      )
      
    }
    function handleDelta(e){
      console.log(e);
      setDelta(Number(e.target.value))
    }
    return (
      <div>
        <h1>Counter</h1>
        <input type="number" value={delta} onChange={handleDelta}/>
        <h2>Counter is at {count}</h2>
        <button onClick={incr}>Click to add {delta} to Counter</button>
        <br></br>
        <button onClick={resetCounter}>Click to reset the Counter</button>

      </div>
    );
  }
  
  export default Counter;