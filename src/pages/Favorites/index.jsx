import { useEffect, useState } from "react"
import { searchFavoriteGames, searchGames } from "../../api/api";
import GameList from "../../components/GameList";
import styled from "styled-components";

export default function Favorites({ account, setAccount }) {

    const [GameListFavorites, setGameListFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchFavoriteGames = async () => {
            try {


                setGameListFavorites(await searchFavoriteGames(account.favoriteGames));
                setIsLoading(false);

            } catch (error) {
                if (error.response && error.response.status === 429) {
                    console.warn("Too many requests. Please wait 30 seconds and try again later.");

                } else {
                    console.error("Erro ao buscar jogos:", error);
                }
            }
        };

        fetchFavoriteGames();

    }, [account.favoriteGames]);

    return (
        <FavoritesPage>
            {isLoading && <p>Loading...</p>}
            {!isLoading && account?.favoriteGames && <GameList account={account} setAccount={setAccount} gamesList={GameListFavorites} />}
            {account.favoriteGames.length === 0 && <Message>Você ainda não possui jogos favoritos.</Message>}
        </FavoritesPage>
    )
}

const FavoritesPage = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Message = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: white;
`;
