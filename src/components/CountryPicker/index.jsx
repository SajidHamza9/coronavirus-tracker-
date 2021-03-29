import Select from 'react-select';
import { CountriesWrraper } from './style';

const CountryPicker = ({ countries, selectCountry }) => {
  return (
    <CountriesWrraper>
      <Select
        inputId='id'
        options={countries.map((item) => ({
          label: item.name,
          value: item.name,
          iso2: item.iso2,
        }))}
        onChange={(e) => selectCountry(e)}
      />
    </CountriesWrraper>
  );
};

export default CountryPicker;
