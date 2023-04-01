import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ data }) => {
  const chartData = {
    labels: ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61+'],
    datasets: [
      {
        data: Array.from({ length: 7 }, () => 0),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#33FF99',
          '#FF9933',
          '#9966FF',
          '#66CCCC',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#33FF99',
          '#FF9933',
          '#9966FF',
          '#66CCCC',
        ],
      },
    ],
  };

  data.forEach((person) => {
    const age = person.person.age;
    switch (true) {
      case age < 11:
        chartData.datasets[0].data[0] += 1;
        break;
      case age < 21:
        chartData.datasets[0].data[1] += 1;
        break;
      case age < 31:
        chartData.datasets[0].data[2] += 1;
        break;
      case age < 41:
        chartData.datasets[0].data[3] += 1;
        break;
      case age < 51:
        chartData.datasets[0].data[4] += 1;
        break;
      case age < 61:
        chartData.datasets[0].data[5] += 1;
        break;
      default:
        chartData.datasets[0].data[6] += 1;
    }
  });

  return (
    <div>
      <Doughnut data={chartData} />
    </div>
  );
};

export default Chart;
