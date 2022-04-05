import React from 'react'
import NavBar from './components/NavBar'
import Home from "./components/Home"
import Products from './components/Products'
import { Routes, Route } from 'react-router-dom'


function App() {


  return (
<>
<NavBar/>
    <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
    </Routes>
    </>
  )
}

export default App