import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [account, setAccount] = useState({
    username: "Teste",
    email: "teste@gmail.com",
    favoriteGames: []
  });

  return (<>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home account={account} />} />
        <Route path="/login" element={<Login setAccount={setAccount} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            account ? <Profile /> : <Navigate to="/login" replace />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
  )
}

export default App

