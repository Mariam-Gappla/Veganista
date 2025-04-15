import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from '../src/components/header/header.jsx'
import Home from './pages/Home.jsx'
import Errorroute from './components/error/error.jsx'
import Carddetails from './components/carddetails/carddetails.jsx'
import Shoppingcard from './components/shoppingcard/shoppingcard.jsx'
import RegisterPage from './pages/Register.jsx'
import Register from './components/Register/register.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="" element={<Register />} />
      <Route path='/Home' element={<Home/>} />
      <Route path="/productsdetails/:id" element={<Carddetails/>}/>
      <Route path="/shoppingcard" element={<Shoppingcard/>}/>
      <Route path='/Register' element={<RegisterPage/>}/>
      <Route path="*" element={<Errorroute />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
