import axios from "axios";

async function fetchTrendingMovies() {
    const apiInstance = axios.create({
        baseURL: 'https://api.themoviedb.org/3/',
        params: {
            api_key: 'e09f06c48afcb3ebfd8a25b0b6965d1e',
            media_type: 'movie',
            time_window: 'day',
            // q: `${query}`,
            language: 'en-US',
            // page: `${page}`,
        },
    });
        
    const response = await apiInstance.get('trending/');
     
    const trendingMovies = response.data;

    if (!response.ok) {
        throw new Error(response.status);
    }
    
    return trendingMovies;
} 

const api = {
    fetchTrendingMovies,
}

export default api;