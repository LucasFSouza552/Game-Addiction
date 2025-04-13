import styled from "styled-components";
import Card from "./Card";

const GameList = ({ account, setAccount, search, gamesList }) => {

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

    return (
        <GameListStyle>
            {gamesList?.filter(game => {
                const searchRegex = new RegExp(search, 'gi');
                return search === '' || searchRegex.test(game?.title);
            })
                .map((game, index) => {
                    return (
                        <Card
                            game={game}
                            key={game.id + "-" + index}
                            isFavorite={account?.favoriteGames?.includes(`${game.title}`)}
                            onToggleFavorite={(e) => toggleFavorite(e, game.title)}
                        />
                    );
                })}
        </GameListStyle>

    );
}



const GameListStyle = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, minmax(150px, 1fr));
    gap: 20px 10px; /* 20px entre linhas, 2px entre colunas */
    justify-items: center;
    align-items: center;

    margin: 50px 20px;

    transition: all 0.3s ease;

    @media (max-width: 500px) {
        grid-template-columns: repeat(1, minmax(150px, 1fr));
        gap: 20px 10px;
    }
    
    @media (min-width: 501px) and (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(150px, 1fr));
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