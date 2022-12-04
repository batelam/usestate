import { useState, useEffect } from "react";
import './Counter.css';

function Counter(props) {
    const {delta, getReset, needToReset} = props
    const {maxCounter} = props
    const[count, setCount] = useState(1)
    
  useEffect(()=>{
    if(needToReset){
      setCount(0)
      getReset(false)
    }
  },[needToReset, getReset])

    function incr(){
        setCount(
            function(oldCount){
              if ((oldCount + delta) > maxCounter){
                return resetCounter()
              }
              return oldCount + delta
            }
        )
        
    }
    function resetCounter(){
      getReset(true)
      //setCount(
        //function(oldCount){
          //return oldCount = 1
        //}
      //)
      
    }
    return (
      <div>
        <h1>Counter</h1>
        <h2>Counter is at {count}</h2>
        <button onClick={incr}>Click to add {delta} to Counter</button>
        <br></br>
        <button onClick={resetCounter}>Click to reset the Counter</button>

      </div>
    );
  }
  
  export default Counter;