import React from 'react'
import GameList from '../../components/GameList';
import styled from 'styled-components';

export default function Home({ account, setAccount }) {

  return (
    <HomePage>
      Home Page
      {<GameList account={account} setAccount={setAccount} />}
    </HomePage>
  );
}

const HomePage = styled.div`
  display: flex;
  min-height: 100%;
`;  