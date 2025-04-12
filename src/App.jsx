import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'

// Estilo Global
import './App.css'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Header from './components/Header'
import Footer from './components/Footer'
import Games from './pages/Games'
import Favorites from './pages/Favorites'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const [account, setAccount] = useState({
    username: "Teste",
    email: "teste@gmail.com",
    gender: "Masculino",
    bornDate: "01/01/2000",
    favoriteGames: []
  });

  return (<>
    <BrowserRouter>
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Routes>
        <Route path="/" element={<Home account={account} setAccount={setAccount} />} />
        <Route path="/login" element={<Login setAccount={setAccount} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            account ? <Profile /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/games" element={<Games account={account} setAccount={setAccount} search={searchTerm} />} />
        <Route path="/favorites" element={<Favorites account={account} setAccount={setAccount} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  )
}

export default App

