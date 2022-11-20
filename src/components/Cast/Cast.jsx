import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../helpers/api";

const BASE_POSTER_URL = `https://image.tmdb.org/t/p/w100`;

export const Cast = () => { 
  const { movieId } = useParams(); 
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits();

    async function getMovieCredits() {
      try {
        const fetchCast = await API.fetchMovieCredits(movieId);
        console.log(fetchCast);
        setCast(fetchCast);

      } catch (error) {
        console.log(error);
      };
    };
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, profile_path, original_name, character }) => {
        return (
          <li key={id}>
            <img
              src={`${BASE_POSTER_URL}/${profile_path}`}
              alt={original_name}
              width="100" />
          <p>{original_name}</p>
          <p>Character: {character}</p>
        </li>)}
        )
      } 
    </ul>
  );
};