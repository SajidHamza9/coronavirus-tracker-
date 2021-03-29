import { Box } from './style';
import image from '../../coronavirus.svg';

const Country = ({ country, iso2 }) => {
  return (
    <Box>
      <h1>{country}</h1>
      <img
        src={iso2 ? `https://www.countryflags.io/${iso2}/flat/64.png` : image}
      />
    </Box>
  );
};

export default Country;
