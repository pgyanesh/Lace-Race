import React from 'react'
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginRegisterPage/LoginPage/LoginPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
