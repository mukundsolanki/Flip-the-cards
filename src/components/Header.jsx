import React from 'react'

export default function Header(props) {
  return (
    <header className="header">
      <h4>{props.wins} wins</h4>
      <h3>Memory Game</h3>
      <button onClick={props.resetGame}>New Game</button>
    </header>
  )
}
