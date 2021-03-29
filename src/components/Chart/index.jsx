import { Doughnut } from 'react-chartjs-2';
import { Wrraper } from './style';

const Chart = ({ stats: { confirmed, recovered, deaths } }) => {
  const active = confirmed - deaths - recovered;
  return (
    <Wrraper>
      <Doughnut
        data={{
          datasets: [
            {
              data: [deaths, recovered, active],
              backgroundColor: ['#fc6f6f', '#4fffa0', '#48a7ff'],
              hoverBackgroundColor: ['#fc6f6fb4', '#4fffa19f', '#48a7ffbb'],
            },
          ],
          labels: ['Deaths', 'Recovered', 'Active'],
        }}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: true,
            position: 'bottom',
          },
        }}
      />
    </Wrraper>
  );
};

export default Chart;
