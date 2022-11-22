import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import API from '../../services/api';
import { MoviesList } from "./Movies.styled";
import { SearchForm } from "components/SearchForm/SearchForm";
import { MoviesItem } from "components/MoviesItem/MoviesItem";
import { BASE_IMAGE_URL, PlACEHOLDER_IMAGE_URL } from 'constants/constants';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!query) {
      //Первый рендер, query это пустая строка, не делаем fetch 
      return;
    }
    getSearchMovies();

    async function getSearchMovies() {
      try {
        const fetchMovies = await API.fetchSearchMovies(query);
        console.log(fetchMovies);
        setMovies(fetchMovies);

      } catch (error) {
        console.log(error);
      };
    };
  }, [query]);

  const handleFormSubmit = (query) => {
    console.log(query);

    setQuery(query);
    setMovies([]);
  };

  const updateQueryString = (value) => {
    setSearchParams(value !== '' ? { search: value } : {});
  };
  
  return (
    <main>
      <SearchForm onSubmit={handleFormSubmit} onChange={updateQueryString} />

      <MoviesList>
        {movies.map(({ id, title, poster_path, vote_average }) => (
          <MoviesItem 
            id={id}
            title={title} 
            imagePath={poster_path
              ? BASE_IMAGE_URL + poster_path
              : PlACEHOLDER_IMAGE_URL} 
            vote={vote_average
              ? vote_average.toFixed(1)
              : `No vote`
          } />
        ))}
      </MoviesList>
    </main>
  );
};