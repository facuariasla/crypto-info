import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './CoinPage.css';
import ReactHtmlParser from 'react-html-parser'

const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState()
  const [coinDes, setCoinDes] = useState('')
  const [coinMarketC, setcoinMarketC] = useState()

  useEffect(()=>{
    axios(SingleCoin(id))
    .then((res)=>{
      setCoin(res.data);
      setCoinDes(res.data.description.en);
      setcoinMarketC(res.data.market_data.market_cap.usd)
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])



  return (
    <div className='coin-data-container'>
      <div className='coin-data'>

        <div className='coin-card-info'>
          <img src={coin?.image['large']} alt=''/>
          <h2>{coin?.name}</h2>
          <p>{ReactHtmlParser(coinDes.split(". ")[0])}</p>
          <div className='card-market'>
            <p><strong>Rank:</strong> {coin?.market_cap_rank}</p>
            <p><strong>Price:</strong> {coin?.market_data.current_price.usd} USD</p>
            <p><strong>Market Cap:</strong> {coinMarketC.toLocaleString()} USD</p>

          </div>
        </div>


        <div className='coin-chart'>

        </div>

      </div>
    </div>
  )
}
