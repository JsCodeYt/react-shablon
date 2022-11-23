import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './page/Home.jsx'

export default function App() {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}
