import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Coin from "./Coin";

export interface ICoinProps {
coinData:{
    id?: string;
    name: string
    image: string;
    symbol: string;
    current_price: number;
    total_volume: number;
    market_cap: number;
    price_change_percentage_24h: number
    }[];
}


const CoinInfo = () => {
  const [coins, setCoins] = useState<ICoinProps["coinData"]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
          setCoins(res.data)
            console.log(res.data)
        }).catch(error => console.log(error))
  }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='coin-app'>
     <div className='coin-search'>
         <h1 className='coin-text'>Search a currency</h1>
         <form>
             <input type='text'
                    placeholder='search'
                    className='coin-input'
                    onChange={handleChange}
             />

         </form>
     </div>
        {filteredCoins.map((coin) => {
            return (
                <Coin
                    key={coin.id}
                    name={coin.name}
                    price={coin.current_price}
                    symbol={coin.symbol}
                    marketcap={coin.total_volume}
                    volume={coin.market_cap}
                    image={coin.image}
                    priceChange={coin.price_change_percentage_24h}
                />
            )
        })}
    </div>
  );
}

export default CoinInfo;
