import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/newsAction';

function News() {

    const dispatch = useDispatch();
    const { news, isLoading, error } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

  return (
    <div>
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {news && (
            <ul>
                {news.map((article, index) => (
                    <li key={index}>
                        <a href={article.url} target='_blank' rel='noopener noreferrer'>
                            <h2>{article.title}</h2>
                        </a>
                        <p>{article.description}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default News;