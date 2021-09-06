import React from 'react';
import NewsItem from "./NewsItem";


export interface INewsProps {
    id:number;
    title:string;
    description:string;
    urlToImage:string;
    url:string;
    publishedAt:string;
    content:string
}

const App = () => {
    return (
        <div>
            <h1>Books app</h1>
            < NewsItem />
        </div>
    );
}

export default App;
