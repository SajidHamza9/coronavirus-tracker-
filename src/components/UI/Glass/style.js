import styled from 'styled-components';

export const GlassStyle = styled.div`
  background: #fff;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  backdrop-filter: blur(28px);
  border-radius: 21px;
  width: 75%;
  height: 85%;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
