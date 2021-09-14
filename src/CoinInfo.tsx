//Importing this module's dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Coin from "./Coin";
import { FcBinoculars } from 'react-icons/fc'

//Using an interface to define the shape of the data were retrieving from our call to goingecko's api
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
    //Specifying the data points we want from the api using by defining our useState hooks interface as ICoinProps
    const [coins, setCoins] = useState<ICoinProps["coinData"]>([]);
    //Implicitly setting the state of the search box as a string
    const [search, setSearch] = useState('');

    //Running a useEffect hook to call our api as a side effect of the component mounting
    //our hook has no dependencies, thus it only runs when this components mounts
    useEffect(() => {

    //Using the axios get method to fetch coin performance data from coingecko
    //We call the setCoins method of our useState hook to set our coins' state to the data in our response object
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=300&page=1&sparkline=false')
        .then(res => {
          setCoins(res.data)
            console.log(res.data)
        }).catch(error => console.log(error))
  }, [])

    //Defining a function that calls the setSearch hook to capture a search query as it's passed into the search box
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }
    // Filtering coins that match the search input
    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase()))

    {/*Elements that will evaluate to visible UI*/}
  return (
    <div className='coin-app'>
     <div className='coin-search'>
         <FcBinoculars className='coin-logo' />

         {/* Form with an input to execute our handleChange function*/}
         <form>
             <input type='text'
                    placeholder='search for coin..'
                    className='coin-input'
                    onChange={handleChange}
             />

         </form>
     </div>
        {/*Mapping through coins that meet the search criteria and returning a Coin component to display their respective objects*/}
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
//exporting this module's CoinInfo function to be called as a component in our App module
export default CoinInfo;
