import React from 'react';
// import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className="header">
      <h4>{props.wins} WINS!</h4>
      <h3>FLIP THE CARDS</h3>
      <button onClick={props.resetGame}>New Game</button>
      <a href="https:github.com/mukundsolanki">
        <img src={'/github-mark-white.png'} alt="GitHub" srcSet="" />
      </a>
    </header>
  )
}
