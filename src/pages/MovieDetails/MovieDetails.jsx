import { useState, useEffect, Suspense } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import API from "../../services/api";
import { BASE_IMAGE_URL, PlACEHOLDER_POSTER_URL } from 'constants/constants';
import { MovieBox, MovieImg, MovieInfo, MovieCastBox, MovieGenres, MovieText, MovieItem } from "./MovieDetails.styled";
import { BackButton } from "components/BackButton/BackButton";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    getMovieById();

    async function getMovieById() {
      try {
        const fetchMovie = await API.fetchMovieById(Number(movieId));
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

  const { poster_path, title, vote_average, overview, genres, release_date } = movie;

  const imagePath = poster_path
    ? BASE_IMAGE_URL + poster_path
    : PlACEHOLDER_POSTER_URL;

  const year = release_date ? release_date.slice(0, 4) : `No year`;

  const userScore = () => {
    return Math.round(vote_average * 10);
  }

  // const backLinkHref = location.state?.from ?? '/';

  return (
    <main>
      <BackButton>Go back</BackButton>

      <MovieBox> 
        <MovieImg src={imagePath} alt={title} width="200"/>
        <MovieInfo>
          <h2>{title}
            <span> ({year})</span>
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

      <Suspense fallback={null}>
        <Outlet/>
      </Suspense> 
    </main>
  );
};

export default MovieDetails;