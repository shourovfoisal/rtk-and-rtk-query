import { useState } from 'react'
import './App.css'
import { Component1 } from './components/Component1'
import { Component2 } from './components/Component2'

function App() {
  
  const [one, setOne] = useState(true);

  return (
    <>
      <div className='card' style={{ backgroundColor: "#ddd" }}>
        <button onClick={() => setOne(prev => !prev)}>Switch Component</button>
      </div>

      <div className='card' style={{ backgroundColor: "#ddd", marginTop: "1rem" }}>
        { one ? <Component1 /> : <Component2 /> }
      </div>
    </>
    
  )
}

export default App
