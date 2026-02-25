import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0px !important;
    padding: 0;
    overflow-x: hidden;
  }
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
  h1 { font-size: 2rem; margin-bottom: 10px; }
  p { color: #666; font-size: 1.1rem; }
`;

export const ScoreSection = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  max-width: 600px;
  width: 100%;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CardItem = styled.div`
  aspect-ratio: 1 / 1;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;

export const StyledButton = styled.button`
  margin-top: 30px;
  padding: 12px 40px;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  background-color: #3f51b5;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(63, 81, 181, 0.3);
  transition: all 0.2s;

  &:hover {
    background-color: #303f9f;
    transform: scale(1.05);
  }
`;