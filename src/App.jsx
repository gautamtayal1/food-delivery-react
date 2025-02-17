import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { Body } from './Components/body'
import { Outlet } from 'react-router'
import { Provider } from "react-redux"
import appStore from './utils/appStore'

function App() {
  return(
    <>
      <Provider store={appStore}>
        <Navbar />
        <Outlet />
      </Provider>
    </>
  )
}

export default App
