import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './allcomponents/Nav'
import LoginPage from './allcomponents/LoginPage'
import CardPage from './allcomponents/Product'
import FooterPage from './allcomponents/FooterPage'

function App() {

  return (
    <div className='main'>
    <NavBar/>
    <CardPage/>
    <FooterPage/>
    </div>
  )
}

export default App
