//922ae91bb949374a39b1418afb4c13e032748b8c
//NEWS API// 12bf12f9a31745fb9c2a9eee3ad8552a
import React from 'react';
import News from "./News";
import CoinInfo from "./CoinInfo";
import {Route, Switch} from "react-router-dom";
import Coin from "./Coin";


const App = () => {
    return (
    <Switch>
        <Route path='/coin' component={CoinInfo}/>
        <Route path='/news' component={News}/>
    </Switch>
    );
};

export default App;
