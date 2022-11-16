import { useEffect } from "react";
import { useState } from "react";
import API from '../helpers/api';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendinngMovies();

    async function fetchTrendinngMovies() {
      try {
      const fetchMovies = await API.fetchTrendingMovies();
      console.log(fetchMovies);
      //Порядок важен! Сначала кладем данные, потом статус.
      setTrendingMovies(fetchMovies);

      } catch (error) {
      console.log(error);
      };
    };
  })

  return (
    <main>
      <ul>
        <li>
          {}
        </li>
      </ul>
    </main>

  );
};