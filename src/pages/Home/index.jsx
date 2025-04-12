import React from 'react'
import GameList from '../../components/GameList';

export default function Home({ account, setAccount }) {

  return (
    <div>
      Home Page
      {<GameList account={account} setAccount={setAccount} />}
    </div>
  );
}