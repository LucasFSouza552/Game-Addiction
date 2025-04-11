import React, { useEffect, useState } from 'react'
import Card from '../../components/Card';
import { getGames } from '../../api/api';

export default function Home({ account }) {
  const [gamesList, setGamesList] = useState([]);
  useEffect(() => {

    async function fetchGames() {
      await getGames({
        mediaType: "game",
        sort: "discount",
        price: "discounted",
        page: 3,
      }).then(setGamesList);
    }

    fetchGames();

  }, [setGamesList]);


  return (
    <div>
      Home Page
      {gamesList && gamesList.map((game) => {

        return (
          <Card game={game} key={game.gameID} />
        )
      }
      )}
    </div>
  )
}
