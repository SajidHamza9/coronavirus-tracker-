import image from '../../coronavirus.svg';
import { Image1, Image2 } from './style';

const Background = () => {
  return (
    <>
      <Image1 src={image} alt='image' />
      <Image2 src={image} alt='image' />
    </>
  );
};

export default Background;
