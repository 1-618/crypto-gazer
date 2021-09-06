import React from 'react';
import './Coin.css';
import ICoinProps from './CoinInfo'

const Coin = (props:any) => {
   const {
        name,
            price,
            symbol,
            marketcap,
            volume,
            image,
            priceChange
    } = props
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img className="" src={image} alt='crypto' />
                    <h1 className="">{name}</h1>
                    <p className=''>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${price}</p>
                    <p className='coin-volume'>${volume.toLocaleString()}</p>

                    {priceChange < 0 ? (
                        <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                    )}

                    <p className='coin-marketcap'>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Coin;
