import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

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
            <Link to="#"><FaUser /> Entrar</Link>
            <p>|</p>
            <Link to="#">Criar Conta</Link>
          </AuthLinks>
          <FavoriteIcon
            
            onClick={() => {
              navigate("/favorites");
            }}
          />
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
  color: white;

  a {
    color: white;
    text-decoration: None;
    font-family: "Satoshi-Regular";
    transform: scale(1);
  }

  a:hover {
    font-family: "Satoshi-Bold";
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
    color: #DEDE1C;
  }
  a:visited {
    color: None;
  }
`;

const HeaderContainer = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 8vh;
  padding: 15px;

  i {
    font-size: 50px;
  }

  i:hover {
    color: #DEDE1C;
  }
`;

const Logo = styled.img``;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

const AuthLinks = styled.div`
  flex-direction: row;
  gap: 10px;
`;

const FavoriteIcon = styled(MdOutlineFavoriteBorder)`
  font-size: 25px;
  color: white;
  cursor: pointer;
  transform: scale(1);
  &:hover {
    color: #DEDE1C;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
`;
