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

function App() {

  const [Accounts, setAccounts] = useState(() => {
    return [
      {
        username: "Teste1",
        senha: "123456",
        email: "teste1@gmail.com",
        gender: "Masculino",
        bornDate: "01/01/2000",
        favoriteGames: []
      },
      {
        username: "Teste2",
        senha: "abcdef",
        email: "teste2@gmail.com",
        gender: "Feminino",
        bornDate: "02/02/2001",
        favoriteGames: []
      },
      {
        username: "Teste3",
        senha: "password",
        email: "teste3@gmail.com",
        gender: "Outro",
        bornDate: "03/03/2002",
        favoriteGames: []
      }
    ];
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [gamesList, setGamesList] = useState([]);
  const [account, setAccount] = useState(() => {
    const localAccount = localStorage.getItem('account');
    return localAccount ? JSON.parse(localAccount) : null;
  });

  useEffect(() => {
    if (!account) return;

    const existingAccount = Accounts.find(acc => acc.username === account?.username && acc.senha === account?.senha);
    if (existingAccount) {
      localStorage.setItem('account', JSON.stringify(account));
    } else {
      localStorage.removeItem('account');
    }

  }, [account]);

  return (
    <Background>
      <BrowserRouter>
        <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} account={account} />
        <Routes>
          <Route
            path="/"
            element={<Home account={account} setAccount={setAccount} gamesList={gamesList} setGamesList={setGamesList} search={searchTerm} />}
          />
          <Route
            path="/login"
            element={<Login setAccount={setAccount} Accounts={Accounts} />}
          />
          <Route
            path="/register"
            element={<Register setAccounts={setAccounts} setAccount={setAccount} Accounts={Accounts} />}
          />
          <Route
            path="/dashboard"
            element={account ? <Profile /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/favorites"
            element={account ? <Favorites account={account} setAccount={setAccount} gameList={gamesList} search={searchTerm} /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/profile"
            element={account ? <Profile account={account} setAccount={setAccount} /> : <Navigate to="/login" replace />}
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
