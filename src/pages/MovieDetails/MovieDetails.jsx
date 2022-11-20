import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import API from "../../helpers/api";
import { MovieBox, MovieInfo, MovieCastBox, MovieGenres, MovieText, MovieItem } from "./MovieDetails.styled";

const BASE_POSTER_URL = `https://image.tmdb.org/t/p/w200`;

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    getMovieById();

    async function getMovieById() {
      try {
        const fetchMovie = await API.fetchMovieById(movieId);
        console.log(fetchMovie);
        setMovie(fetchMovie);

      } catch (error) {
        console.log(error);
      };
    };
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { poster_path, title, vote_average, release_date, overview, genres } = movie;

  const imagePath = `${BASE_POSTER_URL}/${poster_path}`;

  const normalizeData = () => {
    return release_date.slice(0, 4);
  };

  const userScore = () => {
    return Math.round(vote_average * 10);
  }

  return (
    <main>
      <MovieBox> 
        <img src={imagePath} alt={title} width="200"/>
        <MovieInfo>
          <h2>{title}
            <span>()</span>
          </h2>
          <p>User Score {userScore()}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <MovieGenres>
            {genres?.map(({id, name}) => <li key={id}>{name}</li>)}
          </MovieGenres>
        </MovieInfo>
      </MovieBox>
      <MovieCastBox>
        <MovieText>Additional infomation</MovieText>
        <ul>
          <MovieItem>
            <Link to="cast">Cast</Link>
          </MovieItem>
          <MovieItem>
            <Link to="reviews">Reviews</Link>
          </MovieItem>
        </ul>
      </MovieCastBox>
      <Outlet/>
    </main>
  );
};