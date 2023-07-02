import React from 'react'

export default function Header(props) {
  return (
    <header className="header">
      <h4>{props.wins} WINS!</h4>
      <h3>FLIP THE CARDS</h3>
      <button onClick={props.resetGame}>New Game</button>
    </header>
  )
}
