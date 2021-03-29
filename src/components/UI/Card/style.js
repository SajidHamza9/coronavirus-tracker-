import styled from 'styled-components';

export const CardStyle = styled.div`
  background: linear-gradient(
    118.12deg,
    #fffefe 0%,
    rgba(255, 254, 254, 0.65) 100%
  );
  border-radius: 15px;
  width: 80%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border-left-color: ${({ color }) => color};
  border-left-width: 1.3rem;
  border-left-style: solid;
  font-family: sans-serif;
  font-weight: bold;

  h1 {
    font-size: 30px;
  }

  span {
    font-size: 33px;
    color: ${({ color }) => color};
  }
`;
