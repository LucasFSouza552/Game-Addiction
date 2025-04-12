import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const navigate = useNavigate();

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm === '') return;
        navigate(`/games`);
    };


    return (
        <FormStyle onSubmit={handleSubmit}>
            <SearchInput type="text" value={searchTerm} onChange={handleSearch} placeholder="Pesquisar" />
            <button type="submit">Buscar</button>
        </FormStyle>
    )
}

export default SearchBar;

const FormStyle = styled.form`
    display: flex;
    flex-direction: row;
    gap: 5px;
`;

const SearchInput = styled.input`
    padding: 1rem 15rem 1rem 15rem;
    color: #ffffff;
    text-align: center;
    border-radius: 5px;
    border: None;
    background-color: #3333333e;

    &::placeholder{
        color: #ffffff;
    }
`;