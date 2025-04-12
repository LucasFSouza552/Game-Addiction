import React from 'react'
import GameList from '../../components/GameList';

export default function Search({ account, setAccount, search }) {
  return (
    <div>
      <GameList searchTerms={search} account={account} setAccount={setAccount} />
    </div>
  )
}

