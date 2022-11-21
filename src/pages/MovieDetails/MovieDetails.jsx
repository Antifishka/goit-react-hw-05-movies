import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import API from "../../helpers/api";
import { BASE_IMAGE_URL, PlACEHOLDER_POSTER_URL } from 'constants/constants';
import { MovieBox, MovieInfo, MovieCastBox, MovieGenres, MovieText, MovieItem } from "./MovieDetails.styled";

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

  const { poster_path, title, vote_average, overview, genres } = movie;

  const imagePath = poster_path
    ? BASE_IMAGE_URL + poster_path
    : PlACEHOLDER_POSTER_URL;

  // const year = release_date.slice(0, 4);

  const userScore = () => {
    return Math.round(vote_average * 10);
  }

  return (
    <main>
      <MovieBox> 
        <img src={imagePath} alt={title} width="200"/>
        <MovieInfo>
          <h2>{title}
            {/* <span>({year})</span> */}
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