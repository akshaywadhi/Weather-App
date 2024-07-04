import React from 'react'
import EnterCity from './EnterCity'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Weather from './Weather'
import './App.css'



export default function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<EnterCity/>}/>
    <Route path='weather' element={<Weather/>} />
  </Routes>
  </BrowserRouter>
     
  
  )
}
