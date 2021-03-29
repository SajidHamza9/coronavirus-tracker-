import axios from 'axios';

const url1 = 'https://covid19.mathdro.id/api';
const url2 = 'https://covid19.mathdro.id/api/countries';

export const fetchDefaultData = async () => {
  try {
    const { data } = await axios.get(url1);
    const { confirmed, recovered, deaths } = data;
    return { confirmed, recovered, deaths };
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(url2);
    return data.countries;
  } catch (error) {}
};

export const fetchCountryDetail = async (country) => {
  try {
    const { data } = await axios.get(`${url2}/${country}`);
    const { confirmed, recovered, deaths } = data;
    return { confirmed, recovered, deaths };
  } catch (error) {}
};
