import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import API from '../../services/api';
import { MoviesList, Link } from "./Movies.styled";
import { SearchForm } from "components/SearchForm/SearchForm";

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
        {movies.map(({id, title}) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </MoviesList>
    </main>
  );
};