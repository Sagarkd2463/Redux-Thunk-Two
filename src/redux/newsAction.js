export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

export const fetchNewsRequest = () => {
    return {
        type: FETCH_NEWS_REQUEST
    };
};

export const fetchNewsSuccess = (news) => {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload: news
    };
};

export const fetchNewsFailure = (error) => {
    return {
        type: FETCH_NEWS_FAILURE,
        payload: error
    };
};

const API_key = 'fa5266c12e664384880690b14e919108';

export const fetchNews = () => {
    return (dispatch) => {
        dispatch(fetchNewsRequest());
        fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=${API_key}`)
        .then((response) => response.json())
        .then((data) => {
            const news = data.articles.map((article) => {
                return {
                    title: article.title,
                    url: article.url,
                    description: article.description
                };
            });
            dispatch(fetchNewsSuccess(news));
        })
        .catch((error) => {
            dispatch(fetchNewsFailure(error.message));
        });
    };
};

