import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;

  h1 {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    line-height: 42px;
    text-align: center;
  }

  img {
    height: 150px;
    width: 150px;
  }
`;
