import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'e09f06c48afcb3ebfd8a25b0b6965d1e',
        // q: `${query}`,
        language: 'en-US',
        // page: `${page}`,
    },
});

async function fetchTrendingMovies() {
    const response = await apiInstance.get('trending/movie/day');
     
    const trendingMovies = response.data.results;

    // if (!response.ok) {
    //     throw new Error(response.status);
    // }

    return trendingMovies;
};

async function fetchMovieById(id) {
    const response = await apiInstance.get('movie/${id}');
    return response;
}



const api = {
    fetchTrendingMovies,
    fetchMovieById
}

export default api;