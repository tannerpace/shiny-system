import './App.css'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Resume from './Components/Resume'
import { useState } from 'react'







function App() {
  const [isResume, setResume] = useState(false)
  return (
    <div className="App">
      {!isResume ? (<Nav />) : (<></>)
      }

      <Home isResume={isResume} toggleResume={() => setResume(!isResume)} />
    </div >
  );
}

export default App;
