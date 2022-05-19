import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GamePage from './GamePage'
import HomePage from './Home'
const Pages = () => {
  return (
    <div>
    <Routes>
         <Route path='/game' element={<GamePage/>} />
         <Route path='/' element={<HomePage/>} />
    </Routes>
    </div>
  )
}

export default Pages