import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function Header({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <Logo src="/IMG/logo_site.png" alt="Logo do Site" />
          <Nav>
            <a href="/HTML/HOME/index.html" className="active">Início</a>
            <a href="/HTML/LOJA/loja.html">Loja</a>
          </Nav>
          <AuthLinks>
            <a href="#" className="entrar">Entrar</a>
            <a href="#" className="criar_conta">Criar Conta</a>
          </AuthLinks>
          <MdOutlineFavoriteBorder onClick={() => { navigate('/favorites') }} />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        </HeaderContainer>
      </HeaderWrapper>
    </>
  );
}


const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #1a1a1a;
  padding: 20px 40px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  font-family: 'Roboto', sans-serif;
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  width: 180px;
  height: auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: #f5f5f5;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.3s ease-in-out;

    &.active,
    &:hover {
      color: #bef71b;
    }
  }
`;

const AuthLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    font-size: 1rem;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    color: #f5f5f5;
    font-weight: 500;
  }

  .entrar {
    background-color: transparent;
    border: 2px solid #bef71b;

    &:hover {
      background-color: #bef71b;
      color: #1a1a1a;
    }
  }

  .criar_conta {
    background-color: #7a29e4;
    border: 2px solid transparent;

    &:hover {
      background-color: #bef71b;
      color: #1a1a1a;
    }
  }
`;

const GlobalStyles = styled.div`
    :root {
        --color-white: #f5f5f5;
        --color-white20: rgba(245, 245, 245, 0.2);
        --color-white10: rgba(245, 245, 245, 0.1);
        --color-secondary-green: #bef71b;
        --color-primary-purple: #7a29e4;
        --color-secondary-yellow: #dedc1c;
        --color-dark: #1a1a1a;
        --color-light-gray: #e0e0e0;
        --transition: 0.3s ease-in-out;
        --font-family: "Roboto", sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: var(--font-family);
        line-height: 1.6;
        color: var(--color-dark);
        overflow-x: hidden;
    }

    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 80px;
        background-color: var(--color-primary-purple);
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        transition: background-color var(--transition), box-shadow var(--transition);
        animation: fadeIn 0.5s ease-in-out;
    }

    header.scrolled {
        background-color: var(--color-dark);
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3);
    }

    .cabecalho {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1200px;
        height: 100%;
        margin: 0 auto;
        padding: 0 20px;
        font-size: 1.3rem;
    }

    .logo_cabecalho img {
        width: 80px;
        height: auto;
        transition: transform var(--transition);
    }

    .logo_cabecalho img:hover {
        transform: rotate(10deg) scale(1.1);
    }

    .navegacao_cabecalho {
        display: flex;
        align-items: center;
        gap: 40px;
    }

    .navegacao_cabecalho a {
        text-decoration: none;
        color: var(--color-white);
        font-size: 1.3rem;
        font-weight: 300;
        padding: 17px 60px;
        border-radius: 4px;
        transition: color var(--transition), background-color var(--transition), transform var(--transition);
        animation: fadeIn 0.6s ease-in-out;
    }

    .navegacao_cabecalho a:hover {
        background-color: var(--color-secondary-green);
        color: var(--color-dark);
        transform: scale(1.1);
        font-weight: 900;
    }

    .conectar_conta {
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        gap: 25px;
    }

    .conectar_conta a {
        text-decoration: none;
        font-size: 1.2rem;
    }

    .criar_conta {
        color: var(--color-primary-purple);
        padding: 12px 35px;
        border: 2px solid var(--color-white);
        background-color: var(--color-white);
        border-radius: 12px;
        font-weight: 300;
        transition: all var(--transition);
    }

    .criar_conta:hover {
        background-color: var(--color-secondary-green);
        color: var(--color-dark);
        transform: scale(1.1);
        font-weight: 900;
    }

    .entrar {
        color: var(--color-white);
        font-size: 1.2rem;
        padding: 12px 35px;
        border: 2px solid var(--color-white);
        border-radius: 12px;
        font-weight: 300;
        transition: all var(--transition);
    }

    .entrar:hover {
        background-color: var(--color-secondary-green);
        color: var(--color-dark);
        transform: scale(1.1);
        font-weight: 900;
    }

    .conteudo {
        padding-top: 100px;
        background-color: var(--color-white10);
    }

    @media (max-width: 768px) {
        .cabecalho {
            flex-direction: column;
            gap: 15px;
            padding: 10px;
        }

        .navegacao_cabecalho {
            flex-direction: column;
            gap: 20px;
            align-items: center;
        }

        .navegacao_cabecalho a {
            font-size: 1rem;
            padding: 10px 15px;
        }

        .criar_conta,
        .entrar {
            padding: 10px 25px;
            font-size: 0.9rem;
            width: 100%;
            text-align: center;
        }
    }

    @media (max-width: 480px) {
        header {
            height: auto;
            padding: 10px;
        }

        .cabecalho {
            gap: 10px;
        }

        .logo_cabecalho img {
            width: 60px;
        }

        .navegacao_cabecalho a {
            font-size: 0.9rem;
            padding: 8px 12px;
        }

        .criar_conta,
        .entrar {
            font-size: 0.8rem;
            padding: 8px 20px;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
