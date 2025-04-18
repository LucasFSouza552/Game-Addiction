import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function Header({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <HeaderContainer>

        <LogoAndMenuWrapper>
          <IconsWrapper>
            <Hamburger onClick={() => setMenuOpen(!menuOpen)} $menuOpen={menuOpen}>
              <span />
              <span />
              <span />
            </Hamburger>
          </IconsWrapper>
          <Logo src="#" alt="Logo do Site" onClick={() => navigate("/")} />
        </LogoAndMenuWrapper>

        <SearchWrapper>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </SearchWrapper>

        <IconsWrapper>
          <FavoriteIcon
            onClick={() => {
              setMenuOpen(false);
              navigate("/favorites");
            }}
          />

          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} isMobileView />
        </IconsWrapper>

        <GroupingInfos $menuOpen={menuOpen}>
          <Nav>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Início
            </NavLink>
            <NavLink to="/favorites" onClick={() => setMenuOpen(false)}>
              Favoritos
            </NavLink>
          </Nav>
          <AuthLinks>
            <AuthLink to="/login" onClick={() => setMenuOpen(false)}>
              <FaUser /> Entrar
            </AuthLink>
            <AuthLink to="/register" onClick={() => setMenuOpen(false)}>
              Criar Conta
            </AuthLink>
          </AuthLinks>
        </GroupingInfos>


      </HeaderContainer>
    </HeaderWrapper>
  );
}

const LogoAndMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 10px;
`;

const HeaderWrapper = styled.header`
  background-color: #222;
  padding: 15px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  flex-wrap: nowrap;


  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
  margin: 0 20px;
  max-width: 500px;

  @media (max-width: 768px) {
    display: none;
    width: 100%;
    margin: 10px 0 0;
    max-width: 100%;
  }
`;

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

const IconsWrapper = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Hamburger = styled.div`
  cursor: pointer;
  width: 30px;
  height: 25px;
  position: relative;
  z-index: 1001;
  flex-direction: column;
  justify-content: space-between;

  span {
    background-color: white;
    height: 3px;
    width: 100%;
    transition: all 0.3s ease;
    border-radius: 3px;
    transform-origin: left center;
  }

  span:nth-child(1) {
    transform: ${props => props.$menuOpen ? "rotate(45deg)" : "none"};
  }

  span:nth-child(2) {
    opacity: ${props => props.$menuOpen ? "0" : "1"};
    transform: ${props => props.$menuOpen ? "translateX(-20px)" : "none"};
  }

  span:nth-child(3) {
    transform: ${props => props.$menuOpen ? "rotate(-45deg)" : "none"};
  }
`;

const GroupingInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;

  transition: all 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 20px;
    background-color: #333;
    position: fixed;
    left: 0;
    right: 0;
    display: ${props => props.$menuOpen ? "flex" : "none"};
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transition: top 0.5s ease;
    animation: slideDown 0.8s ease forwards;

  }

  @keyframes slideDown {
    from {
      top: -500px;
    }
    to {
      top: 0;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #444;
    display: flex;
    justify-content: left;

  }
`;

const AuthLinks = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 15px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95em;
  transition: all 0.2s ease;
  padding: 5px 0;
  position: relative;

  &:hover {
    color: #dede1c;
  }

  &:hover:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #dede1c;
  }

  @media (max-width: 768px) {
    
    font-size: 1.1em;
    text-align: right;

    &:hover:before {
      height: 0;
    }
  }
`;

const AuthLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95em;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 15px;
  border-radius: 4px;

  &:first-child {
    background-color: #444;
  }

  &:last-child {
    background-color: #dede1c;
    color: #222;
  }

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 12px;
    font-size: 1.1em;
  }
`;

const FavoriteIcon = styled(MdOutlineFavoriteBorder)`

  font-size: 40px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #dede1c;
    transform: scale(1.1);
  }

`;