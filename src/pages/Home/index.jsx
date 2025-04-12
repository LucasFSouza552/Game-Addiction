import React, { useEffect, useState } from 'react'
import Card from '../../components/Card';
import { getGames } from '../../api/api';
import GameList from '../../components/GameList';

export default function Home({ account, setAccount }) {


  return (
    <HomePage>
      Home Page
      {<GameList account={account} setAccount={setAccount} />}
    </HomePage>
  )
}
