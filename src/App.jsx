import React from 'react';
import * as S from './styles';

const POKEBALL_IMAGE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";
const TEST_POKEMON = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png";

function App() {
  const cards = Array(12).fill(null);

  return (
    <S.GameContainer>
      <S.Header>
        <h1>Play the Flip card game</h1>
        <p>Select two cards with same content consecutively to make them vanish</p>
      </S.Header>

      <S.ScoreSection>
        <span>MOVES: 1</span>
        <span>BEST SCORE: 13</span>
      </S.ScoreSection>

      <S.Grid>
        {cards.map((_, index) => (
          <S.CardItem key={index}>
            <img 
              src={index < 2 ? TEST_POKEMON : POKEBALL_IMAGE} 
              alt="card" 
            />
          </S.CardItem>
        ))}
      </S.Grid>

      <S.StyledButton>RESTART</S.StyledButton>
    </S.GameContainer>
  );
}

export default App;