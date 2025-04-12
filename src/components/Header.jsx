import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

export default function Header({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo src="#" alt="Logo do Site" />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <GroupingInfos>
          <Nav>
            <Link to="/">Início</Link>
          </Nav>
          <AuthLinks>
            <Link to="#">Entrar</Link>
            <Link to="#">Criar Conta</Link>
          </AuthLinks>
          <MdOutlineFavoriteBorder onClick={() => { navigate('/favorites') }} />
        </GroupingInfos>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background-color: #eeeeee45;
`;

const GroupingInfos = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const HeaderContainer = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 8vh;
  padding: 15px;
`;

const Logo = styled.img`

`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

const AuthLinks = styled.div`
  flex-direction: row;
  gap: 10px;
`;