import React from 'react';
// import logo from './logo.svg';
import './App.css';
import random from './components/randomCards';
import Card from './components/Card';

function App() {

  const [cards, setCards] = useState(random); // Cards array from assets

  return (
    <div className='grid'>
        {cards.map((card) => {
          const { image, id, matched } = card;
          
          return (
            <Card
              key={id}
              image={image}
              selected={false}
              onClick={() => {}}
            />
          );
        })}
    </div>
  );
}

export default App;