import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Pesquisar" />
            <button type="submit">Buscar</button>
        </form>
    )
}

export default SearchBar;
