import { useEffect } from "react";
import { useState } from "react";
import API from '../../helpers/api';
import { MoviesList, Link } from "./Home.styled";

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendinngMovies();

    async function getTrendinngMovies() {
      try {
        const fetchMovies = await API.fetchTrendingMovies();
        console.log(fetchMovies);
        setTrendingMovies(fetchMovies);

      } catch (error) {
        console.log(error);
      };
    };
  }, []);

  return (
    <main>
      <MoviesList>
        {trendingMovies.map(({id, title}) => (
          <li key={id}>
            <Link to={`/movies/:${id}`}>{title}</Link>
          </li>
        ))}
      </MoviesList>
    </main>
  );
};