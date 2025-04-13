import React, { useEffect, useState } from 'react'
import GameList from '../../components/GameList';
import styled from 'styled-components';
import { getGames } from '../../api/api';

export default function Home({ account, setAccount, search, gamesList, setGamesList }) {

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function fetchGames() {

      const params = {
        page: page,
        sort: "popularity",
        system: "windows",
        onlyGames: true,
        mediaType: "game",
        price: "discounted",
        search: search
      }

      if (search) {
        params.price = '';
      }

      const games = await getGames(params);

      setGamesList((prev) => {
        const newGames = games.filter(game => !prev.some(prevGame => prevGame.id === game.id));
        return [...prev, ...newGames];
      });
      setIsLoading(false);
    }

    fetchGames();


  }, [search, page]);

  const showMore = () => {
    if (isLoading) return
    setPage(page + 1);
  }

  return (
    <HomePage>
      {<GameList account={account} setAccount={setAccount} search={search} gamesList={gamesList} />}
      {<ShowMoreStyle onClick={showMore}> {isLoading ? "Carregando..." : "Carregar Mais"} </ShowMoreStyle>}
    </HomePage>
  );
}

const ShowMoreStyle = styled.button`
    background-color: #3333333e;
    border-radius: 5px;
    border: None;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    width: fit-content;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 10px;
`;


const HomePage = styled.div`
  display: flex;
  min-height: 100%;
  justify-content: center;
  align-items: center;
`;  