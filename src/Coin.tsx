//Importing this module's dependencies
import React from 'react';
import './Coin.css';
import './App.css'


const Coin = (props:any) => {
   //Destructuring the data passed from the CoinInfo component as props
   const {
        name,
            price,
            symbol,
            marketcap,
            volume,
            image,
            priceChange
    } = props

    {/*Elements that will evaluate to visible UI*/}
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

                    {/*Converting Coin volume to a format that's easier to read */}
                    <p className='coin-volume'>${volume.toLocaleString()}</p>

                    {/*Check if the price of a coin went up or down using a ternary operator,
                    if its down we render a paragraph tag with a red color property, otherwise we render one with a green one

                     The value of priceChange is also restricted to 2 decimal places*/}
                    {priceChange < 0 ? (
                            /*Restricting the value of priceChange to 2 decimal places */
                        <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                    ) : (

                        <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                    )}

                    {/*Converting Coin volume to a format that's easier to read */}
                    <p className='coin-marketcap'>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

//exporting this module's Coin function to be called as a component in our CoinInfo module
export default Coin;
