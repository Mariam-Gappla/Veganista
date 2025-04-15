import { lazy, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from '../src/components/header/header.jsx'
import { Suspense } from 'react'
import LanguageContext from './Context/language.js'
const Home = lazy(() => import('./pages/Home.jsx'))
const Errorroute = lazy(() => import('./components/error/error.jsx'))
const Carddetails = lazy(() => import('./components/carddetails/carddetails.jsx'))
const Shoppingcard = lazy(() => import('./components/shoppingcard/shoppingcard.jsx'))
const RegisterPage = lazy(() => import('./pages/Register.jsx'))
const Register = lazy(() => import('./components/Register/register.jsx'))

function App() {
  const [count, setCount] = useState(0)
  const [Lang, setLang] = useState("en");
  return (
    <>
      <BrowserRouter>
        <LanguageContext.Provider value={{Lang,setLang}}>
        <Header />
          <Suspense fallback={<h2>Loading.......</h2>}>
            <div id="content">
            <Routes>
              <Route path="" element={<Register />} />
              <Route path='/Home' element={<Home />} />
              <Route path="/productsdetails/:id" element={<Carddetails />} />
              <Route path="/shoppingcard" element={<Shoppingcard />} />
              <Route path='/Register' element={<RegisterPage />} />
              <Route path="*" element={<Errorroute />} />
            </Routes>
            </div>
          </Suspense>
        </LanguageContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
