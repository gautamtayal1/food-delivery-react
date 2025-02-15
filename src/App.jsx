import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { Body } from './Components/body'
import { Outlet } from 'react-router'

function App() {
  return(
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
