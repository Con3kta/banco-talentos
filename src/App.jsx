import { HashRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Register from './pages/Register'
import Header from './components/Header'

function App() {

  return (
    <>
      <HashRouter>
        <Navigation />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Register />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
