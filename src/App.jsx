import { useState } from 'react'

import './App.css'
import DaisyUiNav from './components/DaisyUiNav/DaisyUiNav'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
      
      <header>
        <Navbar></Navbar>
        <DaisyUiNav></DaisyUiNav>
      </header>

      <main>

      </main>

      <footer>

      </footer>
        
   
    </>
  )
}

export default App
