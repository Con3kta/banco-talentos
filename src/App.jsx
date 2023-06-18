import { HashRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Register from './pages/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Filter from './pages/Filter'
import './App.css'
import CustomOffCanvas from './components/CustomOffCanvas'
import { useContext, useState } from 'react'
import { LoginContext } from './contexts/LoginContext'

function App() {
  const { showOffCanvas } = useContext(LoginContext);
  
  return (
    <div className='App'>
      <HashRouter>
        {showOffCanvas && <CustomOffCanvas />}
        <Navigation />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/buscar" element={<Filter />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
