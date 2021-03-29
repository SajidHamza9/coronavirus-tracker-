import { CardStyle } from './style';
import CountUp from 'react-countup';

const Card = ({ color, title, number }) => {
  return (
    <CardStyle color={color}>
      <h1>{title}</h1>
      <span>
        <CountUp start={0} end={number} duration={2} separator='.' />
      </span>
    </CardStyle>
  );
};

export default Card;
