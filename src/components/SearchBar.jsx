import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, setSearchTerm, isMobileView }) => {
  const navigate = useNavigate();
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchTerm.trim()) return;
    navigate("/");
  };

  const handleSearchBarClick = (event, value) => {
    event.preventDefault();
    setIsSearching((prev) => value || !prev);

    setTimeout(() => inputRef.current?.focus(), 100);

  };

  const handleBlur = () => {
    setIsSearching(false);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Pesquisar"
        aria-label="Campo de busca"
        isMobile={isMobileView}
        isSearching={isSearching}
        ref={inputRef}
        onBlur={handleBlur}
      />
      {isMobileView ? <SearchButton
        type="submit"
        onClick={handleSearchBarClick}
        aria-label="Buscar"
        isSearching={isSearching}
        isMobile={isMobileView}
      >
        <FaSearch />
      </SearchButton> : <SearchButton
        type="submit"
        aria-label="Buscar"
        isSearching={isSearching}
        isMobile={isMobileView}
      >
        <FaSearch />
      </SearchButton>}
    </FormContainer>
  );
};

export default SearchBar;

const FormContainer = styled.form`
  display: flex;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 100%;
  align-items: left;
  justify-content: left;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  
`;

const SearchInput = styled.input`
  flex: 1;
  color: #ffffff;
  background-color: #3333333e;
  text-align: center;
  border: none;
  border-radius: 5px;
  padding: 20px 10px;
  width: 100%;
  font-family: "Satoshi-Light";

  &::placeholder {
    color: #ffffff;
  }

  &:focus {
    outline: 2px solid #DEDE1C;
    background-color: #4444446e;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.isMobile && !props.isSearching ? "none" : "block")};
    position: absolute;
    top: 5px;
    left: 0px;
    z-index: 1001;
    background-color: #333;

    &:focus {
      outline: 2px solid #DEDE1C;
      background-color: #444;
    }

    &:not(:focus) {
      background-color: #333;
    }
  }
`;

const SearchButton = styled.button`
  background-color: #3333333e;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 20px 20px;
  position: relative;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #DEDE1C;
    color: #222;
  }
`;

