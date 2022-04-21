import axios from "axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import './CoinGraph.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const HistoricalChart = (id, vs, days) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${vs}&days=${days}
  `;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  elements: {
    point: {
      radius: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

// Para los botones
const chartDays = [
  {
    label: "24 Hours",
    value: 1,
  },
  {
    label: "30 Days",
    value: 30,
  },
  {
    label: "3 Months",
    value: 90,
  },
  {
    label: "1 Year",
    value: 365,
  },
];

export const CoinGraph = ({ coin }) => {
  const [historicalDATA, setHistoricalDATA] = useState();
  const [days, setDays] = useState(1);

  useEffect(() => {
    axios
      .get(HistoricalChart(coin.id, "usd", days))
      .then((res) => {
        setHistoricalDATA(res.data.prices);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [coin.id, days]);

  const data = {
    labels: historicalDATA?.map((el) => {
      let date = new Date(el[0]);
      let time =
        date.getHours() > 12
          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
          : `${date.getHours()}:${date.getMinutes()} AM`;

      return days === 1 ? time : date.toLocaleDateString();
    }),
    datasets: [
      {
        data: historicalDATA?.map((el) => el[1]),
        label: `Price ( Past ${days} Days ) in USD`,
        borderColor: "#EEBC1D",
      },
    ],
  };

  return (
    <div className="chart-and-btn-container">
      <div className="chart-graph">
        {historicalDATA && <Line options={options} data={data} />}
      </div>

      <div className="btn-graph">
        {historicalDATA && chartDays.map((day) => (
          <button
            key={day.value}
            onClick={() => {
              setDays(day.value);
            }}
            selected={day.value === days}
          >
            {day.label}
          </button>
        ))}
      </div>
    </div>
  );
};
