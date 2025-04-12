import { useEffect, useState } from "react"
import { getGames } from "../api/api";
import Card from "./Card";

const GameList = ({ account, setAccount, searchTerms }) => {
    const [gamesList, setGamesList] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {

                const params = (searchTerms ? {
                    search: searchTerms,
                    mediaType: "game",
                    page: 1
                } : {
                    page: 1,
                    sort: "popularity",
                    system: "windows",
                    onlyGames: true,
                    mediaType: "game",
                    price: "discounted"
                })

                const response = await getGames(params);
                setGamesList(response);
            } catch (error) {
                console.error("Erro ao buscar jogos:", error);
            }
        }

        fetchGames();
    }, [searchTerms]);

    const toggleFavorite = (gameID) => {
        setAccount((prevAccount) => {
            const alreadyFavorited = prevAccount.favoriteGames.includes(gameID);
            const updatedFavorites = alreadyFavorited
                ? prevAccount.favoriteGames.filter(id => id !== gameID)
                : [...prevAccount.favoriteGames, `${gameID}`];

            return {
                ...prevAccount,
                favoriteGames: `${updatedFavorites}`
            };
        });
    };

    return (
        <>
            {gamesList
                && gamesList.map((game, index) => {
                    return (
                        <Card
                            game={game}
                            key={game.id + "-" + index}
                            isFavorite={account?.favoriteGames?.includes(game.id)}
                            onToggleFavorite={() => toggleFavorite(game.id)}
                        />
                    )
                })}
            {gamesList.length === 0 && <p>Não foram encontrados jogos</p>}
        </>

    )
}

export default GameList;