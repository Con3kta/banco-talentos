import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Register from './pages/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Filter from './pages/Filter'
import CustomOffCanvas from './components/CustomOffCanvas'
import { useEffect } from 'react'
import Login from './pages/Login'
import './App.css'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <div className='App'>
      <HashRouter>
        <ScrollToTop />
        <CustomOffCanvas children={<Login />} />
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
