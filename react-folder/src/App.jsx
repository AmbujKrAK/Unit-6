import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function handleChange(props) {
    if (props > 0 && count >= 10) {
      return;
      
    }else if(props < 0  && count <= 0){
      return;
    }

    setCount(count + props)
 
  }

  return (
    <div className="App">
      <h1>
        <div>Count : {count}</div>
        <button
          onClick={() => {
            handleChange(+1)
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            handleChange(-1)
          }}
        >
          -1
        </button>
      </h1>
    </div>
  )
}

export default App
