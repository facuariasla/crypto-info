import { useEffect, useState } from "react";
import "./Homepage.css";
import axios from "axios";
import { Coin } from "../components/Coins";

// https://www.coingecko.com/es/api/documentation
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

export const Homepage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  // fetch data
  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
            autoFocus
          />
        </form>
      </div>

      <div className="coins-container">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              id={coin.id}
              coinName={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          );
        })}
      </div>
    </div>
  );
};
