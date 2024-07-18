import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const NotesChart = ({ notes }) => {
  const data = {
    labels: notes.map(note => note.date),
    datasets: [
      {
        label: 'Évolution des notes',
        data: notes.map(note => note.grade),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Note'
        },
        min: 0,
        max: 20
      }
    }
  };

  return (
    <div style={{ height: '400px' }}>
      <h2>Évolution des Notes</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default NotesChart;
