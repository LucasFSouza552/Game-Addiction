import styled from "styled-components";
import Card from "./Card";
import GameFilter from "./Filter";
import { useEffect, useState } from "react";

const GameList = ({ account, setAccount, search, gamesList, filters, updateFilters, loading }) => {

    const [filtredGames, setFilteredGames] = useState(gamesList);

    const toggleFavorite = (e, slugGame) => {
        e.stopPropagation();
        setAccount((prevAccount) => {
            const alreadyFavorited = prevAccount.favoriteGames.includes(`${slugGame}`);
            const updatedFavorites = alreadyFavorited
                ? prevAccount.favoriteGames.filter(id => id !== `${slugGame}`)
                : [...prevAccount.favoriteGames, `${slugGame}`];

            return {
                ...prevAccount,
                favoriteGames: updatedFavorites
            };
        });
    };


    useEffect(() => {
        if(!filters || filters?.length === 0) return;
        setFilteredGames(gamesList.filter(game => {
            const searchRegex = new RegExp(search, 'gi');
            const filterCategory = filters.category.length === 0 || filters.category.some(category => game.genres?.includes(category));
            
            const SystemOs = Object.keys(game.worksOn).filter(worksOn => game.worksOn[worksOn]).map((worksOn) => worksOn.toLowerCase());
            const filterSystem = filters.system.length === 0 || filters.system.some(system => SystemOs.includes(system));

            return (search === '' || searchRegex.test(game?.title)) && filterCategory && filterSystem;
        }))
    }, [
        gamesList, filters, search
    ]);

    return (
        <GameContainer>
            {!loading && <GameFilter filters={filters} updateFilters={updateFilters} />}
            <GameListStyle>
                {filtredGames
                    .map((game, index) => {
                        return (
                            <Card
                                game={game}
                                key={game.id + "-" + index}
                                isFavorite={account?.favoriteGames?.includes(`${game.title}`)}
                                onToggleFavorite={(e) => toggleFavorite(e, game.title)}
                                showFavoriteButton={account !== null}
                            />
                        );
                    })}
            </GameListStyle>
        </GameContainer>
    );
}

const GameContainer = styled.section`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    flex-direction: row;  
    padding: 0px;
    margin: 0px;
`;

const GameListStyle = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, minmax(150px, 1fr));
    gap: 20px 10px;
    justify-items: center;
    height: min-content;

    width: 100%;
    margin: 50px 20px;

    transition: all 0.3s ease-in-out forwards;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(150px, 1fr));
        gap: 20px 10px;
    }
    
    @media (min-width: 769px) and (max-width: 1024px) {
        gap: 20px 10px;
        grid-template-columns: repeat(3, minmax(150px, 1fr));
    }
    
    @media (min-width: 1025px) and (max-width: 1280px) {
        gap: 20px 10px;
        grid-template-columns: repeat(4, minmax(150px, 1fr));
    }
    
    @media (min-width: 1281px) and (max-width: 1536px) {
        gap: 20px 10px;
        grid-template-columns: repeat(4, minmax(150px, 1fr));
    }

    &.animate {
        animation: appear 0.5s ease forwards;
    }

    @keyframes appear {
        from {
            opacity: 0;
            transform: scale(0.5);
        }

        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;




export default GameList;