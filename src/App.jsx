import { HashRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Register from './pages/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Filter from './pages/Filter'
import './App.css'

function App() {

  return (
    <div className='App'>
      <HashRouter>
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
