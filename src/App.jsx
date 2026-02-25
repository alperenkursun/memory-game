import React, { useState } from 'react';
import { Global } from '@emotion/react';
import * as S from './styles';

const POKEBALL_IMAGE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";

const prepareDynamicCards = () => {
  const randomIds = new Set();
  
  while (randomIds.size < 6) {
    const randomId = Math.floor(Math.random() * 1010) + 1;
    randomIds.add(randomId);
  }

  const pokemonList = Array.from(randomIds).map(id => ({
    src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    matched: false
  }));

  return [...pokemonList, ...pokemonList]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

function App() {
  const [cards, setCards] = useState(() => prepareDynamicCards());
  const [moves, setMoves] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    const saved = localStorage.getItem('bestScore');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    setCards(prepareDynamicCards());
    setChoiceOne(null);
    setChoiceTwo(null);
    setMoves(0);
    setDisabled(false);
  };

  const checkGameOver = (updatedCards, currentMoves) => {
    const isGameOver = updatedCards.every(card => card.matched);
    if (isGameOver) {
      if (bestScore === 0 || currentMoves < bestScore) {
        localStorage.setItem('bestScore', currentMoves);
        setBestScore(currentMoves);
      }
    }
  };

  const handleChoice = (clickedCard) => {
    if (disabled || clickedCard.id === choiceOne?.id || clickedCard.matched) return;

    if (!choiceOne) {
      setChoiceOne(clickedCard);
    } else {
      setChoiceTwo(clickedCard);
      setDisabled(true);
      const nextMoves = moves + 1;
      setMoves(nextMoves);

      if (choiceOne.src === clickedCard.src) {
        setCards(prevCards => {
          const updated = prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            }
            return card;
          });
          checkGameOver(updated, nextMoves);
          return updated;
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  return (
    <>
      <Global styles={S.globalStyles} />
      <S.GameContainer>
        <S.Header>
          <h1>Poke-Memory Challenge</h1>
          <p>Find all 6 pairs from the entire Pokedex!</p>
        </S.Header>

        <S.ScoreSection>
          <span>MOVES: {moves}</span>
          <span>BEST SCORE: {bestScore}</span>
        </S.ScoreSection>

        <S.Grid>
          {cards.map((card) => (
            <S.CardItem 
              key={card.id} 
              onClick={() => handleChoice(card)}
              style={{ visibility: card.matched ? 'hidden' : 'visible' }}
            >
              <img 
                src={(card === choiceOne || card === choiceTwo || card.matched) ? card.src : POKEBALL_IMAGE} 
                alt="pokemon" 
              />
            </S.CardItem>
          ))}
        </S.Grid>

        <S.StyledButton onClick={shuffleCards}>RESTART WITH NEW POKEMON</S.StyledButton>
      </S.GameContainer>
    </>
  );
}

export default App;