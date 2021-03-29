import { useEffect, useState } from 'react';
import Card from './components/UI/Card';
import Glass from './components/UI/Glass';
import Col from './components/Helpers/Col';
import Chart from './components/Chart';
import Background from './components/Background';
import CountryPicker from './components/CountryPicker';
import Country from './components/Country';
import { fetchCountries, fetchDefaultData, fetchCountryDetail } from './api';

function App(props) {
  const [stats, setStats] = useState({ confirmed: 0, recovered: 0, deaths: 0 });
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [iso2, setIso2] = useState();
  useEffect(async () => {
    const { confirmed, recovered, deaths } = await fetchDefaultData();
    const statsObj = {
      confirmed: confirmed.value,
      recovered: recovered.value,
      deaths: deaths.value,
    };
    setStats(statsObj);
  }, []);

  useEffect(async () => {
    const data = await fetchCountries();
    console.log(data);
    setCountries(data);
  }, []);

  const selectCountry = async (e) => {
    setCountry(e.value);
    setIso2(e.iso2);
    document.title = e.value;
    const { confirmed, recovered, deaths } = await fetchCountryDetail(e.value);
    const statsObj = {
      confirmed: confirmed.value,
      recovered: recovered.value,
      deaths: deaths.value,
    };
    setStats(statsObj);
  };

  return (
    <>
      <Background />
      <Glass>
        <Col>
          <Card color='#48a7ff' title='Confirmed' number={stats.confirmed} />
          <Card color='#4fffa0' title='Recovered' number={stats.recovered} />
          <Card color='#fc6f6f' title='Deaths' number={stats.deaths} />
        </Col>
        <Col>
          <CountryPicker countries={countries} selectCountry={selectCountry} />
          <Country country={country} iso2={iso2} />

          <Chart stats={stats} />
        </Col>
      </Glass>
    </>
  );
}

export default App;
