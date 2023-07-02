import React from 'react';
import './App.css';
import random from './components/randomCards.js';
import Card from './components/Card.jsx';
import { useState, useEffect } from 'react';
import Header from './components/Header';

function App() {

  const [cards, setCards] = useState(random);

  // Selecting two cards at a time and comparing them both to be matched
  const [selectFirst, setselectFirst] = useState(null);
  const [selectSecond, setselectSecond] = useState(null);

  const [disabled, setDisabled] = useState(false); //To disable the click event
  const [wins, setWins] = useState(0); //final state for the cards

  const handleClick = (card) => {
    if (!disabled) {
      // selectFirst ? setselectSecond(card) : setselectFirst(card);
      if(selectFirst){
        setselectSecond(card);
      }
      else{
        setselectFirst(card);
      }
    }
  };

  const handleTurn = () => {
    setselectFirst(null);
    setselectSecond(null);
    setDisabled(false);
  };

  const resetGame = () => {
    setWins(0);
    handleTurn();
    setCards(random);
  };

  useEffect(() => {
    let pickTimer;

    if (selectFirst && selectSecond) {
      // Checking the same type of selected cards
      if (selectFirst.image === selectSecond.image) {
        setCards((prevCards) => {

          return prevCards.map((card) => {
            if (card.image === selectFirst.image) {
              return { ...card, matched: true };
            } else {
              // console.log("No match found");
              return card;
            }
          });
          
        });
        handleTurn();
      } else {
        setDisabled(true);

        pickTimer = setTimeout(() => {
          handleTurn();
        }, 1000);
      }
    }

    return () => {
      clearTimeout(pickTimer);
    };
  }, [cards, selectFirst, selectSecond]);

  useEffect(() => {
    // Check for any remaining card matches
    const checkWin = cards.filter((card) => !card.matched);

    if (cards.length && checkWin.length < 1) {
      console.log('You win!');
      setWins(wins + 1);
      handleTurn();
      setCards(random);
    }
  }, [cards, wins]);

  return (
    <>
    <Header wins={wins} resetGame={resetGame}/>
      <div className='grid'>
        {cards.map((card) => {
          const { image, id, matched } = card;

          return (
            <Card
              key={id}
              image={image}
              selected={card === selectFirst || card === selectSecond || matched}
              onClick={() => { handleClick(card) }}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;