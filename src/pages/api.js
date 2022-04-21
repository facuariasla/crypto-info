const SINGLE_COIN = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

const HISTORICAL_CHART = (id, vs, days=365) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${vs}&days=${days}
  `;
const TRENDING_COINS = () =>
  `  https://api.coingecko.com/api/v3/search/trending`;
const COIN_LIST = () =>
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
