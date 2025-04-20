import React, { useEffect, useState } from 'react'
import GameList from '../../components/GameList';
import styled from 'styled-components';
import { getGames } from '../../api/api';
import { FaChevronUp } from "react-icons/fa";


export default function Home({ account, setAccount, search, gamesList, setGamesList }) {
  
  const [filters, setFilters] = useState(() => ({
    category: [],
    system: [],
  }));


  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function fetchGames() {

      const params = {
        page: page,
        sort: "popularity",
        onlyGames: true,
        mediaType: "game",
        price: "discounted",
        search: search,
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

  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsOnTop(false);
      } else {
        setIsOnTop(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HomePage>
      {<GameList account={account} setAccount={setAccount} search={search} gamesList={gamesList} filters={filters} updateFilters={setFilters} loading={isLoading} />}
      {!isOnTop && <BackTop  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
        <FaChevronUp/>
      </BackTop>}
      {<ShowMoreStyle onClick={showMore}> {isLoading ? "Carregando..." : "Carregar Mais"} </ShowMoreStyle>}
    </HomePage>
  );
}

const BackTop = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: #333333;
  border-radius: 5px;
  border: solid 1px #ffffff;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: fit-content;
  font-size: 16px;
  cursor: pointer;
`;

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


const HomePage = styled.section`
  display: flex;
  width: 100%;
  max-width: 100%;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
`;  