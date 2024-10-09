import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5) //responsible to  propogate state to UI or basically DOM
  // on 0th index we get counter,and the second vakue is a function we call it setcounter
  // basically setCounters is a method that controls the counetr variable. so everywhere where counter is used it will get updated using setcounetr
  // let counter = 5

  const addValue= () => {
    if(counter != 20){
      setCounter(counter + 1)
    }
  }
  
  const removeValue = () => {
    if(counter != 0){
      setCounter(counter - 1)
    }
    
  }
  return (
    <>
      <h1>Yashasvi's react series</h1>
      <h2>Counter value: {counter} </h2>

      <button onClick={addValue}> 
        Add Value {counter}
        </button>
      <br />
      <button onClick={removeValue}>Remove value {counter} </button>
    </>
  )
}

export default App
