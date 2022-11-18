import { useState, useEffect } from "react";
import API from '../../helpers/api';
import { MoviesList, Link } from "./Movies.styled";
import { SearchForm } from "components/SearchForm/SearchForm";

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

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
  
  return (
    <main>
      <SearchForm onSubmit={handleFormSubmit}/>

      <MoviesList>
        {movies.map(({id, title}) => (
          <li key={id}>
            <Link to={`/movies/:${id}`}>{title}</Link>
          </li>
        ))}
      </MoviesList>
    </main>
  );
};