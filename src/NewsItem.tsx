import React, { useState, useEffect } from 'react';
import { BiLinkExternal } from 'react-icons/bi'
import {INewsProps} from "./News";
import axios from 'axios'

type Props = {
    book: INewsProps;
}


const NewsItem:React.FC = () => {
    const [articles, setArticles] = useState<INewsProps[]>([]);

    useEffect(() => {
        const fetchBooks = async() => {
            const res = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_NEWS_API_KEY}` )
            setArticles(res.data.articles)
            console.log(res.data.articles)
        };
        fetchBooks()
    }, []);


    return (
        <>
            <h1 className="font-bold text-center text-4xl">News</h1>
            <section className="grid grid-cols-1 gap-10 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {articles.map((article) => {
                    const {
                        id,
                        title,
                        description,
                        urlToImage,
                        url,
                        publishedAt,
                        content
                    } = article

                    return (
                        <article key={id}
                                 className="bg-gray-100 py-5 px-10 rounded-lg sm:grid-cols-2 sm:px-5">
                            <div>
                                <h3 className="font-bold my-2 text-2xl">{title}</h3>
                                <p className="mb-4">{title}</p>
                                <p>
                                    <span className="font-bold"> Author:</span>
                                    {description}
                                </p>
                            </div>
                            <ul className="mb-4">
                                <li><span className="font-bold"> Publisher:</span>
                                    {publishedAt}
                                </li>
                                <li><span className="font-bold"> ISBN:</span>
                                    {content}
                                </li>
                            </ul>
                            <div>
                                <a className="flex items-center"
                                   href={url}
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    {title}
                                    <BiLinkExternal/></a>
                            </div>
                        </article>
                    );
                })}
            </section>
        </>
    )
};

export default NewsItem;
