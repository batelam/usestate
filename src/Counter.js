import { useState } from "react";
import './Counter.css';

function Counter() {
    const[count, setCount] = useState(1)
    function incr(){
        setCount(
            function(oldCount){
                return oldCount + 1
            }
        )
        console.log(count)
    }
    function resetCounter(){
      setCount(
        function(oldCount){
          return oldCount = 1
        }
      )
      console.log(count)
    }
    return (
      <div>
        <h1>Counter</h1>
        <h2>Counter is at {count}</h2>
        <button onClick={incr}>Click to add 1 to Counter</button>
        <br></br>
        <button onClick={resetCounter}>Click to reset the Counter</button>

      </div>
    );
  }
  
  export default Counter;