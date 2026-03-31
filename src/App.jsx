
import React, { Suspense } from 'react'
import './App.css'
import DaisyUiNav from './components/DaisyUiNav/DaisyUiNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import Main from './components/Main/Main'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import MarksCharts from './components/MarksChart/MarksCharts'

const marksPromise= axios.get('/public/marksData.json') 
function App() {


  return (
    <>    
      
      <header>
        <Navbar></Navbar>
        {/* <DaisyUiNav></DaisyUiNav> */}
     </header>

    
      <Main> </Main>
      <ResultChart></ResultChart>
    
      <Suspense>
        <MarksCharts marksPromise={marksPromise}></MarksCharts>
      </Suspense>

      <footer>

      </footer>
        
   
    </>
  )
}

export default App
