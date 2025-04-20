import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import styled from 'styled-components'

// Estilo Global
import './App.css'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Header from './components/Header'
import Footer from './components/Footer'
import Favorites from './pages/Favorites'
import Game from './pages/Game'

const Accounts = [
  {
    username: "Teste",
    senha: "123456",
    email: "teste@gmail.com",
    gender: "Masculino",
    bornDate: "01/01/2000",
    favoriteGames: []
  }
]

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [gamesList, setGamesList] = useState([]);
  const [account, setAccount] = useState(() => {
    const localAccount = localStorage.getItem('account');
    return localAccount ? JSON.parse(localAccount) : {
      username: "Teste",
      email: "teste@gmail.com",
      gender: "Masculino",
      bornDate: "01/01/2000",
      favoriteGames: []
    };
  });

  useEffect(() => {
    localStorage.setItem('account', JSON.stringify(account));
  }, [account]);

  return (
    <Background>
      <BrowserRouter>
        <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        <Routes>
          <Route
            path="/"
            element={<Home account={account} setAccount={setAccount} gamesList={gamesList} setGamesList={setGamesList} search={searchTerm} />}
          />
          <Route
            path="/login"
            element={<Login setAccount={setAccount} />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/dashboard"
            element={account ? <Profile /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/favorites"
            element={<Favorites account={account} setAccount={setAccount} gameList={gamesList} search={searchTerm} />}
          />
          <Route
            path="/profile"
            element={<Profile account={account} setAccount={setAccount} />}
          />
          <Route
            path="/game"
            element={<Game />}
          />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Background>
  );
}

export default App

const Background = ({ children }) => {
  return (
    <BackgroundStyle>
      {children}
    </BackgroundStyle>
  )
}
const BackgroundStyle = styled.div`
  background-image: url('./images/bg-page.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100dvh;
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;
  position: relative;
`;
