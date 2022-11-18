import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'e09f06c48afcb3ebfd8a25b0b6965d1e',
        language: 'en-US',
        // page: `${page}`,
    },
});

async function fetchTrendingMovies() {
    const response = await apiInstance.get('trending/movie/day');
     
    const trendingMovies = response.data.results;

    if (!trendingMovies.length) {
        throw new Error(`Sorry, there are no movies matching your search query. Please try again.`)
    }

    return trendingMovies;
};

async function fetchMovieById(id) {
    const response = await apiInstance.get(`movie/${id}`);
    return response;
}

async function fetchSearchMovies(query) {
    const response = await apiInstance.get(`search/movie?query=${query}`);

    const searchMovies = response.data.results;

    if (!searchMovies.length) {
        throw new Error(`Sorry, there are no movies matching your search query. Please try again.`)
    }

    return searchMovies;
}

const api = {
    fetchTrendingMovies,
    fetchMovieById,
    fetchSearchMovies,
}

export default api;