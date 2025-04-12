import { useEffect, useState } from "react"
import { getGames } from "../api/api";
import Card from "./Card";

const GameList = ({ account, setAccount, searchTerms, onlyFavoriteGames }) => {
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
                });

                const response = await getGames(params);

                if (onlyFavoriteGames) {
                    setGamesList(response.filter(game => account?.favoriteGames?.includes(game.title)));
                    return;
                }

                setGamesList(response);


            } catch (error) {
                console.error("Erro ao buscar jogos:", error);
            }
        };

        fetchGames();

    }, [searchTerms, account.favoriteGames]);


    const toggleFavorite = (slugGame) => {
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
        <>
            {gamesList && gamesList.map((game, index) => {
                return (
                    <Card
                        game={game}
                        key={game.id + "-" + index}
                        isFavorite={account?.favoriteGames?.includes(`${game.title}`)}
                        onToggleFavorite={() => toggleFavorite(game.title)}
                    />
                )
            })}
        </>
    );
}

export default GameList;
