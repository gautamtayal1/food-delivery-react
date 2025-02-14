import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { FilterBar } from './Components/FilterBar'
import { Main } from './Components/main'

function App() {
  
  return(
    <>
      <Navbar />
      <FilterBar />
      <Main />
    </>
  )
}

export default App
