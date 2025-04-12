import { useEffect, useState } from "react"
import { getGameById, searchGames } from "../../api/api";
import GameList from "../../components/GameList";

export default function Favorites({ account, setAccount }) {

    return (
        <div>
            {account?.favoriteGames && <GameList account={account} setAccount={setAccount} onlyFavoriteGames />}
        </div>
    )
}