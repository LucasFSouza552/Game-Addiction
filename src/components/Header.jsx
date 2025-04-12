import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function Header({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo src="/IMG/logo_site.png" alt="Logo do Site" />
        <GroupingInfos>
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
        </GroupingInfos>
        </HeaderContainer>
      </HeaderWrapper>
  );
}


const HeaderWrapper = styled.header`
  background-color: #7A29E4;
`;

const GroupingInfos = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: space-between;
`;

const HeaderContainer = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
