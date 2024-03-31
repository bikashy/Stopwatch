import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
let adjustInterval=undefined;

function App() {
  const [watch,setwatch]=useState(0);
  const [started,setStarted]=useState(false);
  const startWatch=()=>{
    
 adjustInterval= setInterval(()=>{
     // setwatch(watch+1)
    
     setwatch((x)=>x+1)
     
    },1000)

    setStarted(true)
  }

  const stopWatch=()=>{

    clearInterval(adjustInterval);
    setStarted(false)
  }

  const resettWatch=()=>{
setwatch(0)
clearInterval(adjustInterval);
setStarted(false)
    
  }

  return (
    <div className="App">
     <h1>{watch}</h1>
     <button className='start' disabled={started} onClick={startWatch}>Start</button>
     <button className='stop' onClick={stopWatch}>Stop</button>
     <button className='reset' onClick={resettWatch}>Reset</button>
   
    </div>
  );
}

export default App;
