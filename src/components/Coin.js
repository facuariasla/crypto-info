import React from "react";
import { Link } from "react-router-dom";
import "./Coin.css";

export const Coin = ({
  image,
  coinName,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
  id
}) => {
  return (
    <Link to={`/coin/${id}`}>
      <div className="coin-container">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{coinName}</h1>
          <p className="coin-symbol">{symbol.toUpperCase()}</p>

          <div className="coin-data">
            <p className="coin-price">$ {price}</p>
            {/* el toLocaleString() agrega las comas */}
            <p className="coin-volume">VOL: $ {volume.toLocaleString()}</p>
            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )}
            <p className="coin-marketcap">
              MKT CAP: $ {marketcap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
