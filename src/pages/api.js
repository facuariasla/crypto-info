export const SINGLE_COIN = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HISTORICAL_CHART = (id, vs, days) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${vs}&days=${days}
  `;
export const TRENDING_COINS = () =>
  `  https://api.coingecko.com/api/v3/search/trending`;
export const COIN_LIST = () =>
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
