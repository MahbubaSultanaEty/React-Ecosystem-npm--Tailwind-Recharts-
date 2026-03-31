
import React, { Suspense } from 'react'
import './App.css'
import DaisyUiNav from './components/DaisyUiNav/DaisyUiNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import Main from './components/Main/Main'


function App() {


  return (
    <>    
      
      <header>
        <Navbar></Navbar>
        {/* <DaisyUiNav></DaisyUiNav> */}
     </header>

    
      <Main> </Main>
  

      <footer>

      </footer>
        
   
    </>
  )
}

export default App
